import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.styles.css';

function ProductCart(props) {
  const { product, favorites, setFavorites } = props;

  const removeProductFromFavorites = () => {
    console.log('in remove favorites container');

    setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    const result = favorites.find(({ id }) => id === product.id);
    /* if (result === undefined) {
      // console.log('product does not exist in favorites');
    } else {
      // console.log('remove product from the favorites'); */
      const index = favorites.indexOf(result);
      if (index > -1) {
        favorites.splice(index, 1);
        console.log(favorites);
      }
    

    const userId = 10;
    console.log(userId, product.id);
    const api = `/api/favorites?product_id= ${product.id} &user_id=${userId}`;
    console.log(api);

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_id: product.id,
        user_id: userId,
      }),
    };
    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      });
  };

  return (
    <div className="add_cart_button">
      <div>
        <button
          className="close-button"
          onClick={removeProductFromFavorites}
          type="button"
        >
          X
        </button>
      </div>
      <div className="discounted_price">
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
            'text-decoration': 'line-through',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount_percent === 0 ? 'inline-block' : 'none',
          }}
        >
          {product.currency} {product.price}
        </div>
        <div
          style={{
            display: product.discount_percent !== 0 ? 'inline-block' : 'none',
          }}
        >
          &nbsp;&nbsp;{product.currency}{' '}
          {Math.round(product.price * (1 - product.discount_percent / 100))}
        </div>
      </div>
      <div>
        <button
          className="add_button"
          // onClick={onClick}
          type="button"
        >
          {' '}
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    discount_percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
    id: PropTypes.string
  }),
  favorites:PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites:PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductCart.defaultProps = {
  product: null,
};

export default ProductCart;
