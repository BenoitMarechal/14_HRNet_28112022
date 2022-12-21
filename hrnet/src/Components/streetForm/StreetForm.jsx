import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const StreetForm = () => {
  //declare dispatch
  const dispatch = useDispatch();
  //dummy object for redux action
  let form = {};
  //useRef
  const ref = useRef(null);
  function change() {
    dispatch(setValue({ ...form, street: ref.current.value }));
  }
  return (
    <div className='single-text-input'>
      <label htmlFor={'street'}>Street</label>
      <input type='text' id='street' onChange={change} ref={ref} />
    </div>
  );
};
export default StreetForm;
