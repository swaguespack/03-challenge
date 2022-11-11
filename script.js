// Assignment Code
var generateBtn = document.querySelector("#generate");

//Criteria variables for user input
var userPasswordLength;
var userLowercase;
var userUppercase;
var userNumeric;
var userSpecialCharacter;

//Variables to place characters for user input
var userInput=[];
var includeChar=[];

//Object storing password character options
var passwordOptions ={
uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowercase: "abcdefghijklmnopqrstuvwxyz",
number: "0123456789",
specialCharacter: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~,"
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password function
function generatePassword(){

//Input password length
userPasswordLength = prompt("Please use a numeric value to choose a password length between 8 and 128 characters.");

//Alert if input is false, not numeric, or not between 8-128 and reopen prompt for user input
  if(!userPasswordLength || userPasswordLength <8 || userPasswordLength >128 || isNaN(userPasswordLength)){
    alert("Please input a numeric value between 8 and 128."); 
    generatePassword();
  }
 else {
  //Only log password length in console if value is true and numeric input between 8-128
  console.log(`Password Length: ${userPasswordLength}`);
 
  //Confirm and collect user input
  //Contains lowercase?
  userLowercase = confirm("Will the password contain a lowercase letter?");  
  if(userLowercase){
    console.log("Lowercase: ", userLowercase);
    userInput += passwordOptions.lowercase;
    includeChar.push(passwordOptions.lowercase[Math.floor(Math.random()*passwordOptions.lowercase.length)]);
  };
 //Contains uppercase?
 userUppercase = confirm("Will the password contain an uppercase letter?");
 if(userUppercase){
  console.log("Uppercase: ",userUppercase);
  userInput += passwordOptions.uppercase;
  includeChar.push(passwordOptions.uppercase[Math.floor(Math.random()*passwordOptions.uppercase.length)]);
 };
 //Contains number?
 userNumeric = confirm("Will the password contain a number?");
 if(userNumeric){
  console.log("Number: ",userNumeric);
  userInput += passwordOptions.number;
  includeChar.push(passwordOptions.number[Math.floor(Math.random()*passwordOptions.number.length)]);
 };
  //Contains special character?
  userSpecialCharacter = confirm("Will the password contain a special character?");
  if(userSpecialCharacter){
   console.log("Special Character: ",userSpecialCharacter);
   userInput += passwordOptions.specialCharacter;
   includeChar.push(passwordOptions.specialCharacter[Math.floor(Math.random()*passwordOptions.specialCharacter.length)]);
  };

  //Result if no character criteria selected: alert and return user to first prompt
  if (!userLowercase && !userUppercase && !userNumeric && !userSpecialCharacter){
  alert("Please choose a criteria.");
  generatePassword();
 };

 //Loop to ensure password contains correct amount of characters
 while(includeChar.length < userPasswordLength){
  includeChar.push(userInput[Math.floor(Math.random()*userPasswordLength)]);
 };

 //Join password and return
var password = includeChar.join("");
password = password.toString();
console.log("Your Password Is: " + password);
return password;

};
};






