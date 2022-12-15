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
      <div>{pagination.begin + 1}</div>
      <div>to</div>
      <div>{pagination.end + 1}</div>
      <div>of</div>
      <div>{allEmployees.length}</div>
      {/* <div>Entries</div> */}
      <div>{allEmployees.length === 1 ? 'entry' : 'entries'}</div>
      {pagination.filter === '' ? (
        ''
      ) : (
        <div>' '(filtered from {allEmployees.length} total entries)</div>
      )}
    </div>
  );
};

export default TableInfo;
