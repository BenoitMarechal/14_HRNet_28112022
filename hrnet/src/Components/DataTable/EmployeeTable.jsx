import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TableHeader from '../CustomPagination/TableHeader';
//import CustomMaterialPagination from '../CustomPagination/CustomPagination';

const EmployeeTable = () => {
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  const selected = useSelector((state) => state.dataBaseReducer.selected);
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
  return (
    <div className='tableWrapper'>
      <TableHeader></TableHeader>
      <DataTable
        columns={columns}
        data={selected}
        //pagination
        // paginationComponent={CustomMaterialPagination}
      />
    </div>
  );
};

export default EmployeeTable;
