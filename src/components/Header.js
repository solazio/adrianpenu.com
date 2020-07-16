import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ path }) => (
  <header id='navigation' className='p-navigation'>
    <div className='p-navigation__row'>
      <div className='p-navigation__banner'>
        <div className='p-navigation__logo'>Adrian Penu</div>
        <a
          href='#navigation'
          className='p-navigation__toggle--open'
          title='menu'>
          <i className='p-icon--menu'></i>
        </a>
        <a
          href='#navigation-closed'
          className='p-navigation__toggle--close'
          title='close menu'>
          <i className='p-icon--close'></i>
        </a>
      </div>
      <nav className='p-navigation__nav'>
        <span className='u-off-screen'>
          <a href='#main-content'>Jump to main content</a>
        </span>
        <ul className='p-navigation__items' role='menu'>
          <li
            className={
              path === "/"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/'>
              Home
            </Link>
          </li>
          {/* <li
            className={
              path === '/projects'
                ? 'p-navigation__item is-selected'
                : 'p-navigation__item'
            }
            role="menuitem"
          >
            <Link className="p-navigation__link" to="/projects">
              News
            </Link>
          </li> */}
          <li
            className={
              path === "/blog"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/blog'>
              Blog
            </Link>
          </li>
          <li
            className={
              path === "/about"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/about'>
              About
            </Link>
          </li>
          <li
            className={
              path === "/contact"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  path: PropTypes.string,
};

Header.defaultProps = {
  path: ``,
};

export default Header;
