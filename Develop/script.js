// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria variables
var passwordLength;
var lowercase;
var uppercase;
var numeric;
var specialCharacter;


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
passwordLength = prompt("Please use a numeric value to choose a password length between 8 and 128 characters.");

//Alert if input is false, not numeric, or not between 8-128 and reopen prompt for user input
  if(!passwordLength || passwordLength <8 || passwordLength >128 || isNaN(passwordLength)){
    alert("Please input a numeric value between 8 and 128."); 
    generatePassword();

  } 

else { 

  //Only log password length in console if value is true and numeric input between 8-128
  console.log(`Password Length: ${passwordLength}`);

  //Confirm lowercase
  lowercase = confirm("Will the password contain a lowercase letter?");
  console.log(`Contains Lowercase:${lowercase}`);

  //Confirm uppercase
  uppercase = confirm("Will the password contain an uppercase letter?");
  console.log(`Contains Uppercase:${uppercase}`);

  //Confirm numeric
  numeric = confirm("Will the password contain a number?");
  console.log(`Contains Number:${numeric}`);
  
  //Confirm special character
  specialCharacter = confirm("Will the password contain a special character?");
  console.log(`Contains Special Character:${specialCharacter}`);

  }

};


