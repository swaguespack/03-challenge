// Assignment Code
var generateBtn = document.querySelector("#generate");

//Criteria variables for user input
var userPasswordLength;
var userLowercase;
var userUppercase;
var userNumeric;
var userSpecialCharacter;

//Array variables to place user input
var userInput;
var trueInput;

//Array variables to test generator output
var containsLower;
var containsUpper;
var containsNum;
var containsSpecial;

//Define possible input for password criteria
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = uppercase.map(element => {
  return element.toLowerCase();
});
var number = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "\\" ,"]","^","_","`","{","|","}","~"];

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
userPasswordLength = prompt("Please use a numeric value to choose a password length between 8 and 128 characters.");

//Alert if input is false, not numeric, or not between 8-128 and reopen prompt for user input
  if(!userPasswordLength || userPasswordLength <8 || userPasswordLength >128 || isNaN(userPasswordLength)){
    alert("Please input a numeric value between 8 and 128."); 
    generatePassword();
  } 
else { 
  //Only log password length in console if value is true and numeric input between 8-128
  console.log(`Password Length: ${userPasswordLength}`);

  //Confirm desired criteria
  if (confirm("Will the password contain a lowercase letter?") == true) {
    userLowercase = lowercase;
    console.log(`Contains lowercase: ${userLowercase}`);
  }  if (confirm("Will the password contain an uppercase letter?") == true) {
    userUppercase = uppercase;
    console.log(`Contains Uppercase: ${userUppercase}`);
  } if (confirm("Will the password contain a number?") == true) {
    userNumeric = number;
    console.log(`Contains Number: ${userNumeric}`);
  } if (confirm("Will the password contain a special character?") == true) {
    userSpecialCharacter = specialCharacter;
    console.log(`Contains Special Character: ${userSpecialCharacter}`);
  }
};

//Result if no character criteria selected: alert and return user to first prompt
if (!userLowercase && !userUppercase && !userNumeric && !userSpecialCharacter){
  alert("Please choose a criteria.");
  generatePassword();
 };

//Result if one or more character criteria selected: concat input to array and remove undefined
userInput = userLowercase.concat(userUppercase,userNumeric,userSpecialCharacter);
trueInput = userInput.filter(function(element){
  return element !== undefined;
});
console.log(trueInput);

//Empty variable for password
 var passwordEmpty = [];

 //For loop for random selection
 for (var i=0; i<userPasswordLength;i++){
  var result = trueInput[Math.floor(Math.random() * trueInput.length)];
  passwordEmpty.push(result); 
  console.log(result);
 };

 //Check if generated password contains at least one character from each of the selected criteria
 //Contains lowercase?
 containsLower = passwordEmpty.some(element =>{
  return userLowercase.includes(element);
});
console.log(containsLower);
//Contains uppercase?
containsUpper = passwordEmpty.some(element =>{
  return userUppercase.includes(element);
});
console.log(containsUpper);
//Contains numeric?
containsNum = passwordEmpty.some(element =>{
  return userNumeric.includes(element);
});
console.log(containsNum);
//Contains special character?
containsSpecial = passwordEmpty.some(element =>{
  return userSpecialCharacter.includes(element);
});
console.log(containsSpecial);

//If the password is missing a selection, alert and try again
if (!containsLower || !containsUpper || !containsNum || !containsSpecial) {
  alert("Generator failed. Please try again.");
  generatePassword();
};

 //Join password and return
var password = passwordEmpty.join("");
console.log("Your Password Is: " + password);
return password;
  
};









