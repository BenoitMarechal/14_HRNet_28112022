import { React, useState, useEffect } from 'react';
import { states } from '../Assets/states';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const StateForm = () => {
  const dispatch = useDispatch();
  let form = {};
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    dispatch(setValue({ ...form, state: selectedOption.label }));
  }, [selectedOption]);
  return (
    <Select
      id='state'
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={states}
    />
  );
};

export default StateForm;
