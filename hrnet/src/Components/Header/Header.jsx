import React from 'react';
//import logo from '../Assets/logo.jpg';
import logo from '../Assets/logo_low.jpg';
import './header.scss';
const Header = (props) => {
  return (
    <header className='bg-secondary'>
      <img
        src={logo}
        className='rounded-2xl'
        alt='logo'
        // style={{ height: '150px', position: 'relative' }}
      />
      <h1 className='text-neutral'>{props.title}</h1>
    </header>
  );
};

export default Header;
