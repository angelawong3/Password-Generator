// Assignment Code
const generateBtn = document.querySelector("#generate");

// 26 characters of lowercase
const lowercaseArray = [
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
  "o",
  "p",
  "q",
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

// 26 characters of uppercase
const uppercaseArray = [
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

// 10 numbers
const numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 31 special characters
const specialCharactersArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  // password length prompt for users
  var passwordLength = 0;

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Please enter your password length. (between 8 and 128)"
    );

    // password length must be >8 and <128
    if (passwordLength < 8) {
      alert("The minimum password length should be 8");
    }

    if (passwordLength > 128) {
      alert("The maximum password length should be 128");
    }
  }

  // criteria prompt for users
  var lowercases = false;
  var uppercases = false;
  var numbers = false;
  var specialCharacters = false;

  while (
    lowercases === false &&
    uppercases === false &&
    numbers === false &&
    specialCharacters === false
  ) {
    lowercases = confirm("Do you want lowercases?");
    uppercases = confirm("Do you want uppercases?");
    numbers = confirm("Do you want numbers?");
    specialCharacters = confirm("Do you want special characters?");

    // user must select at least one criteria
    if (
      lowercases === false &&
      uppercases === false &&
      numbers === false &&
      specialCharacters === false
    ) {
      alert("Please select at least one criteria.");
    }

    var allowedCharacters = [];

    if (lowercases === true) {
      allowedCharacters = allowedCharacters.concat(lowercaseArray);
    }

    if (uppercases === true) {
      allowedCharacters = allowedCharacters.concat(uppercaseArray);
    }

    if (numbers === true) {
      allowedCharacters = allowedCharacters.concat(numericArray);
    }

    if (specialCharacters === true) {
      allowedCharacters = allowedCharacters.concat(specialCharactersArray);
    }

    var passwordChar = [];
    var i = 1;

    while (i <= passwordLength) {
      var char =
        allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
      passwordChar.push(char);
      i++;
    }

    var password = passwordChar.join("");
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
