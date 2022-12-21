import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const FirstNameForm = () => {
  //declare dispatch
  const dispatch = useDispatch();
  //dummy object for redux action
  let form = {};
  //useRef
  const ref = useRef(null);
  function change() {
    dispatch(setValue({ ...form, firstName: ref.current.value }));
  }

  return (
    <div className='single-text-input'>
      <label htmlFor={'first-name'}>First Name</label>
      <input type='text' id='first-name' onChange={change} ref={ref} />
    </div>
  );
};
export default FirstNameForm;
