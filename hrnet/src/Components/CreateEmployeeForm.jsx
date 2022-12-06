import { React, useState } from 'react';
import SingleTextInput from './SingleTextInput';
import DatePicker from 'react-datepicker';
import { increment, setDataBase } from '../Store/counterSlice';
import { useDispatch } from 'react-redux';

//import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import FieldSet from '../Components/FieldSet';
import Modal from 'react-modal';
import Select from 'react-select';
//DEPT SELECT
import { departments } from './Assets/departments';

// MODAL
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  //BASIC DATA
  let basicData2 = ['First Name', 'Last Name'];
  //START DATEPICKER
  const [startDate, setStartDate] = useState(new Date());
  //BIRTH DATEPICKER
  const [birthDate, setBirthDate] = useState(new Date());
  //DEPT SELECT
  const [selectedOption, setSelectedOption] = useState(null);
  // MODAL

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(e) {
    e.preventDefault();
    //dispatch(increment());
    setIsOpen(true);
    let string = document.getElementById('first-name').value;
    console.log(string);
    let obj = { firstName: string };
    dispatch(setDataBase(obj));
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <form action='#' id='create-employee'>
      {/* first and last name */}
      {basicData2.map((...elt) => (
        <SingleTextInput
          {...elt}
          key={'basicData' + basicData2.indexOf(...elt)}
        ></SingleTextInput>
      ))}
      {/* Date pickers */}
      <div className='single-text-input'>
        <label htmlFor='birth-date'>Date of Birth</label>{' '}
        <DatePicker
          id='birth-date'
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
        />
      </div>

      <div className='single-text-input'>
        <label htmlFor='start-date'>Start Date</label>{' '}
        <DatePicker
          id='start-date'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      {/* FieldSet */}
      <FieldSet></FieldSet>
      {/* Department Selector */}
      <label htmlFor='department'>Department</label>
      <Select
        id='department'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={departments}
      />
      {/* submit button */}
      <button onClick={openModal}>Save</button>
      {/* MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Employee creation modal'
      >
        <div className='modal'>
          <button onClick={closeModal}>X</button>
          <div>Employee Created!</div>
        </div>
      </Modal>
    </form>
  );
};

export default CreateEmployeeForm;
