import React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeTable from '../Components/DataTable/EmployeeTable';

const EmployeeList = () => {
  return (
    <div className='bg-primary  flex pageContainer flex-col items-center  min-h-full w-full'>
      <h1 className='text-neutral w-full text-center'>Current Employees</h1>
      <div
        id='employee-table_wrapper'
        className='dataTables_wrapper w-full no-footer'
      >
        <EmployeeTable></EmployeeTable>
      </div>
      <NavLink
        className='btn btn-current mb-5 shadow-inner shadow-slate-400 w-72'
        to='/'
      >
        Home
      </NavLink>
    </div>
  );
};

export default EmployeeList;
