import React from 'react';
import SingleTextInput from '../SingleTextInput';
import { useSelector } from 'react-redux';

const TableSearch = () => {
  const allEmployees = useSelector((state) => state.dataBaseReducer.dataBase);

  function search(e) {
    e.preventDefault();
    let filter = e.target.value;
    let selection = {};

    let matches = allEmployees.map((employee) => {
      console.log(employee);
      console.log(Object.entries(employee));
      for (const [key, value] of Object.entries(employee)) {
        // console.log('value');
        // console.log(value);
        // console.log('match');
        // console.log(value.search(filter));

        console.log(`${key}: ${value}`);
        console.log(value.search(filter));
        if (value.search(filter) === 0) {
          return employee;
        }
      }
    });
    console.log('selection');
    console.log(matches);
  }

  return (
    <div className='table-search'>
      <label htmlFor='table-search'>Filter</label>
      <input type='search' id='table-search' onChange={search} />
    </div>
  );
};

export default TableSearch;
