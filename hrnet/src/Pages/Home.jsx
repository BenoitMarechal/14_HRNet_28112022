import { React } from 'react';
import { NavLink } from 'react-router-dom';
import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import { resetDataBase } from '../Store/slices/dataBaseSlice';
import { useDispatch } from 'react-redux';
import { resetForm } from '../Store/slices/formSlice';

const Home = () => {
  const dispatch = useDispatch();
  function reset() {
    dispatch(resetDataBase());
    dispatch(resetForm());
  }

  return (
    <div className='pageWrapper' id='home-page'>
      <h1>HRnet</h1>
      <NavLink to='/employee-list'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <CreateEmployeeForm></CreateEmployeeForm>
      <button onClick={reset}>RESET DATA BASE (dev only)</button>
    </div>
  );
};

export default Home;
