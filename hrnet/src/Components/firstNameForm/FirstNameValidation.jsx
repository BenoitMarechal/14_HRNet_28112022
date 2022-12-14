import React from 'react';
import { useSelector } from 'react-redux';

const FirstNameValidation = () => {
  const firstNameError = useSelector(
    (state) => state.errorReducer.firstNameError
  );
  // console.log(firstNameError);
  return <div>error {firstNameError.toString()}</div>;
};

export default FirstNameValidation;
