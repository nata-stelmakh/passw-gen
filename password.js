var lowercase ="qwertyuiopasdfghjklzxcvbnm".split("");
var uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers ="1234567890".split("");
var specialChar ="~-_=+[]:;?!@#$%^&*".split("");
var newpassword=[]

//create AlmostaPassword and a MasterBucket

// function makeAPassword(){

function prePassword(){

var AlmostaPassword =[];
var MasterBucket =[];
var confirms = 0;

//ask what type of characters do user wants
var choiceLC = confirm("Would you like to have lowercase letters?")
//put them in array AlmostaPassword
if (choiceLC === true){ 
// pick a random character from lowercase array and add in an array AlmostaPassword
var randomLowerCase = lowercase[Math.floor(Math.random() * lowercase.length)];
AlmostaPassword.push(randomLowerCase);
//create a masteBucket array with approved type of characters
MasterBucket = MasterBucket.concat(lowercase)
//count confirms to define in the end that user chose  at least 1 type of characters
 confirms = confirms + 1
 console.log(confirms)
}

var choiceUC = confirm("Would you like to have uppercase letters?")
//put them in array AlmostaPassword
if (choiceUC === true){
// pick a random character from uppercase array and add in an array AlmostaPassword
var randomUpperCase = uppercase[Math.floor(Math.random() * uppercase.length)];
AlmostaPassword.push(randomUpperCase);
//create a masteBucket array with approved type of characters
MasterBucket = MasterBucket.concat(uppercase)
//count confirms to define in the end that user chose  at least 1 type of characters
 confirms = confirms+1
 console.log(confirms)
}

var choiceNUM = confirm("Would you like to have numbers?")
//put them in array AlmostaPassword
if (choiceNUM === true){
// pick a random character from  array and add in an array AlmostaPassword
var randomNUM = numbers[Math.floor(Math.random() * numbers.length)];
AlmostaPassword.push(randomNUM);
//create a masteBucket array with approved type of characters
MasterBucket = MasterBucket.concat(numbers)
//count confirms to define in the end that user chose  at least 1 type of characters
 confirms = confirms+1
 console.log(confirms)
}

var choiceSpecChar = confirm("Would you like to have special characters?")
//put them in array AlmostaPassword
if (choiceSpecChar === true){
// pick a random character from  array and add in an array AlmostaPassword
var randomSpecChar = specialChar[Math.floor(Math.random() * specialChar.length)];
AlmostaPassword.push(randomSpecChar);
//create a masteBucket array with approved type of characters
MasterBucket = MasterBucket.concat(specialChar)
//count confirms to define in the end that user chose  at least 1 type of characters
 confirms = confirms+1
 console.log(confirms)
}
if (confirms === 0){
    alert("Please choose at least one group of characters")
    return prePassword()
}
// return AlmostaPassword;
// return MasterBucket;
console.log(AlmostaPassword)
console.log(MasterBucket)
}
prePassword();


function passLength(){
  var passwordLength = 
      parseInt(prompt("Please choose amount of symbols from 8 to 128"));
      console.log(passwordLength)
      if(passwordLength<8 ||passwordLength>128){
      alert("Error!Please choose amount of characters between 8 to 128")
      return passLength()
 } 
//  return passwordLength;
}
passLength();

//while there is a difference in amount of characters between Almostapassword and desired password length, keep adding characters  from MasterBucket to AlmostaPassword

function newpassword() {
   var newpassword = [];
   var AlmostAPasswordlength = AlmostaPassword.length;
   var randomCharacter  = MasterBucket[Math.floor(Math.random() * MasterBucket.length)];
//    var charactersLength = characters.length;
   for ( var i = AlmostAPasswordlength; i < passwordLength; i++ ) {
      newpassword = newpassword.push(randomcharacter);
      console.log(newpassword)
   }
  
}
// while( AlmostaPassword.length < passwordLength){
// var randomChar = MasterBucket[Math.floor(Math.random() * MasterBucket.length)];
// AlmostaPassword.push(randomChar);
// console.log(AlmostaPassword)

// }

// }
//  makeAPassword();
//shufle Almostapassword 

// newpassword = shuffle(AlmostaPassword)

//create a string password from an array shuffledAlmostaPassword
// var password = AlmostaPassword.join("");



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

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```


//  display the generated password