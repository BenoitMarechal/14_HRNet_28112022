import { React, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.lastNameError);

  return (
    // <div className='single-text-input'>
    //   <label htmlFor={'last-name'}>last Name</label>
    //   <input type='text' id='last-name' onChange={change} ref={ref} />
    // </div>
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text'>Last Name</span>
      </label>
      <input
        type='text'
        placeholder='Last Name'
        className='input input-bordered w-full max-w-xs'
        id='last-name'
        onChange={change}
        ref={ref}
      />
      <label className='label'>
        {firstTry === false && error !== '' ? (
          <span className='label-text-alt errorMessage'>{error}</span>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};
export default LastNameForm;
