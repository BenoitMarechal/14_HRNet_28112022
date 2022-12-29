export function fillForm() {
  //Declare
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let birthDateInput = document.getElementById('birth-date');
  let startDateInput = new Date(document.getElementById('start-date'));
  let streetInput = document.getElementById('street');
  let cityInput = document.getElementById('city');
  let stateInput =
    document.getElementById('state').lastChild.firstChild.firstChild
      .textContent;
  let zipCodeInput = document.getElementById('zip-code');
  let departmentInput =
    document.getElementById('department').lastChild.firstChild.firstChild
      .textContent;
  //Re set
  firstNameInput.value = 'John';
  //console.log(firstNameInputValue);
  lastNameInput.value = 'Doe';
  //console.log(birthDateInputValue);
  //birthDateInput.selected = new Date('2000/01/01').toLocaleDateString();

  //startDateInputValue = new Date();
  streetInput.value = 'Street';
  cityInput.value = 'City';
  zipCodeInput.value = 12345;
  //stateInputValue.value = 'Arizona';
}
