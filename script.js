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


// make this last to generate password using letter, number,character chooser
//create function that runs letter 3* number 3* character 2* when button is pushed

function generatePassword() {
  var length = prompt('How long do you want your password to be?', '8', '128');
  var lengthInt = parseInt(length);
  if(lengthInt < 8 || lengthInt > 128) {
    alert('password has to be between 8 and 128 characters');
    return null;
  }
  var wantsLetters = prompt('Do you want letters included in password?', 'yes');
  var wantsNumbers = prompt('Do you want numbers included in password?', 'yes');
  var wantsCharacters = prompt('Do you want characters included in password?', 'yes');

  var password = generatePasswordWithLength(lengthInt, wantsLetters, wantsNumbers, wantsCharacters);
  return password;
}

function generatePasswordWithLength(length, wantsLetters, wantsNumbers, wantsCharacters) {
  var password = '';
  i = length;
  while (i > 0) {
    if (wantsLetters == 'yes') {
      if (i !== 0) {
        password = password + randLetter();
        i--;
      }
      if (i !== 0) {
        password = password + randLetter();
        i--;
      }
      if (i !== 0) {
        password = password + randLetter();
        i--;
      }
    }

    if (wantsNumbers == 'yes') {
      if (i !== 0) {
        password = password + randNumber();
        i--;
      }
      if (i !== 0) {
        password = password + randNumber();
        i--;
      }
      if (i !== 0) {
        password = password + randNumber();
        i--;
      }




    }
 if(wantsCharacters == 'yes') {
  if (i !== 0) {
    password = password + randCharacter();
    i--;
  }
  if (i !== 0) {
    password = password + randCharacter();
    i--;
  }

 }
  }    


  return password;
}

// taking code out 
function randLetter() {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return letters[Math.floor(Math.random() * letters.length)];
}

function randNumber() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randCharacter() {
  var characters = ['!', '$', '&', '?', '<', '>'];
  return characters[Math.floor(Math.random() * characters.length)];
}






 //  //I want a random letter to appear
// console.log(letterChooser('   '))




// function numberChooser(number){
//   return  [1, 2, 3, 4, 5, 6, 7, 8, 9]
// }

// function characterChooser(character) {
//   return  [!  #  %  &]


// }


// function vowelChecker(letter) {
//   return ['a', 'e', 'i', 'o', 'u']. includes(letter);

//  }
//  console.log(vowelChecker('p'));



// function smallnumberChecker(number) {
//   return [ 1, 2, 3, 4]. includes(number);

// }

// console.log(smallNumberChecker)

// // 