import React from 'react';
import { setValue } from '../Store/slices/formSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const FormFiller = () => {
  const dispatch = useDispatch();
  function fillForm() {
    //Declare
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let birthDateInput = document.getElementById('birth-date');
    let streetInput = document.getElementById('street');
    let cityInput = document.getElementById('city');
    let stateInput = document.getElementById('state');
    let zipCodeInput = document.getElementById('zip-code');
    let departmentInput = document.getElementById('department');
    //filling page ////////////////////////////
    let test =
      '<input type="text" id="birth-date" class="" value="30/01/2007"></input>';

    ///////////////////
    firstNameInput.value = 'John';
    lastNameInput.value = 'Doe';
    streetInput.value = 'Street';
    cityInput.value = 'City';
    zipCodeInput.value = 12345;
    stateInput.lastChild.firstChild.firstChild.textContent = 'California';
    departmentInput.lastChild.firstChild.firstChild.textContent = 'Marketing';

    //////////////////////// filling from reducer /////////////////////////////////
    let today = new Date();
    let youngest = new Date(moment().subtract(18, 'years').calendar());
    let birthDateParent = birthDateInput.parentElement;
    console.log(birthDateParent);
    //birthDateInput.remove();
    function hackDatePicker(datePickerId, newValue) {
      let target = document.getElementById(datePickerId);
      let parent = target.parentElement;
      //target.remove();
      parent.innerHTML =
        '<input type="text" id="' +
        datePickerId +
        '" class="" value="' +
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

  return <button onClick={fillForm}>FILL FORM (dev only)</button>;
};

export default FormFiller;