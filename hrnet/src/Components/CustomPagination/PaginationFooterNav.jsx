//import { buttonBaseClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPagination } from '../../Store/slices/paginationSlice';

const PaginationFooterNav = () => {
  const pagination = useSelector((state) => state.paginationReducer);
  const selected = useSelector((state) => state.dataBaseReducer.selected);
  const dispatch = useDispatch();
  const [pages, setPages] = useState([]);
  const [pageButtons, setPageButtons] = useState([]);

  useEffect(() => {
    let target = [];
    for (let i = 1; i < pagination.numberOfPages + 1; i++) {
      target.push(i);
      setPages(target);
    }
  }, [pagination, selected]);

  useEffect(() => {
    console.log('filling dummy');
    console.log(pages);
    let dummy = [];
    let max = selected.length;
    console.log(pagination.activePage);
    // pages &&
    pages.map((value) => {
      if (
        value === 1 ||
        value === max ||
        Math.abs(value - pagination.activePage) < 2 ||
        (pagination.activePage < 5 && value < 6) ||
        (max - value < 3 && pagination.activePage > max - 5)
      )
        dummy.push(value);
    });
    console.log(dummy);
    setPageButtons(dummy);
  }, [pagination, selected, pages]);

  function prevNext(number) {
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
  function setPage(number) {
    let target = {};
    target.activePage = number;
    dispatch(setPagination(target));
  }

  return (
    <div className='table-footer-nav'>
      <div
        className='button'
        onClick={() => {
          prevNext(-1);
        }}
      >
        PREV
      </div>
      {/* //////////////////////////////////////////////////// */}
      {pageButtons !== [] ? (
        pageButtons.map((number) => {
          return (
            <button
              key={number}
              onClick={() => {
                setPage(number);
              }}
            >
              {number.toString()}
            </button>
          );
        })
      ) : (
        <div>pas de pages</div>
      )}
      {/* //////////////////////////////////////////////////// */}

      <div
        className='button'
        onClick={() => {
          prevNext(1);
        }}
      >
        NEXT
      </div>
    </div>
  );
};

export default PaginationFooterNav;
