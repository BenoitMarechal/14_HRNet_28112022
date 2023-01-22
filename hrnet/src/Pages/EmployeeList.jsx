import React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeTable from '../Components/DataTable/EmployeeTable';
import Header from '../Components/Header/Header';

const EmployeeList = () => {
  const headerProps = {
    title: 'Current Employees',
  };
  return (
    <div>
      <Header {...headerProps}></Header>
      <div className='bg-primary pageContainer flex  flex-col items-center min-h-full w-full'>
        {/* <h1 className='text-neutral w-full text-center'>Current Employees</h1> */}
        <div
          id='employee-table_wrapper'
          className='dataTables_wrapper w-full no-footer'
        >
          <EmployeeTable></EmployeeTable>
        </div>
        <NavLink className='btn btn-current mb-5' to='/'>
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default EmployeeList;
