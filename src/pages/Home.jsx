import { React, useState, useEffect } from 'react';
import CreateEmployeeForm from '../layout/CreateEmployeeForm';
import { resetDataBase } from '../store/slices/dataBaseSlice';
import { resetError } from '../store/slices/errorSlice';
import { useDispatch } from 'react-redux';
import { resetForm } from '../store/slices/formSlice';
import FormFiller from '../components/FormFiller/FormFiller';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header.jsx';

const Home = () => {
  const [devMode, setDevMode] = useState(false);
  function toggleDevMode() {
    let next = !devMode;
    setDevMode(next);
  }
  useEffect(() => {
    dispatch(resetForm());
    dispatch(resetError());
  });

  const dispatch = useDispatch();
  function devReset() {
    dispatch(resetDataBase());
    dispatch(resetForm());
    dispatch(resetError());
  }

  let navBarProps = {
    function: toggleDevMode,
    onOffParam: devMode,
  };
  const headerProps = {
    title: 'HRnet',
    btnTo: './employee-list',
    btnText: 'See all employees',
  };

  return (
    <div>
      <NavBar {...navBarProps}></NavBar>
      <Header {...headerProps}></Header>
      <div className='flex pageContainer flex-col items-center bg-primary min-h-full w-full'>
        <div
          className='container shadow shadow-2xl   shadow-current border border-2  border-current border-neutral 
        bg-secondary rounded-3xl w-1/3 flex flex-col items-center  p-4 m-4'
        >
          <div className='container  flex flex-col items-center'>
            <h2
              className=' 
              border-4 border-b-0 border-neutral text-neutral font-bold

          mx-8  mb-0 w-full rounded-t-xl text-center  
         
          bg-primary'
            >
              Create Employee
            </h2>
            <CreateEmployeeForm></CreateEmployeeForm>
            {/* DEV FEATURES */}
            <div className='dev-features flex w-full mt-2 justify-around'>
              {devMode ? <FormFiller></FormFiller> : ''}
              {devMode ? (
                <button
                  className='btn btn-secondary border border-primary border-2 '
                  onClick={devReset}
                >
                  RESET DATA BASE (dev only)
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
