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

function generatePassword () {
    
    // prompt for the length of the password
    // allows user to input how many character they want the password to be
    var passLength = prompt("Please enter how many characters you would like your password to be. \m You must enter between 8 - 128 characters.");
    
    var lengthConfirm = parseInt(passLength); //Parseint- converts its first argument to a string, parses that string, then returns an integer
    console.log(lengthConfirm);
 
// choose a length of at least 8 characters and no more than 128 characters
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Error. Choice is not valid. Please try again.");
        return;
    }
    //else if there is no input a message will come up
    if(!passLength) {
        alert("Required value");
}
}