// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const passLength = parseInt(prompt("Enter length of new password"));

  if (passLength < 7 || passLength > 129) {
    alert("Please confirm your length of a new password is between 8 and 128.");
    return;
  }

  const lowerChar = "abcdefghijklmnopqrstuvwxyz",
    upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberChar = "0123456789",
    specialChar = "!#$%&'()*+,-./:<=>?@[]^_`{|}~";

  const lowC = confirm("Do you want to include lowercase?"),
    upC = confirm("Do you want to include uppercase?"),
    numC = confirm("Do you want to include numbers?"),
    specC = confirm("Do you want to include spaicalcase?");

  if (!lowC && !upC && !numC && !specC) {
    alert("You need to select at least one type of character.");
    return;
  }

  let passHolder = "",
    newPass = "";

  if (lowC) {
    passHolder += lowerChar;
  }
  if (upC) {
    passHolder += upperChar;
  }
  if (numC) {
    passHolder += numberChar;
  }
  if (specC) {
    passHolder += specialChar;
  }
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length);
    newPass += passHolder[randomIndex];
  }
  return newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
