import React from 'react';
import SingleTextInput from './SingleTextInput';
let top = ['Street', 'City'];

const FieldSet = () => {
  return (
    <fieldset className='address'>
      <legend>Address</legend>

      {top.map((...elt) => (
        <SingleTextInput
          {...elt}
          key={'top' + top.indexOf(...elt)}
        ></SingleTextInput>
      ))}
      <div className='reminder'>ADD State Select Component</div>
      <label htmlFor='zip-code'>Zip Code</label>
      <input type={'number'} id='zip-code'></input>
    </fieldset>
  );
};

export default FieldSet;
