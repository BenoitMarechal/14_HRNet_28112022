import React from 'react';
import PaginationHeaderNav from './PaginationHeaderNav';
import './customPagination.css';
import TableSearch from './TableSearch';

const TableHeader = () => {
  return (
    <div className='tableHeader-wrapper'>
      <PaginationHeaderNav></PaginationHeaderNav>
      {/* developper pagination search */}
      <TableSearch></TableSearch>
    </div>
  );
};

export default TableHeader;
