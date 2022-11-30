import { React } from 'react';
import { NavLink } from 'react-router-dom';
import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import FieldSet from '../Components/FieldSet';

const Home = () => {
  return (
    <div className='pageWrapper'>
      <h1>HRnet</h1>
      <NavLink to='/employee-list'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <CreateEmployeeForm></CreateEmployeeForm>
      <FieldSet></FieldSet>
      <div className='reminder'>ADD Department Select Component</div>
    </div>
  );
};

export default Home;
