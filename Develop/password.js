
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


//! AND HERE WE WRITE A FUNCTION generatePassword()"
// WHEN I click the button to generate a password
generatePassword() 
{
var lowercase ="qwertyuiopasdfghjklzxcvbnm".split("");
var uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers ="1234567890".split("");
var specialChar ="~-_=+[]:;?!@#$%^&*".split("");
var newpassword="";
var Bucket = [];


function randomPick(string){
    return string [Math.floor(Math.random() * string.Length)];
}

// THEN I am presented with a series of prompts for password criteria

// we need to create a list of characters that we will choose the random characters later
function masterBucket(){

  // var Bucket =[];
  var confirms = 0;

//do you want lowercase?
var choiceLC = confirm("Would you like to have lowercase letters?")
console.log(choiceLC);
if (choiceLC =true){
// pick a random character from lowercase array and add in master bucket
  Bucket.push(randomPick(lowercase));
 confirms = confirms+1
  
}
// do you want uppercase?
var choiceUC = confirm("Would you like to have uppercase letters?")
console.log(choiceUC);
if (choiceUC =true){
  // pick a random character from uppercase array
  Bucket.push(randomPick(uppercase));
   confirms = confirms+1
        
}
// do you want to include numbers?
var choiceNUM = confirm("Would you like to have numbers?")
console.log(choiceNUM);
if (choiceNUM =true){
  // pick a random character from numbers array
  Bucket.push(randomPick(numbers));
  confirms = confirms+1
}
// do you want  special characters?
var choiceSpecChar = confirm("Would you like to have special characters?")
console.log(choiceSpecChar);
if (specialChar =true){
  // pick a random special character from specialChar array
  Bucket.push(randomPick(specialChar));
  confirms = confirms+1
    
}
if (confirms === 0){
  alert("Please choose at least one group af characters!")
  masterBucket()
}  
console.log(Bucket)
}
masterBucket()
// THEN I choose a length of at least 8 characters and no more than 128 characters

function passGen(){
  var length = parseInt(
      prompt("Please choose amount of symbols from 8 to 128")
      );
  console.log(length)

  if(isNaN(length)||length<8 ||length>128){
  alert("Error!Please choose amount of characters between 8 to 128")
 return passGen()
 
}
}
passGen()

for (var index = newpassword.length; index < length; index++){
  newpassword += randomPick(Bucket);
  console.log(newpassword)
}
 
}


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