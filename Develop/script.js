// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria variables
//var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password function
function generatePassword(){

//Input password length
  let passwordLength = prompt("Please use a numeric value to choose a password length between 8 and 128 characters.");
  console.log(passwordLength);

  if(!passwordLength || passwordLength <8 || passwordLength >128 || isNaN(passwordLength)){
    alert("Please input a numeric value between 8 and 128.");

  }
  }
