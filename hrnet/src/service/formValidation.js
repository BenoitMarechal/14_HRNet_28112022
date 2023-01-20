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

function localeToDate(localeDateString) {
  let day = localeDateString.slice(0, 2);
  let month = localeDateString.slice(3, 5);
  let year = localeDateString.slice(6, 10);
  let date = new Date(year, month - 1, day);
  return date;
}

function getAge(dateString, refDate) {
  if (refDate === undefined) {
    refDate = new Date();
  }
  var birthDate = new Date(dateString);
  var age = refDate.getFullYear() - birthDate.getFullYear();
  var m = refDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && refDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function checkFormValidity() {
  //---------limit dates
  //World's oldest personn birthdate: 1903, Jan 2nd;

  let result = {};
  let firstNameInputValue = document.getElementById('first-name').value;
  let lastNameInputValue = document.getElementById('last-name').value;
  let birthDateInputValue = localeToDate(
    document.getElementById('birth-date').value
  );

  let startDateInputValue = localeToDate(
    document.getElementById('start-date').value
  );
  let streetInputValue = document.getElementById('street').value;
  let cityInputValue = document.getElementById('city').value;
  let stateInputValue = document.getElementById('state').value;
  let zipCodeInputValue = document.getElementById('zip-code').value;
  let departmentInputValue = document.getElementById('department').value;

  //first name
  if (stringCheck(firstNameInputValue) === true) {
    result.firstNameError = '';
  } else {
    result.firstNameError =
      'Field must contain at least two letters, start with a capital letter and have no special characters';
  }
  //last name
  if (stringCheck(lastNameInputValue) === true) {
    result.lastNameError = '';
  } else {
    result.lastNameError =
      'Field must contain at least two letters, start with a capital letter and have no special characters';
  }
  //birth date
  //World's oldest personn birthdate: 1903, Jan 2nd;
  const oldest = new Date('1903,01,02');
  //console.log(oldest);
  let age = getAge(birthDateInputValue);
  // employee can't be older than oldest person on earth
  // console.log(birthDateInputValue);
  // console.log(oldest);
  // console.log(birthDateInputValue < oldest);
  if (birthDateInputValue < oldest) {
    //console.log('hhh');
    result.birthDateError =
      'Birth date seems pretty old... Please check birthdate';
  }
  //employee can't be younger than 18 years old
  else if (age < 18) {
    result.birthDateError =
      'Employee must be at least 18 years old, please check birthdate';
  } else {
    result.birthDateError = '';
  }
  //startDate is only worth checking once birthdate is correct
  result.startDateError = '';
  if (result.birthDateError === '') {
    let startAge = getAge(birthDateInputValue, startDateInputValue);
    if (startAge < 18) {
      result.startDateError =
        'Employee must be have been at least 18 years old when joining the company, please check birthdate and/or start date';
    }
    //if birth isOK and start age is OK, error is removed
    else {
      result.birthDateError = '';
    }
  } else result.startDateError = 'Please check start date and/or birthDate';

  //street
  if (stringCheck(streetInputValue) === true) {
    result.streetError = '';
  } else {
    result.streetError =
      'Field must contain at least two letters, start with a capital letter and have no special characters';
  }

  //city
  if (stringCheck(cityInputValue) === true) {
    result.cityError = '';
  } else {
    result.cityError =
      'Field must contain at least two letters, start with a capital letter and have no special characters';
  }

  //state
  if (stateInputValue === 'State') {
    result.stateError = 'Input is empty!';
  } else {
    result.stateError = '';
  }

  //zip code
  if (zipCodeInputValue.length === 5 && zipCodeInputValue > 0) {
    result.zipCodeError = '';
  } else {
    result.zipCodeError = 'Zip code must contain 5 digits';
  }

  //Department
  if (departmentInputValue === 'Department') {
    result.departmentError = 'Input is empty!';
  } else {
    result.departmentError = '';
  }

  // result.departmentError = selectCheck(departmentInputValue);

  // console.log(result);
  return result;
}
