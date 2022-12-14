import React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeTable from '../Components/DataTable/EmployeeTable';

const EmployeeList = () => {
  return (
    <div className='pageWrapper'>
      <h1>Current Employees</h1>
      <div id='employee-table_wrapper' className='dataTables_wrapper no-footer'>
        <EmployeeTable></EmployeeTable>
      </div>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
};

export default EmployeeList;
