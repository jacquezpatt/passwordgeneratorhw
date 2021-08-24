var generateBtn = document.querySelector("#generate");
var Lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var Uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "0123456789";
var SpecialChar = "~`!@#$%^&*()_-=+[];:'><?/.,|";
var stored = [];
var hasLowerCase = confirm('Would you like some lowercase letters?');
var hasUpperCase = confirm('Some uppercase letters?');
var hasNumber = confirm('Some numbers maybe?');
var hasSpecial = confirm('How bout some special characters?');


function generatePassword() {
  var length = 8;
  var password = "";
  var include = "";
  
  if (hasLowerCase) {
    var random = Math.floor(Math.random() * Lowercaseletters.length);
    var selectedLetter = Lowercaseletters[random];
    include = include.concat(Lowercaseletters);
    stored.push(selectedLetter);
    }

    if (hasUpperCase) {
      var random = Math.floor(Math.random() * Uppercaseletters.length);
      var selectedUppercaseletter = Uppercaseletters[random];
      include = include.concat(Uppercaseletters);
      stored.push(selectedUppercaseletter);
      }

      if (hasNumber) {
        var random = Math.floor(Math.random() * Numbers.length);
        var selectedNumber = Numbers[random];
        include = include.concat(Numbers);
        stored.push(selectedNumber);
        }

        if (hasSpecial) {
          var random = Math.floor(Math.random() * SpecialChar.length);
          var selectedLetter = SpecialChar[random];
          include = include.concat(SpecialChar);
          stored.push(selectedLetter);
          }
          

    for (var i = 0; i < length - stored.length; i++) {
      var random = Math.floor(Math.random() * Lowercaseletters.length);
      password += Lowercaseletters[random];

      var random = Math.floor(Math.random() * Uppercaseletters.length);
      password += Uppercaseletters[random];

      var random = Math.floor(Math.random() * Numbers.length);
      password += Numbers[random];

      var random = Math.floor(Math.random() * SpecialChar.length);
      password += SpecialChar[random];


      password += stored.join('');


      console.log('Stored', stored);
      console.log('Include', include);
      console.log('Password', password)
      stored = [];


}

    console.log(password);

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