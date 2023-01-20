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
    console.log(filter.length);
    if (filter.length > 1) {
      allEmployees.map((employee) => {
        // eslint-disable-next-line
        for (const [key, value] of Object.entries(employee)) {
          if (
            value !== undefined &&
            value.toString().toLowerCase().includes(filter)
          ) {
            // console.log('match');
            // console.log(employee);
            // console.log(matches.includes(employee));
            if (matches.includes(employee) === false) {
              matches.push(employee);
            }
          }
        }
        return undefined;
      });
      // console.log('matches');
      // console.log(matches);
      dispatch(setSelected(matches));
    } else {
      dispatch(setSelected(allEmployees));
    }
  }

  return (
    <div className='table-search flex items-center'>
      <label htmlFor='table-search ' className='mr-2'>
        Search:
      </label>
      <input
        type='search'
        id='table-search'
        className='input input-bordered  border border-secondary border-2'
        onChange={search}
      />
    </div>
  );
};

export default TableSearch;
