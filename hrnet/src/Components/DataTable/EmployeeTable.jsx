import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TableHeader from '../CustomPagination/TableHeader';
import TableFooter from '../CustomPagination/TableFooter';
//import CustomMaterialPagination from '../CustomPagination/CustomPagination';

const EmployeeTable = () => {
  const columns = [
    {
      name: 'First Name',

      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },

    {
      name: 'Date of Birth',
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },

    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },

    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  const selected = useSelector((state) => state.dataBaseReducer.selected);
  const pagination = useSelector((state) => state.paginationReducer);

  // function getNumberOfPages(numberOfRows, numberOfEntries) {
  //   // console.log(numberOfRows);
  //   // console.log(numberOfEntries);
  //   // let numberOfPages = numberOfEntries / numberOfRows;
  //   // console.log('numberOfPages');
  //   // console.log(numberOfPages);
  //   // console.log('soit');
  //   // console.log(Math.ceil(numberOfPages));
  //   return Math.ceil(numberOfEntries / numberOfRows);
  // }

  // getNumberOfPages(pagination.numberOfRows, allEmployees.length);

  return (
    <div className='tableWrapper'>
      {allEmployees.length !== 0 ? <TableHeader></TableHeader> : ''}
      <DataTable columns={columns} data={allEmployees} />
      {allEmployees.length !== 0 ? <TableFooter></TableFooter> : ''}
    </div>
  );
};

export default EmployeeTable;
