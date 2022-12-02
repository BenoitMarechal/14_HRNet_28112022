import { React, useState } from 'react';
import SingleTextInput from './SingleTextInput';
import DatePicker from 'react-datepicker';

//import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import FieldSet from '../Components/FieldSet';
import Modal from 'react-modal';
import Select from 'react-select';

//DEPT SELECT
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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
  //BASIC DATA
  let basicData2 = ['First Name', 'Last Name'];
  //START DATEPICKER
  const [startDate, setStartDate] = useState(new Date());
  //BIRTH DATEPICKER
  const [birthDate, setBirthDate] = useState(new Date());
  //DEPT SELECT
  const [selectedOption, setSelectedOption] = useState(null);
  // MODAL
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
      <label htmlFor='birth-date'>Date of Birth</label>{' '}
      <DatePicker
        id='birth-date'
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
      />
      <label htmlFor='start-date'>Start Date</label>
      <DatePicker
        id='start-date'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      {/* FieldSet */}
      <FieldSet></FieldSet>
      {/* Department Selector */}
      <label htmlFor='department'>Department</label>
      <Select
        id='department'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      {/* submit button */}
      <button onClick={openModal}>Open Modal</button>
      {/* MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </form>
  );
};

export default CreateEmployeeForm;
