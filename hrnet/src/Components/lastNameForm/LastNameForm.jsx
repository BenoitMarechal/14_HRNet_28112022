import { React, useState, useEffect } from 'react';
import SingleTextInput from '../SingleTextInput';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const LastNameForm = () => {
  function change() {
    let target = document.getElementById('last-name').value;
    setLastName(target);
  }
  let props = {
    name: 'Last Name',
    action: change,
  };
  let form = {};
  const dispatch = useDispatch();
  const [lastName, setLastName] = useState('');
  useEffect(
    () => {
      dispatch(setValue({ ...form, lastName: lastName }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastName]
  );
  return <SingleTextInput {...props}></SingleTextInput>;
};
export default LastNameForm;
