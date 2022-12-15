import React from 'react';

const PaginationSelect = () => {
  function change(e) {
    //e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <select name='rows-select' id='rows-select' onChange={change}>
      <option value='1'>1</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='25'>25</option>
      <option value='50'>50</option>
    </select>
  );
};

export default PaginationSelect;
