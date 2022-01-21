// length of the pasword
var characterAmount = 0;
// prompt to pick a number between 8 and 128
var charFunc = function () {
  var charLength = window.prompt(
    "Choose a length of at least 8 characters and no more than 128 characters"
  );
  // change string to intergers
  charLength = parseInt(charLength);
  // if chosen numbers doesn't fall between 8 and 128 call prompt again
  if (charLength < 8 || charLength > 128) {
    charFunc();
  }
  // if number is between 8 and 128 return
  else if (charLength <= 128 || charLength >= 8) {
    // console.log("the number is between 8 and 128");
    characterAmount = charLength;
  }
};

var upperKey = [];
var upperCaseLettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// prompt for uppercase letters
var upFunc = function () {
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  if (upperCase) console.log("using uppercase letters");
  if (upperCase) upperKey = upperCaseLettersArray;
  if (!upperCase) upperKey = "";
};

var lowerKey = [];
var lowerCaseLettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "a",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// prompt for lowercase letters
var lowFunc = function () {
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  if (lowerCase) console.log("using lowercase letters");
  if (lowerCase) lowerKey = lowerCaseLettersArray;
  if (!lowerCase) lowerKey = "";
};

var numbersKey = [];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// prompt for numbers
var numFunc = function () {
  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) console.log("using numbers");
  if (numbers) numbersKey = numbersArray;
  if (!numbers) numbersKey = "";
};

var specialKey = [];
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
// prompt for special characters
var specFunc = function () {
  var specialCharacters = window.confirm(
    "Would you like to use special characters?"
  );
  if (specialCharacters) console.log("using special characters");
  if (specialCharacters) specialKey = specialCharactersArray;
  if (!specialCharacters) specialKey = "";
};

var key = [];
var finalKey = [];
//  concatination of Keys
var generateKey = function () {
  var newKey = key.concat(upperKey, lowerKey, numbersKey, specialKey);
  finalKey = newKey;
};

var password = "";

// Main Function
document.getElementById("generate").addEventListener("click", function (start) {
  charFunc();
  console.log("The password length is ", characterAmount);
  upFunc();
  lowFunc();
  numFunc();
  specFunc();
  generateKey();
  for (let index = 0; index < characterAmount; index++) {
    var rand = Math.floor(Math.random() * finalKey.length);
    password += finalKey[rand];
    if (index == characterAmount) {
      break;
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    if (password === "") {
      alert("you bafoon pick at least one password criteria!");
      start();
    }
  }
});
