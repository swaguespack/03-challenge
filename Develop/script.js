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

//Function
function generatePassword(){

//Input password length
  let passwordLength = prompt("Please choose a password length between 8 and 128 characters.");
  console.log(passwordLength);

  if(passwordLength = "false"){
    alert("Input required.");

  } else if (passwordLength <8 || passwordLength >128){
    passwordLength = prompt("Value must be between 8-128 characters.");
    console.log(passwordLength);
  } 
  }
