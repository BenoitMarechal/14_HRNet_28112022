import React from 'react';
import SingleTextInput from './SingleTextInput';
let top = ['Street', 'City'];
let bottom = [''];

const FieldSet = () => {
  return (
    <fieldset className='address'>
      <legend>Address</legend>

      {top.map((...elt) => (
        <SingleTextInput {...elt}></SingleTextInput>
      ))}
      <div className='reminder'>ADD State Select Component</div>
      <label for='zip-code'>Zip Code</label>
      <input type={'number'} id='zip-code'></input>
    </fieldset>
  );
};

export default FieldSet;
