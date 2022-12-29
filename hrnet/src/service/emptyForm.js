export function emptyForm() {
  //Declare
  let firstNameInputValue = document.getElementById('first-name').value;
  let lastNameInputValue = document.getElementById('last-name').value;
  let birthDateInputValue = new Date(
    document.getElementById('birth-date').value
  );
  let startDateInputValue = new Date(
    document.getElementById('start-date').value
  );
  let streetInputValue = document.getElementById('street').value;
  let cityInputValue = document.getElementById('city').value;
  let stateInputValue =
    document.getElementById('state').lastChild.firstChild.firstChild
      .textContent;
  let zipCodeInputValue = document.getElementById('zip-code').value;
  let departmentInputValue =
    document.getElementById('department').lastChild.firstChild.firstChild
      .textContent;
  //Re set
  firstNameInputValue = '';
  console.log(firstNameInputValue);
  lastNameInputValue = 'Bob';
  birthDateInputValue.value = startDateInputValue = new Date();
  streetInputValue = '';
}
