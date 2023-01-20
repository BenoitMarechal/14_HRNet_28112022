import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';
import moment from 'moment';
//import '../../styles/react-datepicker.css';

const BirthDateForm = () => {
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.birthDateError);
  let youngest = moment().subtract(18, 'years').calendar();
  let form = {};
  const dispatch = useDispatch();
  const [birthDate, setBirthDate] = useState(new Date(youngest));

  useEffect(
    () => {
      if (birthDate) {
        dispatch(
          setValue({ ...form, birthDate: birthDate.toLocaleDateString() })
        );
      }
    },
    // eslint-disable-next-line
    [birthDate]
  );

  return (
    <div className='form-control text-secondary  w-full max-w-xs'>
      <label className='label'>
        <span className='label-text text-secondary'>Date of birth</span>
      </label>
      <DatePicker
        id='birth-date'
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
        dateFormat='dd/MM/yyyy'
        className='input input-bordered w-full border border-secondary border-2 max-w-xs'
      />
      <label className='label'>
        {firstTry === false && error !== '' ? (
          <span className='errorMessage label-text text-secondary-alt'>
            {error}
          </span>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};

export default BirthDateForm;
