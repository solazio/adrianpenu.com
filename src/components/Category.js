import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Category = ({ images }) => (
  <div className='col-4'>
    <Link to='/' title='Category'>
      <div className='p-card--category'>
        <div className='p-card--category__title'>Fiction</div>
        <ul className='p-card--category__list'>
          <li className='p-card--category__large'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg'
              alt='Kaldi'
              className='p-card--category__image'
            />
          </li>
          <li className='p-card--category__small'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg'
              alt='Kaldi'
              className='p-card--category__image'
            />
          </li>
          <li className='p-card--category__small'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg'
              alt='Kaldi'
              className='p-card--category__image'
            />
          </li>
          <li className='p-card--category__small'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg'
              alt='Kaldi'
              className='p-card--category__image'
            />
          </li>
        </ul>
      </div>
      {/* {images.map((imageUrl) => (
        <img
          src={imageUrl}
          alt='Kaldi'
          className='p-navigation__image'
          style={{ width: "88px" }}
        />
      ))} */}
    </Link>
  </div>
);

Category.propTypes = {
  images: PropTypes.array,
};

Category.defaultProps = {
  images: [],
};

export default Category;
