// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

 
// Function to prompt user for password options
function getPasswordOptions() {
  // prompt user to enter the lenght of the password
  var passLenght = prompt("Choose password length between 8 and 128 characters");
  if (parseInt(passLenght) > 8 && parseInt(passLenght) < 129) {  //checking if user's input follows criteria and if yes, creating variables with user's choices
    var passLenght = parseInt(passLenght); //variable to conver user's input into int
    var userLower = confirm("Do you want your password to have lowercase letters?");  //user's choice about lowercase letters
    var userUpper = confirm("Do you want your password to have uppercase letters?"); //user's choice about uppercase letters
    var userNumber = confirm("Do you want your password to have numbers?"); //user's choice about numbers
    var userSpecial = confirm("Do you want your password to have special characters?");   ////user's choice about special characters
 
  } else { //if pasword doesn't fulfil the criteria, alerts user to try again
    alert("Try again!")
    return; //finishes the function at this point
  } 
 
  if (!userLower && !userUpper && !userNumber && !userSpecial) { // checks if user chose at least one type of characters
    alert("You must select at least one option. Please try again!");
    return;
  }

  // creating an object with user input
var userInput = {
  passwordLength: passLenght,
  lowercaseConfirm: userLower,
  uppercaseConfirm: userUpper,
  specialConfirm: userSpecial,
  numbersConfirm: userNumber
};

return userInput;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElem = Math.floor(Math.random() * arr.length);
  return arr[randomElem];
}

// Function to generate password with user input
function generatePassword() {
  var userInput = getPasswordOptions()    // creating a variable to call a function holding user input 
  var myPass = [];                        // empty array to hold possible characters to use in generating random password
  var passwordText = "";                  // empty string to hold created password
 
  if (userInput.lowercaseConfirm === true) {        //adding lowercase characters to array if user chose to use it to generate random password with
    myPass = myPass.concat(lowerCasedCharacters);
  }
  if (userInput.uppercaseConfirm) {
    myPass = myPass.concat(upperCasedCharacters);   //adding upercase characters to array if user chose to use it to generate random password with
  }
  if (userInput.numbersConfirm) {
    myPass = myPass.concat(numericCharacters);      //adding numbers to array if user chose to use it to generate random password with
  }
  if (userInput.specialConfirm) {
    myPass = myPass.concat(specialCharacters);      //adding special characters to array if user chose to use it to generate random password with
  }
  for (i = 0; i < userInput.passwordLength; i++) {  // generating password of the selected by user length
    passwordText += getRandom(myPass); 
  }
  return passwordText;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);