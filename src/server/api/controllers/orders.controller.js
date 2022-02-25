const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// Get Order by ID
const getOrderById = async (raw__id) => {
  const id = parseInt(raw__id, 10);
  if (isNaN(id) || id < 1) {
    throw new HttpError(
      'Bad request. Order ID must be an integer and larger than 0',
      400,
    );
  }
  try {
    const orders = await knex('orders AS o')
      .select(
        'o.id',
        'o.status',
        'o.created_at',
        'o.user_id',
        'oi.quantity',
        'p.id',
        'p.name',
        'p.picture',
        'p.stock_amount',
        'p.price',
      )
      .join('order_items AS oi', 'o.id', '=', 'oi.order_id')
      .join('products AS p', 'p.id', '=', 'oi.product_id')
      .where('o.id', '=', id);
    if (orders.length === 0) {
      throw new HttpError(`Order with the id of ${id} not found `, 404);
    }

    return orders;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }

    throw new HttpError('Something went wrong', 500);
  }
};
module.exports = {
  getOrderById,
};

// get orders By User ID
const getOrdersByUserId = async (raw_user_id) => {
  const user_id = +raw_user_id;

  if (isNaN(user_id) || user_id < 1) {
    throw new HttpError('The ID should be a number', 400);
  }
  try {
    const user = await knex('users').select('id').where('id', '=', user_id);

    if (user.length === 0) {
      throw new HttpError('The user ID you provided does not exist', 404);
    }

    const orders = await knex('orders')
      .select(
        'orders.user_id',
        'orders.id as order_number',
        'orders.updated_at',
        'orders.status',
        knex.raw('sum( ?? * ?? ) as ??', ['quantity', 'price', 'total_amount']),
      )
      .leftJoin('order_items', 'order_items.order_id', '=', 'orders.id')
      .leftJoin('users', 'users.id', '=', 'orders.user_id')
      .leftJoin('products', 'products.id', '=', 'order_items.product_id')
      .where({ user_id })
      .groupBy('orders.id')
      .count('orders.id as nr_of_items');
    if (orders.length === 0) {
      throw new HttpError('The user have no orders yet', 404);
    }

    return orders;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('Something went wrong', 500);
  }
};

module.exports = {
  getOrdersByUserId,
};