import React from 'react';
import PaginationFooterNav from './PaginationFooterNav';
import TableInfo from './TableInfo';

const TableFooter = () => {
  return (
    <div className='tableFooter-wrapper'>
      <TableInfo></TableInfo>
      <PaginationFooterNav></PaginationFooterNav>
    </div>
  );
};

export default TableFooter;
