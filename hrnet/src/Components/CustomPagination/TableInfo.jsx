import React from 'react';
import { useSelector } from 'react-redux';

const TableInfo = () => {
  const selected = useSelector((state) => state.dataBaseReducer.selected);
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  const pagination = useSelector((state) => state.paginationReducer);
  // console.log(pagination);
  //console.log(selected.length);

  return (
    <div className='tableInfo text-neutral'>
      <div className=''>Showing&nbsp;</div>
      <div className='bold'>{pagination.begin}</div>
      <div>&nbsp;to&nbsp;</div>
      <div className='bold'>{Math.min(pagination.end, selected.length)}</div>
      <div>&nbsp;of&nbsp;</div>
      <div className='bold'>{selected.length}</div>
      <div>&nbsp;{selected.length === 1 ? 'entry' : 'entries'}</div>
      {allEmployees.length === selected.length ? (
        ''
      ) : (
        <div>&nbsp;(filtered from {allEmployees.length} total entries)</div>
      )}
    </div>
  );
};

export default TableInfo;
