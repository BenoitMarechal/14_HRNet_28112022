import { React, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../store/slices/formSlice';

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
    <div className='form-control text-secondary w-full max-w-xs'>
      <label htmlFor='last-name' className='label'>
        <span className='label-text text-neutral'>Last Name</span>
      </label>
      <input
        type='text'
        placeholder='Last Name'
        className='input input-bordered  border border-secondary border-2 w-full max-w-xs'
        id='last-name'
        onChange={change}
        ref={ref}
      />
      {firstTry === false && error !== '' ? (
        <div className='label'>
          <span className='errorMessage label-text font-normal text-neutral'>
            {error}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default LastNameForm;
