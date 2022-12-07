import React from 'react';
import { setValue } from '../../Store/slices/formSlice';
import { useDispatch } from 'react-redux';

const ZipCodeForm = () => {
  let form = {};
  const dispatch = useDispatch();
  function change() {
    let value = document.getElementById('zip-code').value;
    dispatch(setValue({ ...form, zipCode: value }));
  }
  return <input type={'number'} id='zip-code' onChange={change}></input>;
};

export default ZipCodeForm;
