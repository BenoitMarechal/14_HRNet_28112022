import React from 'react';
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
        <div
          id='employee-table_wrapper'
          className='dataTables_wrapper w-full no-footer'
        >
          <EmployeeTable></EmployeeTable>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
