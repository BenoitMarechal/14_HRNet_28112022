import { React, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import { resetDataBase } from '../Store/slices/dataBaseSlice';
import { resetError } from '../Store/slices/errorSlice';
import { resetPagination } from '../Store/slices/paginationSlice';
import { useDispatch } from 'react-redux';
import { resetForm } from '../Store/slices/formSlice';
import { fillForm } from '../service/fillForm';
// import { Button } from '@mui/material';
const Home = () => {
  const dispatch = useDispatch();
  function reset() {
    dispatch(resetDataBase());
    dispatch(resetForm());
    dispatch(resetError());
    dispatch(resetPagination());
  }

  useEffect(() => {
    dispatch(resetForm());
    dispatch(resetError());
    dispatch(resetPagination());
  });

  return (
    <div className='pageWrapper' id='home-page'>
      <h1>HRnet</h1>
      <NavLink to='/employee-list'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <button onClick={fillForm}>Fill</button>
      <CreateEmployeeForm></CreateEmployeeForm>
      <button onClick={reset}>RESET DATA BASE (dev only)</button>
    </div>
  );
};

export default Home;
