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
  let navBarProps = {
    function: toggleDevMode,
    onOffParam: devMode,
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
    <div
      id='home-page'
      className='flex flex-col items-center bg-primary h-full w-full'
    >
      <NavBar {...navBarProps}></NavBar>
      {/* DEV FEATURES */}
      <div className='dev-features mb-8'>
        {devMode ? <FormFiller></FormFiller> : ''}
        {devMode ? (
          <button className='btn btn-secondary mx-2' onClick={reset}>
            RESET DATA BASE (dev only)
          </button>
        ) : (
          ''
        )}
      </div>
      <h1>HRnet</h1>
      <NavLink className='btn btn-neutral w-72' to='/employee-list'>
        View Current Employees
      </NavLink>
      <div
        className='container border border-8 border-current bg-secondary rounded-3xl w-1/3 flex flex-col items-center  p-4 m-4'
        id='homepage-content'
      >
        <div
          className='container   flex flex-col items-center'
          id='homepage-content'
        >
          <h2 className=' mx-8  mb-0 w-full rounded-t-xl text-center  border border-4 border-b-0 border-current bg-primary'>
            Create Employee
          </h2>
          <CreateEmployeeForm></CreateEmployeeForm>
        </div>
      </div>
    </div>
  );
};

export default Home;
