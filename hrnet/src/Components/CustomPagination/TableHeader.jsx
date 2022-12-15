import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { setSelected, resetSelected } from '../../Store/slices/dataBaseSlice';
import PaginationSelect from './PaginationSelect';

const TableHeader = () => {
  const dispatch = useDispatch();
  ///all employees
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  //number of rows
  const [numberOfRows, setNumberOfRows] = useState(10);
  //make selection by slicing array
  const [selection, setSelection] = useState({});
  function change(e) {
    e.preventDefault();
    let target = parseInt(e.target.value);
    console.log(target);
    setNumberOfRows(target);
  }

  useEffect(() => {
    console.log(numberOfRows);
    setSelection(allEmployees.slice(0, numberOfRows));
  }, [numberOfRows]);

  useEffect(() => {
    console.log(selection);
    dispatch(setSelected(selection));
    //setSelection(allEmployees.slice(0, numberOfRows));
  }, [selection]);

  return (
    <div>
      <div>View</div>
      {/* <PaginationSelect></PaginationSelect> */}
      <select name='rows-select' id='rows-select' onChange={change}>
        <option value='1'>1</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
      </select>
      <div>{numberOfRows === 1 ? 'entry' : 'entries'}</div>
    </div>
  );
};

export default TableHeader;
