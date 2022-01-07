// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // prompt for the length of the password
  // allows users to input a number
  var passLength = prompt(
    "Please enter how many characters you would like your password to be. \nMust be between 8 - 128 characters."
  );

  var confirmedLength = parseInt(passLength);
  //The parseInt function converts its first argument to a string, parses that string, then returns an integer
  console.log(confirmedLength);

  // choose a length of at least 8 characters and no more than 128 characters
 
   if (passLength < 8 || passLength > 128) {
    passLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passLength);}
  //if nothing is inputted then this message will appear
  
  if (!passLength) {
    alert("Required value");
  }

  //Declaring Variables
  var collectionOfValids = [];

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghiklmnopqrsttuvwxtz".split("");
  var numberC = "0123456789".split("");
  var specialChar = "*&^%$#@!?><{}".split("");
  // The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

  //Prompt boxes allowing users to select if they want upper case, numbers, special and lower case in the password
  // we need a confirm to ask the user if they want to use lowercase
  var confirmLower = confirm(
    "Do you want your password to include lowercase letters?"
  );
  if (confirmLower === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      collectionOfValids.push(lowerCase[i]);
    }
  }
  // we need a confirm to ask the user if they want to use uppercase
  var confirmUpper = confirm(
    "Do you want your password to include uppercase letters?"
  );
  if (confirmUpper === true) {
    for (var i = 0; i < upperCase.length; i++) {
      collectionOfValids.push(upperCase[i]);
    }
  }
  // we need a confirm to ask the user if they want to use numeric
  var confirmNumber = confirm("Do you want your password to include numbers");
  if (confirmNumber === true) {
    for (var i = 0; i < numberC.length; i++) {
      collectionOfValids.push(numberC[i]);
    }
  }
  // we need a confirm to ask the user if they want to use special characters
  var confirmSpecialChar = confirm(
    "Do you want your password to include special characters?"
  );
  if (confirmSpecialChar === true) {
    for (var i = 0; i < specialChar.length; i++) {
      collectionOfValids.push(specialChar[i]);
    }
  }
  if (
    confirmLower == false &&
    confirmNumber == false &&
    confirmSpecialChar == false &&
    confirmUpper == false
  ) {
    alert("Required value");
  }

  //Creating a random password using what the user selected and inputted
  var randomPassword = "";
  for (var i = 0; i < confirmedLength; i++) {
    collectionOfValids[Math.floor(Math.random() * collectionOfValids.length)];
    randomPassword +=
      collectionOfValids[Math.floor(Math.random() * collectionOfValids.length)];
  }
  return randomPassword;
}

generateBtn.addEventListener("click", writePassword);
