import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const LastNameForm = () => {
  //declare dispatch
  const dispatch = useDispatch();
  //dummy object for redux action
  let form = {};
  //useRef
  const ref = useRef(null);
  function change() {
    dispatch(setValue({ ...form, lastName: ref.current.value }));
  }

  return (
    <div className='single-text-input'>
      <label htmlFor={'last-name'}>Last Name</label>
      <input type='text' id='last-name' onChange={change} ref={ref} />
    </div>
  );
};
export default LastNameForm;
