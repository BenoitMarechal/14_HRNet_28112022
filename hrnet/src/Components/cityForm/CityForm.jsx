import { React, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.cityError);

  return (
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text'>City</span>
      </label>
      <input
        type='text'
        placeholder='City'
        className='input input-bordered w-full max-w-xs'
        id='city'
        onChange={change}
        ref={ref}
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
export default CityForm;
