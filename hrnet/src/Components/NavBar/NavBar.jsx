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
        <div className='flex  bg-secondary h-16 items-center justify-end   w-100   '>
          <div className='form-control w-52 border border-2 border-primary mr-10  '>
            <label className='cursor-pointer  label '>
              <span className='label-text  text-primary '>Dev Mode</span>
              {props.onOffParam ? (
                <span className='label-text font-bold text-primary'>On</span>
              ) : (
                <span className='label-text font-light text-primary'>Off</span>
              )}

              <input
                type='checkbox'
                className='toggle toggle-primary'
                onChange={props.function}
                checked={props.onOffParam}
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
