import React from 'react';
import PaginationHeaderNav from './PaginationHeaderNav';

import TableSearch from './TableSearch';

const TableHeader = () => {
  return (
    <div className='tableHeader-wrapper'>
      <PaginationHeaderNav></PaginationHeaderNav>
      <TableSearch></TableSearch>
    </div>
  );
};

export default TableHeader;
