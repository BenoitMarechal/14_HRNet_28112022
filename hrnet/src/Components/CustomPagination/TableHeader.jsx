import React from 'react';
import PaginationHeaderNav from './PaginationHeaderNav';
import './customPagination.css';

const TableHeader = () => {
  return (
    <div className='tableHeader-wrapper'>
      <PaginationHeaderNav></PaginationHeaderNav>
      {/* developper pagination search */}
    </div>
  );
};

export default TableHeader;
