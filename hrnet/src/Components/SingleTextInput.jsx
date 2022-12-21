import React, { useRef } from 'react';

const SingleTextInput = (props) => {
  let lowerCaseAndDashProps = props.name.replace(/\s+/g, '-').toLowerCase();
  const formRef = useRef();

  return (
    <div className='single-text-input'>
      <label htmlFor={lowerCaseAndDashProps}>{props.name}</label>
      <input
        type='text'
        id={lowerCaseAndDashProps}
        onChange={props.action}
        ref={formRef}
      />
    </div>
  );
};

export default SingleTextInput;
