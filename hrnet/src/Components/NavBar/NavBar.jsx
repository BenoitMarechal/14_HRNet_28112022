import React, { useState } from 'react';

const NavBar = (props) => {
  const [hover, setHover] = useState(false);
  function mouseOver() {
    setHover(true);
  }
  function mouseOut() {
    setHover(false);
  }
  return (
    <nav onMouseOver={mouseOver} onMouseOut={mouseOut} className='w-full'>
      <div className='h-4 w-full hover-container w-100'></div>
      {hover ? (
        <div className='flex  bg-accent h-16 items-center justify-end  w-100   '>
          <div className='form-control w-52 border border-black  '>
            <label className='cursor-pointer label'>
              <span className='label-text'>Dev Mode</span>
              <input
                type='checkbox'
                className='toggle toggle-accent'
                onChange={props.function}
              />
            </label>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};

export default NavBar;
