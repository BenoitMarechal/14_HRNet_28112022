import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '../../Store/slices/dataBaseSlice';

const TableSearch = () => {
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);
  const dispatch = useDispatch();

  function search(e) {
    e.preventDefault();
    let filter = e.target.value.toLowerCase();
    let matches = [];
    let selection = allEmployees.map((employee) => {
      for (const [key, value] of Object.entries(employee)) {
        // if (value.search(filter) === 0) {
        if (
          value !== undefined &&
          value.toString().toLowerCase().includes(filter)
        ) {
          console.log('match');
          console.log(employee);
          console.log(matches.includes(employee));
          if (matches.includes(employee) === false) {
            matches.push(employee);
          }
        }
      }
    });
    // console.log('selection');
    // console.log(selection);
    console.log('matches');
    console.log(matches);
    dispatch(setSelected(matches));
  }

  return (
    <div className='table-search'>
      <label htmlFor='table-search'>Filter</label>
      <input type='search' id='table-search' onChange={search} />
    </div>
  );
};

export default TableSearch;
