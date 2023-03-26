import React from 'react';
import logo from '../../assets/logo_low.jpg';
import { NavLink } from 'react-router-dom';
import './header.scss';
const Header = (props) => {
  return (
    <header className='bg-secondary'>
      <div className='header-nav-section'>
        <NavLink to='/'>
          <img
            src={logo}
            className='rounded-2xl logo'
            style={{ height: '150px', width: '163px', marginRight: '15px' }}
            alt='Wealth Health'
          />
        </NavLink>
        {props.btnText ? (
          <NavLink
            className='btn btn-neutral shadow-inner shadow-slate-400 w-72 '
            to={props.btnTo}
          >
            {props.btnText}
          </NavLink>
        ) : (
          ''
        )}
      </div>

      <h1 className='header-title-section text-yellow-300'>{props.title}</h1>
    </header>
  );
};

export default Header;
