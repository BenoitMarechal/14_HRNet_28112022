import React from 'react';
import { setValue } from '../../store/slices/formSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const FormFiller = () => {
  const dispatch = useDispatch();
  function fillForm() {
    //Declare
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let streetInput = document.getElementById('street');
    let cityInput = document.getElementById('city');
    let stateInput = document.getElementById('state');
    let zipCodeInput = document.getElementById('zip-code');
    let departmentInput = document.getElementById('department');
    ////////////////////////// filling page ////////////////////////////
    firstNameInput.value = 'John';
    lastNameInput.value = 'Doe';
    streetInput.value = 'Street';
    cityInput.value = 'City';
    zipCodeInput.value = 12345;
    stateInput.value = 'California';
    departmentInput.value = 'Marketing';
    //////////////////////// filling form reducer /////////////////////////////////
    let today = new Date();
    let youngest = new Date(moment().subtract(18, 'years').calendar());
    function hackDatePicker(datePickerId, newValue) {
      let target = document.getElementById(datePickerId);
      let parent = target.parentElement;
      parent.innerHTML =
        '<input type="text" id="' +
        datePickerId +
        '" class="input input-bordered w-full max-w-xs" value="' +
        newValue +
        '"></input>';
    }
    hackDatePicker('birth-date', youngest.toLocaleDateString());
    hackDatePicker('start-date', today.toLocaleDateString());

    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: youngest.toLocaleDateString(),
      startDate: today.toLocaleDateString(),
      street: 'Street',
      city: 'City',
      state: 'California',
      zipCode: '12345',
      department: 'Marketing',
    };
    dispatch(setValue(obj));
  }

  return (
    <button
      className='btn btn-secondary border-primary border-2'
      onClick={fillForm}
    >
      FILL FORM (dev only)
    </button>
  );
};

export default FormFiller;
