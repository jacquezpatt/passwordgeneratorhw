var generateBtn = document.querySelector("#generate");
var Lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var Uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "0123456789";
var SpecialChar = "~`!@#$%^&*()_-=+[];:'><?/.,|";

//Worked with instructor Anthony Cooper to fix.
function generatePassword() {
  var data = prompt("Enter a password length between 8 & 128 characters.");
  var length = Number(data);
  var password = "";
  var include = "";
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Please enter a value between 8 & 128");
    return;
  }
  var hasLowerCase = confirm('Would you like some lowercase letters?');
  var hasUpperCase = confirm('Some uppercase letters?');
  var hasNumber = confirm('Some numbers maybe?');
  var hasSpecial = confirm('How bout some special characters?');
  if (hasLowerCase) {
    var random = Math.floor(Math.random() * Lowercaseletters.length);
    include = include.concat(Lowercaseletters);
  }

  if (hasUpperCase) {
    var random = Math.floor(Math.random() * Uppercaseletters.length);
    include = include.concat(Uppercaseletters);
  }

  if (hasNumber) {
    var random = Math.floor(Math.random() * Numbers.length);
    include = include.concat(Numbers);
  }

  if (hasSpecial) {
    var random = Math.floor(Math.random() * SpecialChar.length);
    include = include.concat(SpecialChar);
  }


  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * include.length);
    password += include[random];
  }

  return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;


  }
}

generateBtn.addEventListener("click", writePassword);