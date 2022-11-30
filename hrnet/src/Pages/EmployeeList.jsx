import React from 'react';
import { NavLink } from 'react-router-dom';

const EmployeeList = () => {
  return (
    <div className='pageWrapper'>
      <h1>Current Employees</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
};

export default EmployeeList;
