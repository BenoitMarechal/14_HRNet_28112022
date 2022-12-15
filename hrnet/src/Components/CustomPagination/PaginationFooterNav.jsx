import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPagination } from '../../Store/slices/paginationSlice';

const PaginationFooterNav = () => {
  const pagination = useSelector((state) => state.paginationReducer);
  const dispatch = useDispatch();

  function changePage(number) {
    console.log(pagination.numberOfPages);
    console.log(number);
    let target = {};
    if (pagination.activePage + number < 1) {
      target.activePage = 1;
    } else if (pagination.activePage + number > pagination.numberOfPages) {
      target.activePage = pagination.numberOfPages;
    } else {
      target.activePage = pagination.activePage + number;
    }

    dispatch(setPagination(target));
  }
  return (
    <div className='table-footer-nav'>
      <div
        className='button'
        onClick={() => {
          changePage(-1);
        }}
      >
        PREV
      </div>
      <div>' '</div>
      <div
        className='button'
        onClick={() => {
          changePage(1);
        }}
      >
        NEXT
      </div>
    </div>
  );
};

export default PaginationFooterNav;
