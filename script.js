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

function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."
  );

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var symbols = confirm("Do you want special characters in your password?");
  // console.log(passwordLength, numbers, lowerCases, upperCases, symbols);

  var typesCount = 0;
  // var randomNumbers = functionList.getNumbers();
  // var randomLowerCases = functionList.getLowerCases();
  // var randomUpperCases = functionList.getUpperCases();
  // var randomSymbols = functionList.getSymbols();

  // Generator functions
  var functionList = {
    getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
    getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },

    getUpperCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },

    getSymbols() {
      const symbols = `!@#$%^&*()_+`;
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
  };
  var generatedPassword = "";

  // loop getting random characters
  for (let i = 0; i < parseInt(passwordLength); i++) {
    if(passwordLength >7 && passwordLength < 128 ){
    if (numbers === true && generatedPassword.length < +passwordLength) {
      randomNumbers = functionList.getNumbers();
      generatedPassword += randomNumbers
      typesCount++;   
    }
  
    if (lowerCases === true && generatedPassword.length < +passwordLength) {
      randomLowerCases = functionList.getLowerCases();
      generatedPassword += randomLowerCases
      typesCount++;
    }
  
    if (upperCases === true && generatedPassword.length < +passwordLength) {
      randomUpperCases = functionList.getUpperCases();
      generatedPassword += randomUpperCases
      typesCount++;
    }
  
    if (symbols === true && generatedPassword.length < +passwordLength) {
      RandomSymbols = functionList.getSymbols();
      generatedPassword += RandomSymbols
      typesCount++;
    }
  }else{
    // if number is not between 8 to 128 we alert this 
    alert("plese type between 8 to 128!")
    // and reset the game
    reset()
  }
  }
  return generatedPassword; 
}


