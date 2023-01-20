import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';
import '../../styles/react-datepicker.css';

const StartDateForm = () => {
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.startDateError);
  let form = {};
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  // eslint-disable-next-line
  useEffect(
    () => {
      if (startDate) {
        dispatch(
          setValue({ ...form, startDate: startDate.toLocaleDateString() })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [startDate]
  );

  return (
    <div className='form-control text-secondary w-full max-w-xs '>
      <label className='label'>
        <span className='label-text text-secondary'>Start date</span>
      </label>
      <DatePicker
        id='start-date'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat='dd/MM/yyyy'
        className='input input-bordered w-full max-w-xs border border-secondary border-2 '
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
    // <div className='single-text-input'>
    //   <label htmlFor='start-date'>Start Date</label>{' '}
    //   <DatePicker
    //     id='start-date'
    //     selected={startDate}
    //     onChange={(date) => setStartDate(date)}
    //     dateFormat='dd/MM/yyyy'
    //   />
    // </div>
  );
};

export default StartDateForm;
