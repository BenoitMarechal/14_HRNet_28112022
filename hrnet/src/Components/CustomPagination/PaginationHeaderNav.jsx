import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { setSelected } from '../../Store/slices/dataBaseSlice';
import { setPagination } from '../../Store/slices/paginationSlice';

const PaginationHeaderNav = () => {
  const dispatch = useDispatch();
  ///all employees
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  const pagination = useSelector((state) => state.paginationReducer);
  //console.log(pagination);
  function setNumberOfRows(number) {
    let target = {};
    target.numberOfRows = number;
    //console.log(target);
    dispatch(setPagination(target));
  }
  function change(e) {
    e.preventDefault();
    let target = parseInt(e.target.value);
    setNumberOfRows(target);
  }
  // const [selection, setSelection] = useState({});
  // useEffect(() => {
  //   setSelection(allEmployees.slice(pagination.begin, pagination.end));
  // }, [pagination.numberOfRows]);

  // useEffect(() => {
  //   dispatch(setSelected(selection));
  // }, [selection]);

  return (
    <nav className='tableHeader-wrapper'>
      <div>View</div>
      <select
        name='rows-select'
        id='rows-select'
        onChange={change}
        defaultValue='10'
      >
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
      </select>
      <div>{pagination.numberOfRows === 1 ? 'entry' : 'entries'}</div>
    </nav>
  );
};

export default PaginationHeaderNav;
