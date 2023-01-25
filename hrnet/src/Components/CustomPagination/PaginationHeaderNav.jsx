import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPagination } from '../../Store/slices/paginationSlice';

const PaginationHeaderNav = () => {
  const dispatch = useDispatch();
  ///all employees
  const pagination = useSelector((state) => state.paginationReducer);
  function setNumberOfRows(number) {
    let target = {};
    target.numberOfRows = number;
    dispatch(setPagination(target));
  }
  function change(e) {
    e.preventDefault();
    let target = parseInt(e.target.value);
    setNumberOfRows(target);
  }
  //////////////////////////////////////

  //////////////////////////
  return (
    <nav className='tableHeader-nav flex items-center'>
      <div className='text-neutral bold'>View</div>
      <select
        name='rows-select'
        id='rows-select'
        onChange={change}
        defaultValue='100000000000000000000000000000000'
        className='text-neutral rounded border border-neutral'
      >
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100000000000000000000000000000000'>All</option>
      </select>
      <div className='text-neutral bold'>
        {pagination.numberOfRows === 1 ? 'entry' : 'entries'}
      </div>
    </nav>
  );
};

export default PaginationHeaderNav;
