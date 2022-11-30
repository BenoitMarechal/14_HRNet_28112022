import React from 'react';

const SingleTextInput = (props) => {
  // console.log(props);
  let lowerCaseAndDashProps = props[0].replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='single-text-input'>
      <label htmlFor={lowerCaseAndDashProps}>{props[0]}</label>
      <input type='text' id={lowerCaseAndDashProps} />
    </div>
  );
};

export default SingleTextInput;
