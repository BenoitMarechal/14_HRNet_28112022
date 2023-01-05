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
    <div>
      <div className='form-control w-full max-w-xs'>
        <label className='label'>
          <span className='label-text'>Department</span>
        </label>
        <select
          id='department'
          onChange={handleChange}
          defaultValue={'Department'}
          className={
            visited
              ? 'select select-bordered'
              : 'select select-bordered font-thin '
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
            <span className='label-text-alt errorMessage'>{error}</span>
          ) : (
            ''
          )}
        </label>
      </div>
    </div>
  );
};

export default DepartmentForm;
