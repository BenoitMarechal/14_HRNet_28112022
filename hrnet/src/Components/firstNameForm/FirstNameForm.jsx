import { React, useState, useEffect } from 'react';
import SingleTextInput from '../SingleTextInput';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const FirstNameForm = () => {
  //sets firstName useState variable as from's value
  function change() {
    let target = document.getElementById('first-name').value;
    setFirstName(target);
  }
  //defines text input's name and what it does on change event
  let props = {
    name: 'First Name',
    action: change,
  };
  //dummy object for redux action
  let form = {};
  //declare dispatch
  const dispatch = useDispatch();
  //declare useState variable
  const [firstName, setFirstName] = useState('');
  // assigns value to the store every time it changes
  useEffect(() => {
    dispatch(setValue({ ...form, firstName: firstName }));
  }, [firstName]);

  return <SingleTextInput {...props}></SingleTextInput>;
};
export default FirstNameForm;
