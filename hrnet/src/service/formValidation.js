//--------REGEXP
//Regexp for letter validation (first and last names)
let letter = new RegExp(
  /^[A-ZÀ-ÖØ]+(([',. -][a-zA-ZÀ-ÖØ-öø-ÿ])?[a-zA-ZÀ-ÖØ-öø-ÿ]*)*$/
);
//-------------VERIFICATION FUNCTIONS
//Function that runs the letter Regexp:
function stringCheck(stringToCheck) {
  if (
    stringToCheck.match(letter) !== null && //checks if the amount of characters matching the regexp is not null //AND
    stringToCheck.length > 1
  ) {
    //input has at least three characters,

    return true;
  } else {
    return false;
  }
}

export function checkFormValidity() {
  //---------limit dates
  //World's oldest personn birthdate: 1903, Jan 2nd;

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

  //first name
  if (stringCheck(firstNameInputValue) === true) {
    result.firstNameError = '';
  } else {
    result.firstNameError =
      'Field must contain at least two letter, start with a capital letter and have no special characters';
  }
  //last name
  if (stringCheck(lastNameInputValue) === true) {
    result.lastNameError = '';
  } else {
    result.lastNameError =
      'Fields must contain at least two letter, start with a capital letter and have no special characters';
  }

  //city
  if (stringCheck(cityInputValue) === true) {
    result.cityError = '';
  } else {
    result.cityError =
      'Field must contain at least two letter, start with a capital letter and have no special characters';
  }

  console.log(result);
}
