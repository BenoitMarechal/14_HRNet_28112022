import { React, useState } from 'react';
import Select from 'react-select';
import SingleTextInput from './SingleTextInput';

let top = ['Street', 'City'];
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FieldSet = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <fieldset className='address'>
      <legend>Address</legend>

      {top.map((...elt) => (
        <SingleTextInput
          {...elt}
          key={'top' + top.indexOf(...elt)}
        ></SingleTextInput>
      ))}
      <div className='select-container' id='state'>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      {/* <div className='reminder'>ADD State Select Component</div> */}
      <label htmlFor='zip-code'>Zip Code</label>
      <input type={'number'} id='zip-code'></input>
    </fieldset>
  );
};

export default FieldSet;
