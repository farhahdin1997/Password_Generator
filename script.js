// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Delcaring Variables
var collectionOfValids = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");
