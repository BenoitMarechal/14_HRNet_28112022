import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { setSelected, resetSelected } from '../../Store/slices/dataBaseSlice';

const TableHeader = () => {
  const dispatch = useDispatch();
  ///all employees
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  // console.log('allEmployees');
  // console.log(allEmployees);
  //number of rows
  const [numberOfRows, setNumberOfRows] = useState(10);
  // console.log('numberOfRows');
  // console.log(numberOfRows);
  //make selection by slicing array
  const [selection, setSelection] = useState(
    allEmployees.slice(0, numberOfRows)
  );
  // console.log('selection');
  // console.log(selection);
  //apply result to selected state
  useEffect(() => {
    dispatch(setSelected(selection));
  }, []);

  const selected = useSelector((state) => state.dataBaseReducer.selected);
  // console.log('selected');
  // console.log(selected);

  return <div>View {numberOfRows} entries</div>;
};

export default TableHeader;
