import React from 'react';
import SingleTextInput from './SingleTextInput';

const CreateEmployeeForm = () => {
  let basicData2 = ['First Name', 'Last Name'];

  return (
    <form action='#' id='create-employee'>
      {basicData2.map((...elt) => (
        <SingleTextInput
          {...elt}
          key={'basicData' + basicData2.indexOf(...elt)}
        ></SingleTextInput>
      ))}
    </form>
  );
};

export default CreateEmployeeForm;
