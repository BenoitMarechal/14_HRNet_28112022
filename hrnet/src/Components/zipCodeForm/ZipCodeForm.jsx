import { React, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const ZipcodeForm = () => {
  //declare dispatch
  const dispatch = useDispatch();
  //dummy object for redux action
  let form = {};
  //useRef
  const ref = useRef(null);
  function change() {
    dispatch(setValue({ ...form, zipCode: ref.current.value }));
  }
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.zipCodeError);

  return (
    // <div className='single-text-input'>
    //   <label htmlFor={'last-name'}>last Name</label>
    //   <input type='text' id='last-name' onChange={change} ref={ref} />
    // </div>
    <div className='form-control text-secondary w-full max-w-xs'>
      <label htmlFor='zip-code' className='label'>
        <span className='label-text text-neutral'>Zip code</span>
      </label>
      <input
        type='number'
        placeholder='Zip code'
        className='input input-bordered w-full max-w-xs border border-secondary border-2'
        id='zip-code'
        onChange={change}
        ref={ref}
        min={0}
        max={99999}
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
export default ZipcodeForm;
