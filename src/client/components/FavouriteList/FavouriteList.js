import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import './FavouriteList.styles.css';

export default function FavouriteList({ productList }) {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Favourites</h2>
      <ul className="container">
        {productList.map((product) => {
          return (
            <div>
              <li>
                <div className="product_container">
                  <div className="image-discount-box">
                    <div>
                      <img
                        className="product_image"
                        src={product.image.src}
                        alt={product.image.alt}
                      />
                    </div>
                    <div
                      style={{
                        display:
                          product.discount !== 0 ? 'inline-block' : 'none',
                      }}
                      className="discount"
                    >
                      {product.discount}%
                    </div>
                  </div>
                  <div className="name-counter-container">
                    <div className="product_name">{product.name}</div>
                    <br />
                    <br />

                    <div className="counter-section">
                      <div className="qty-text">QTY</div>
                      <div>
                        <button
                          className="counter-button"
                          onClick={handleClick2}
                          type="button"
                        >
                          -
                        </button>
                      </div>
                      <div className="counter-box">{counter}</div>
                      <div>
                        <button
                          className="counter-button"
                          onClick={handleClick1}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart_button">
                    <div>
                      <button
                        className="close-button"
                        onClick={action('You have clicked the close button')}
                        type="button"
                      >
                        X
                      </button>
                    </div>
                    <div className="discounted_price">
                      <div
                        style={{
                          display:
                            product.discount !== 0 ? 'inline-block' : 'none',
                          'text-decoration': 'line-through',
                        }}
                      >
                        {product.currency} {product.price}
                      </div>
                      <div
                        style={{
                          display:
                            product.discount === 0 ? 'inline-block' : 'none',
                        }}
                      >
                        {product.currency} {product.price}
                      </div>
                      <div
                        style={{
                          display:
                            product.discount !== 0 ? 'inline-block' : 'none',
                        }}
                      >
                        &nbsp;&nbsp;{product.currency}{' '}
                        {Math.round(
                          product.price * (1 - product.discount / 100),
                        )}
                      </div>
                    </div>
                    <div>
                      <button
                        className="add_button"
                        onClick={action(
                          'You have clicked the add to cart button',
                        )}
                        type="button"
                      >
                        {' '}
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <div className="line" />
            </div>
          );
        })}
      </ul>
    </>
  );
}

FavouriteList.propTypes = {
  productList: PropTypes.objectOf(PropTypes.object).isRequired,
};
