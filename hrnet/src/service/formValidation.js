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
function selectCheck(select) {
  if (select === 'Select...') {
    //input has at least three characters,

    return 'Input is empty!';
  } else {
    return '';
  }
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
      'Fields must contain at least two letters, start with a capital letter and have no special characters';
  }
  //birth date
  //World's oldest personn birthdate: 1903, Jan 2nd;
  const oldest = new Date('1903,01,02');
  let age = getAge(birthDateInputValue);
  console.log(age);
  // employee can't be older than oldest person on earth
  if (birthDateInputValue < oldest) {
    result.birthDateError =
      'Birth date seems pretty old... Please check birthdate';
  }
  //employee can't be younger than 18 years old
  if (age < 18) {
    result.birthDateError =
      'Employee must be at least 18 years old, please check birthdate';
  } else {
    result.birthDateError = '';
  }
  //startDate is only worth checking once birthdate is correct
  if (result.birthDateError === '') {
    let startAge = getAge(birthDateInputValue, startDateInputValue);
    //employee must have joined when at least 18 years old
    if (startAge < 18) {
      result.startDateError =
        'Employee must be have been at least 18 years old when joining the company, please check birthdate and/or start date';
    }
    //if birth isOK and start age is OK, error is removed
    else {
      result.birthDateError = '';
    }
  } else result.startDateError = 'Please check birthdate and/or start date';

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

  result.stateError = selectCheck(stateInputValue);
  //zip code
  if (zipCodeInputValue.length !== 5) {
    result.zipCodeError = 'Zip code must contain 5 digits';
  } else {
    result.zipCodeError = '';
  }

  result.departmentError = selectCheck(departmentInputValue);

  //console.log(result);
}
