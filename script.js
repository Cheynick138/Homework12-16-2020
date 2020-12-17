// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolCase = ["!", "@", "#", "$", "%", "^", "&", "*", "<", "~"];

var passLength = "";
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmSym;
var choices = [confirmUpper, confirmLower, confirmNum, confirmSym]

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? It Cannot be less than 8 and not more than 128 in length.");
  passLength = parseInt(passLength);


  while (passLength > 128 || passLength < 8) {
    passLength = prompt("Your password needs to be more than 8 and less than 128 characters long. Please try again.");
    passLength = parseInt(passLength);
  };

 
  var confirmUpper = confirm("Would you like Uppercase letters in your password? Recommended as a best practice.");
  var confirmLower = confirm("Would you like Lowercase letters in your password?");
  var confirmNum = confirm("Would you like numbers in your password? Recommended as best practice.");
  var confirmSym = confirm("Would you like symbols such as !,@,#,$,%,^,&, and ? Recommended as a best practice.");


  while (confirmUpper === false && confirmLower === false && confirmNum === false && confirmSym === false) {
    alert("You must choose a minimum of one attribute.");
    var confirmUpper = confirm("Would you like Uppercase letters in your password? Recommended as best practices");
    var confirmLower = confirm("Would you like Lowercase letters in your password?");
    var confirmNum = confirm("Would you like numbers in your password? Recommended as best practice");
    var confirmSym = confirm("Would you like symbols such as !,@,#,$,%,^,&, and ? Recommended a best practice");
  };
  return passwordGenerate(passLength, confirmUpper, confirmLower, confirmNum, confirmSym, passLength);
};

function passwordGenerate(passLength, confirmUpper, confirmLower, confirmNum, confirmSym, passLength) {
  var password = "";
  var choices = [confirmUpper, confirmLower, confirmNum, confirmSym];
  var passwordOptions = [];
  if (confirmUpper) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (confirmLower) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (confirmNum) {
    passwordOptions = passwordOptions.concat(numberChar);
  }
  if (confirmSym) {
    passwordOptions = passwordOptions.concat(symbolCase);
  };
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordOptions.length);
    console.log(passwordOptions[randomIndex]);
    
  };
return password
}