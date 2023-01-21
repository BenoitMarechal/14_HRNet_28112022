import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import TableHeader from '../CustomPagination/TableHeader';
import TableFooter from '../CustomPagination/TableFooter';
import { setSelected } from '../../Store/slices/dataBaseSlice';
import {
  setPagination,
  // resetPagination,
} from '../../Store/slices/paginationSlice';
import './dataTable.scss';
//import CustomMaterialPagination from '../CustomPagination/CustomPagination';

const EmployeeTable = () => {
  const dispatch = useDispatch();
  //reset on Mount
  // useEffect(() => {
  //   dispatch(resetPagination());
  //   // eslint-disable-next-line
  // }, []);

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
  function selectAll() {
    let target = allEmployees;
    dispatch(setSelected(target));
  }
  useEffect(() => {
    selectAll();
    // eslint-disable-next-line
  }, []);

  //upadate number of pages
  useEffect(() => {
    let target = {};
    target.activePage = 1;
    target.numberOfPages = Math.ceil(selected.length / pagination.numberOfRows);
    dispatch(setPagination(target));
    // eslint-disable-next-line
  }, [pagination.numberOfRows, selected.length]);

  //update begin and end
  useEffect(() => {
    // console.log('activePage');
    // console.log(pagination.activePage);

    let target = {};
    target.begin =
      pagination.activePage * pagination.numberOfRows -
      pagination.numberOfRows +
      1;
    target.end = target.begin + pagination.numberOfRows - 1;
    //console.log(target);
    dispatch(setPagination(target));
    // eslint-disable-next-line
  }, [pagination.activePage, pagination.numberOfRows]);

  return (
    <div className='tableWrapper'>
      {allEmployees.length !== 0 ? <TableHeader></TableHeader> : ''}
      <DataTable
        columns={columns}
        data={selected.slice(pagination.begin - 1, pagination.end)}
      />
      {allEmployees.length !== 0 ? <TableFooter></TableFooter> : ''}
    </div>
  );
};

export default EmployeeTable;
