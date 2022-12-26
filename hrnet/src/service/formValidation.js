export function checkFormValidity() {
  let result = {};
  let firstNameInputValue = document.getElementById('first-name').value;
  let lastNameInputValue = document.getElementById('last-name').value;
  let birthDateInputValue = document.getElementById('birth-date').value;
  let startDateInputValue = document.getElementById('start-date').value;
  let streetInputValue = document.getElementById('street').value;
  let cityInputValue = document.getElementById('city').value;
  let stateInputValue =
    document.getElementById('state').lastChild.firstChild.firstChild
      .textContent;
  let zipCodeInputValue = document.getElementById('zip-code').value;
  let departmentInputValue =
    document.getElementById('department').lastChild.firstChild.firstChild
      .textContent;
  console.log(firstNameInputValue);
  console.log(lastNameInputValue);
  console.log(birthDateInputValue);
  console.log(startDateInputValue);
  console.log(streetInputValue);
  console.log(cityInputValue);
  console.log(stateInputValue);
  console.log(zipCodeInputValue);
  console.log(departmentInputValue);
}
