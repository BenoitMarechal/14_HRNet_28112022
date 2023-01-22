import { React, useState } from 'react';
import { states } from '../Assets/states';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../Store/slices/formSlice';

const StateForm = () => {
  let firstTry = useSelector((state) => state.formReducer.firstTry);
  let error = useSelector((state) => state.errorReducer.stateError);
  const dispatch = useDispatch();
  let form = {};
  const [visited, setVisited] = useState(false);
  function handleChange(e) {
    setVisited(true);
    form.state = e.target.value;
    dispatch(setValue(form));
  }
  return (
    <div className='form-control text-secondary w-full max-w-xs'>
      <label className='label'>
        <span className='label-text text-neutral'>State</span>
      </label>
      <select
        id='state'
        onChange={handleChange}
        defaultValue={'State'}
        className={
          visited
            ? 'select select-bordered border border-secondary border-2'
            : 'select select-bordered font-thin border border-secondary border-2 '
        }
      >
        <option value={'State'} disabled>
          State
        </option>

        {states.map((state) => {
          return (
            <option key={states.indexOf(state)} value={state.label}>
              {state.label}
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

export default StateForm;
