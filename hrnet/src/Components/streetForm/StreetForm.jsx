import { React, useState, useEffect } from 'react';
import SingleTextInput from '../SingleTextInput';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const StreetForm = () => {
  function change() {
    let target = document.getElementById('street').value;
    setStreet(target);
  }
  let props = {
    name: 'Street',
    action: change,
  };
  let form = {};
  const dispatch = useDispatch();
  const [street, setStreet] = useState('');
  useEffect(
    () => {
      dispatch(setValue({ ...form, street: street }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [street]
  );
  return <SingleTextInput {...props}></SingleTextInput>;
};
export default StreetForm;
