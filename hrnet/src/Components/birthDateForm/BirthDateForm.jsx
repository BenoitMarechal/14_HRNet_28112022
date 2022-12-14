import { React, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const BirthDateForm = () => {
  let form = {};
  const dispatch = useDispatch();
  const [birthDate, setBirthDate] = useState(new Date());

  useEffect(
    () => {
      dispatch(
        setValue({ ...form, birthDate: birthDate.toLocaleDateString() })
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [birthDate]
  );

  return (
    <div className='single-text-input'>
      <label htmlFor='birth-date'>Date of Birth</label>{' '}
      <DatePicker
        id='birth-date'
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
      />
    </div>
  );
};

export default BirthDateForm;
