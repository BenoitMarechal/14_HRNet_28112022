import { React, useState, useEffect } from 'react';
import { departments } from '../Assets/departments';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const DepartmentForm = () => {
  const dispatch = useDispatch();
  let form = {};
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    dispatch(setValue({ ...form, department: selectedOption.label }));
  }, [selectedOption]);
  return (
    <Select
      id='department'
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={departments}
    />
  );
};

export default DepartmentForm;
