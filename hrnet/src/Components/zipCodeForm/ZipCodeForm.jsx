import React from 'react';
import { setValue } from '../../Store/slices/formSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

const ZipCodeForm = () => {
  let form = {};
  let ref = useRef(null);
  const dispatch = useDispatch();
  function change() {
    dispatch(setValue({ ...form, zipCode: ref.current.value }));
  }
  return (
    <input type={'number'} ref={ref} id='zip-code' onChange={change}></input>
  );
};

export default ZipCodeForm;
