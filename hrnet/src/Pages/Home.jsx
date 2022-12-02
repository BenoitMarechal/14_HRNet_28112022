import { React } from 'react';
import { NavLink } from 'react-router-dom';
import CreateEmployeeForm from '../Components/CreateEmployeeForm';

const Home = () => {
  return (
    <div className='pageWrapper' id='home-page'>
      <h1>HRnet</h1>
      <NavLink to='/employee-list'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <CreateEmployeeForm></CreateEmployeeForm>
    </div>
  );
};

export default Home;
