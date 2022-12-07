import { React, useState, useEffect } from 'react';
import SingleTextInput from '../SingleTextInput';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const FirstNameForm = () => {
  function change() {
    let target = document.getElementById('first-name').value;
    setFirstName(target);
  }
  let props = {
    name: 'First Name',
    action: change,
  };
  let form = {};
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  useEffect(() => {
    dispatch(setValue({ ...form, firstName: firstName }));
  }, [firstName]);
  return <SingleTextInput {...props}></SingleTextInput>;
};
export default FirstNameForm;
