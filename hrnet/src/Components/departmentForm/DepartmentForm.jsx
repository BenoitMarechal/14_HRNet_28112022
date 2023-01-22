import { React, useState } from 'react';
import { departments } from '../Assets/departments';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const DepartmentForm = () => {
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.departmentError);
  const dispatch = useDispatch();
  let form = {};
  const [visited, setVisited] = useState(false);
  function handleChange(e) {
    setVisited(true);
    form.department = e.target.value;
    dispatch(setValue(form));
  }
  return (
    <div className='form-control text-secondary w-full  container flex felx-col items-center'>
      <label className='label'>
        <span className='label-text text-neutral'>Department</span>
      </label>
      <select
        id='department'
        onChange={handleChange}
        defaultValue={'Department'}
        className={
          visited
            ? 'select select-bordered w-96  border border-secondary border-2'
            : 'select select-bordered  w-96 font-thin border border-secondary border-2 '
        }
      >
        <option value={'Department'} disabled>
          Department
        </option>

        {departments.map((department) => {
          return (
            <option
              key={departments.indexOf(department)}
              value={department.label}
            >
              {department.label}
            </option>
          );
        })}
      </select>
      <label className='label'>
        {firstTry === false && error !== '' ? (
          <span className='errorMessage label-text font-normal text-neutral'>
            {error}
          </span>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};

export default DepartmentForm;
