import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';
import moment from 'moment';

const BirthDateForm = () => {
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
    <div className='single-text-input'>
      <label htmlFor='birth-date'>Date of Birth</label>{' '}
      <DatePicker
        id='birth-date'
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
        dateFormat='dd/MM/yyyy'
      />
    </div>
  );
};

export default BirthDateForm;
