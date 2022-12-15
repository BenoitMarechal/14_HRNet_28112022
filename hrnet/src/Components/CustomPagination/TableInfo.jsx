import React from 'react';
import { useSelector } from 'react-redux';

const TableInfo = () => {
  const selected = useSelector((state) => state.dataBaseReducer.selected);
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  const pagination = useSelector((state) => state.paginationReducer);
  // console.log(pagination);
  //console.log(selected.length);

  return (
    <div className='tableInfo'>
      <div>Showing</div>
      <div>{pagination.begin}</div>
      <div>to</div>
      <div>{Math.min(pagination.end, allEmployees.length)}</div>
      <div>of</div>
      <div>{allEmployees.length}</div>
      <div>{allEmployees.length === 1 ? 'entry' : 'entries'}</div>
      {/* FILTER a dev */}
      {pagination.filter === '' ? (
        ''
      ) : (
        <div>' '(filtered from {allEmployees.length} total entries)</div>
      )}
    </div>
  );
};

export default TableInfo;
