import React from 'react';

const SingleTextInput = (props) => {
  let lowerCaseAndDashProps = props.name.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='single-text-input'>
      <label htmlFor={lowerCaseAndDashProps}>{props.name}</label>
      <input type='text' id={lowerCaseAndDashProps} onChange={props.action} />
    </div>
  );
};

export default SingleTextInput;
