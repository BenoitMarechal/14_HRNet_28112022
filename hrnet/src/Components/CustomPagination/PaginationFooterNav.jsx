//import { buttonBaseClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPagination } from '../../Store/slices/paginationSlice';

const PaginationFooterNav = () => {
  const pagination = useSelector((state) => state.paginationReducer);
  const selected = useSelector((state) => state.dataBaseReducer.selected);
  const dispatch = useDispatch();
  const [pages, setPages] = useState([]);
  const [everyPage, setEveryPage] = useState([]);
  const [pageButtons, setPageButtons] = useState([]);

  useEffect(() => {
    //set "Pages" array with an integer for every page
    let target = [];
    for (let i = 1; i < pagination.numberOfPages + 1; i++) {
      target.push(i);
      setPages(target);
    }
  }, [pagination, selected]);

  useEffect(() => {
    ////set "everyPages" array with a negative value when button must not be generated ('...')
    let max = pagination.numberOfPages;
    let result = pages.map((value) => {
      if (
        value === 1 ||
        value === max ||
        Math.abs(value - pagination.activePage) < 2 ||
        (pagination.activePage < 5 && value < 6) ||
        (max - value < 5 && pagination.activePage > max - 4)
      )
        return value;
      else return -1 * value;
    });

    setEveryPage(result);
  }, [pagination, selected, pages]);

  useEffect(() => {
    //remove consecutive negative values
    let result = [];
    for (let i = 0; i < everyPage.length; i++) {
      if (everyPage[i] > 0 || (everyPage[i] < 0 && everyPage[i - 1] > 0)) {
        result.push(everyPage[i]);
      }
    }

    setPageButtons(result);
  }, [everyPage]);

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
        className='button bold'
        onClick={() => {
          prevNext(-1);
        }}
      >
        PREV
      </div>
      {/* //////////////////////////////////////////////////// */}
      {pageButtons !== []
        ? pageButtons.map((number) => {
            return number < 0 ? (
              <div className='dots bold' key={pageButtons.indexOf(number) + 1}>
                {' '}
                ...
                {/* {pageButtons.indexOf(number) + 1} */}
              </div>
            ) : (
              <button
                className={
                  number === pagination.activePage ? 'bold button' : 'button'
                }
                key={pageButtons.indexOf(number) + 1}
                onClick={() => {
                  setPage(number);
                }}
              >
                {number.toString()}
              </button>
            );
          })
        : ''}
      {/* //////////////////////////////////////////////////// */}

      <div
        className='button bold'
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
