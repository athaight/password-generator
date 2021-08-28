// debugger; // <-used this a lot
// These are the string variables to be used by the math function for random character selection
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVOWXYZ";
var numberChoice = "1234567890";
var specialOptions = "!@#$%^&*()_+=";

// This finds the generate id in the HTML for the button
var generateBtn = document.getElementById("generate");

// This is the main function for generation
function generatePassword() {
  // Once initated the user is prompted to enter their desired password length
  var length = prompt("How long should your password be?");
  // Alert for user if password doesn't meet the required length
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128 characters");
    // Return to code if no alert
    return "";
  }
  
  
// Section I was working on trying to figure out a prompt if the text entered
// for password length was not a numeric value
  // var numbersOnly = /^[0-9]+$/; 
  //   if (prompt.value.match(numbersOnly)){
  //   return;
  //   } else {
     
  //     alert("Please enter a number");
  //     return"";
  //  }

  // if (length.value.match(numbersOnly)){
  //   alert("Please enter a number");
  // } else {
  // return"";
  // }

  // Confirmation pop-ups for password parameters
  var useLowercase = confirm("Should there be lowercase letters?");
  var useUppercase = confirm("Should there be uppercase letters?");
  var useNumeric = confirm("Should there be numbers?");
  var useSpecial = confirm("Should there be special characters?");
  // Compairison of confirm choices with alert if no choice was made
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial && !numbersOnly) {
    alert("You must choose one option");
    return "";
  } else if (!useSpecial || !useNumeric) {
    alert(
      "Are you sure? Passwords without numbers or special characters are easy to hack!"
    );
  }
  
// empty variables store the random choices made by the if statements 
  let finalPassword = "";
  let str = "";

  if (useUppercase == true) {
    str = upperCase + str;
  }
  if (useLowercase == true) {
    str = lowerCase + str;
  }
  if (useNumeric == true) {
    str = numberChoice + str;
  }
  if (useSpecial == true) {
    str = specialOptions + str;
  }
// for loop with math floor to make integer, randomly choose a character
// and store it in the final password variable
  for (let i = 0; i < length; i++) {
    let randomChoice = Math.floor(Math.random() * str.length);
    finalPassword += str.charAt(randomChoice);
  }
  return finalPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
