import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import { resetDataBase } from '../Store/slices/dataBaseSlice';
import { resetError } from '../Store/slices/errorSlice';
import { resetPagination } from '../Store/slices/paginationSlice';
import { useDispatch } from 'react-redux';
import { resetForm } from '../Store/slices/formSlice';
import FormFiller from '../service/FormFiller';
import NavBar from '../Components/NavBar/NavBar';

const Home = () => {
  const [devMode, setDevMode] = useState(false);

  function toggleDevMode() {
    let next = !devMode;
    setDevMode(next);
  }
  let props = {
    function: toggleDevMode,
  };
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
      <NavBar {...props}></NavBar>
      <h1>HRnet</h1>
      <NavLink to='/employee-list'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      {/* DEV FEATURE */}
      {devMode ? <FormFiller></FormFiller> : ''}

      <CreateEmployeeForm></CreateEmployeeForm>
      {/* DEV FEATURE */}
      {devMode ? (
        <button className='btn btn-secondary' onClick={reset}>
          RESET DATA BASE (dev only)
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
