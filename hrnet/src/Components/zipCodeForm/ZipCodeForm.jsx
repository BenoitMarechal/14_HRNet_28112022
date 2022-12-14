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
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text'>Zip code</span>
      </label>
      <input
        type='number'
        placeholder='Zip code'
        className='input input-bordered w-full max-w-xs'
        id='zip-code'
        onChange={change}
        ref={ref}
        min={0}
        max={99999}
      />
      <label className='label'>
        {firstTry === false && error !== '' ? (
          <span className='errorMessage'>{error}</span>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};
export default ZipcodeForm;
