import { React, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../store/slices/formSlice';

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
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.streetError);

  return (
    <div className='form-control text-secondary w-full max-w-xs'>
      <label htmlFor='street' className='label'>
        <span className='label-text text-neutral'>Street</span>
      </label>
      <input
        type='text'
        placeholder='Street'
        className='input input-bordered w-full max-w-xs border border-secondary border-2'
        id='street'
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
export default StreetForm;
