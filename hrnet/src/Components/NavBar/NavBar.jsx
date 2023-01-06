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
    <nav
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      className=' h-16 w-full hover-container'
    >
      {hover ? (
        <div className='flex  h-16 items-center justify-end  w-full   '>
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
