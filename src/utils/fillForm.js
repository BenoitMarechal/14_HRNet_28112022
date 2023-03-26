export function fillForm() {
  //Declare
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let streetInput = document.getElementById('street');
  let cityInput = document.getElementById('city');
  let zipCodeInput = document.getElementById('zip-code');

  firstNameInput.value = 'John';
  lastNameInput.value = 'Doe';
  streetInput.value = 'Street';
  cityInput.value = 'City';
  zipCodeInput.value = 12345;
}
