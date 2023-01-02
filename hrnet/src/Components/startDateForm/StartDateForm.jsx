import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';

import { setValue } from '../../Store/slices/formSlice';

const StartDateForm = () => {
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
    <div className='single-text-input'>
      <label htmlFor='start-date'>Start Date</label>{' '}
      <DatePicker
        id='start-date'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat='dd/MM/yyyy'
      />
    </div>
  );
};

export default StartDateForm;
