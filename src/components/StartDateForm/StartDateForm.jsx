import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../store/slices/formSlice';
import '../../styles/react-datepicker.css';

const StartDateForm = () => {
  let formReducer = useSelector((state) => state.formReducer);
  let error = useSelector((state) => state.errorReducer.startDateError);
  let form = {};
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  // eslint-disable-next-line
  useEffect(
    () => {
      if (
        startDate &&
        startDate.toLocaleDateString() !== formReducer.startDate
      ) {
        dispatch(
          setValue({ ...form, startDate: startDate.toLocaleDateString() })
        );
      }
    },
    // eslint-disable-next-line
    [startDate]
  );

  return (
    <div className='form-control text-secondary w-full max-w-xs '>
      <label htmlFor='start-date' className='label'>
        <span className='label-text text-neutral'>Start date</span>
      </label>
      <DatePicker
        id='start-date'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat='dd/MM/yyyy'
        className='input input-bordered w-full max-w-xs border border-secondary border-2 '
      />
      {formReducer.firstTry === false && error !== '' ? (
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

export default StartDateForm;
