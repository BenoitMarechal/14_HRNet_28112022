import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const CityForm = () => {
  //declare dispatch
  const dispatch = useDispatch();
  //dummy object for redux action
  let form = {};
  //useRef
  const ref = useRef(null);
  function change() {
    dispatch(setValue({ ...form, city: ref.current.value }));
  }

  return (
    <div className='single-text-input'>
      <label htmlFor={'city'}>City</label>
      <input type='text' id='city' onChange={change} ref={ref} />
    </div>
  );
};
export default CityForm;
