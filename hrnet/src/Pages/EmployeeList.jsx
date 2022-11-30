import React from 'react';
import { NavLink } from 'react-router-dom';

const EmployeeList = () => {
  return (
    <div className='pageWrapper'>
      <h1>Current Employees</h1>
      <div id='employee-table_wrapper' className='dataTables_wrapper no-footer'>
        <div className='reminder'>ADD DATA TABLE</div>
      </div>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
};

export default EmployeeList;
