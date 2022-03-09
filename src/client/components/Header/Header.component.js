import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.styles.css';
import faLogo from '../../assets/images/logo.png';
import faUser from '../../assets/images/user-login.png';
import faHeart from '../../assets/images/favorite-icon.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';
// import { InitialShoppingCart } from '../../containers/ShoppingCartPage/ShoppingCartPage.Container';

export default function Header({
  isAuthenticated,
  username,
  link,
  numberOfItemsInCart,
}) {
  // const intialshop = InitialShoppingCart
  //   const numberOfItemsInCart = intialshop.length();

  return (
    <nav>
      {/* LOGO */}
      <Link to="/" className="logo-icon">
        <img src={faLogo} alt="logout" />
      </Link>
      {/* ICONS */}
      <div className="icons-right">
        <Link to="/shopping-cart">
          <button className="icons cart" type="button">
            <div style={{ position: 'relative' }}>
              <img src={faShoppingCart} alt="shopping-cart" />
              {numberOfItemsInCart >= 1 ? (
                <span className="cart-item-number">{numberOfItemsInCart}</span>
              ) : null}
            </div>
          </button>
        </Link>
        <div className="icons">
          <img src={faHeart} alt="favorite" />
        </div>

        <img className="icons" src={faUser} alt="login" />

        {isAuthenticated ? (
          <div className="login icons"> Hello {username}</div>
        ) : (
          <Link className="login icons" to={link}>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string,
  link: PropTypes.string,
  numberOfItemsInCart: PropTypes.number.isRequired,
};

Header.defaultProps = {
  username: 'username',
  link: '/log-in',
};
