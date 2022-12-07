import { React, useState, useEffect } from 'react';
import SingleTextInput from '../SingleTextInput';
import { useDispatch } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const CityForm = () => {
  function change() {
    let target = document.getElementById('city').value;
    setCity(target);
  }
  let props = {
    name: 'City',
    action: change,
  };
  let form = {};
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  useEffect(() => {
    dispatch(setValue({ ...form, city: city }));
  }, [city]);
  return <SingleTextInput {...props}></SingleTextInput>;
};
export default CityForm;
