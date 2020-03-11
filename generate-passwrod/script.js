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

function generatePassword(){
  var length = prompt('How long do you want your password to be?', '8'); 
  var lengthInt = parseInt(length);
  var password = generatePasswordWithLength(lengthInt);
  return password;
}

function generatePasswordWithLength(length) {
  var password = '';
  for( var i=0; i < length; i++) {
 
    if (i % 6 == 0 or )
 
 
 
    password = password +randLetter();

  }
 return password;
}

// taking code out 
 function randLetter(){
  var letters = ['a', 'b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v', 'w','x','y','z'];
  return letters[Math.floor(Math.random() * letters.length)];
 }

 function randNumber(){
  var letters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return letters[Math.floor(Math.random() * letters.length)];
 }

 function randCharacter(){
  var letters = ['!', $, '&', '?', '<', '>'];
  return letters[Math.floor(Math.random() * letters.length)];
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