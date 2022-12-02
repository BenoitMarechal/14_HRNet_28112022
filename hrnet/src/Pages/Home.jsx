import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import CreateEmployeeForm from '../Components/CreateEmployeeForm';
import FieldSet from '../Components/FieldSet';
import Modal from 'react-modal';
import Select from 'react-select';

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
//SELECT
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Home = () => {
  // MODAL
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }

  //SELECT
  const [selectedOption, setSelectedOption] = useState(null);

  //START DATEPICKER
  const [startDate, setStartDate] = useState(new Date());
  //BIRTH DATEPICKER
  const [birthDate, setBirthDate] = useState(new Date());

  return (
    <div className='pageWrapper' id='home-page'>
      <h1>HRnet</h1>
      <NavLink to='/employee-list'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <CreateEmployeeForm></CreateEmployeeForm>
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
      <FieldSet></FieldSet>
      <div className='select-container' id='department'>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
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
      </div>
    </div>
  );
};

export default Home;
