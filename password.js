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
 

var lowercase ="qwertyuiopasdfghjklzxcvbnm".split("");
var uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers ="1234567890".split("");
var specialChar ="~-_=+[]:;?!@#$%^&*".split("");
var AlmostaPassword =[];
var MasterBucket =[];
var passwordLength = 0;
var confirms = 0;
var choiceLC = false;
var choiceUC = false;
var choiceNUM = false;
var choiceSpecChar = false;
var newPassword = "";

//create a function that will define password length
function passLength(){
      var passwordLength = 
      parseInt(prompt("Please choose amount of symbols from 8 to 128"))
      if(passwordLength<8 ||passwordLength>128){
      alert("Error!Please choose amount of characters between 8 to 128")
      return passLength()
 } 
}

//create AlmostaPassword and a MasterBucket

//AlmostaPasswor its an array, that will contain at least one character from confirmed group of symbols-to make sure,that at least ONE symbol from approved group will go in the new password
//MasterBucket its an array, that will serve as a bank of characters to increse new password till desired length

function generatePassword(){

var hello = confirm("Hello!Welcome to the app!Would you like to create a password?")
passLength();

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
    return generatePassword()
}

console.log(AlmostaPassword)
console.log(MasterBucket)


//while there is a difference in amount of characters between Almostapassword and desired password length, keep adding characters  from MasterBucket to AlmostaPassword
var difference = passwordLength-AlmostaPassword.length;

for (i=0;i<difference;i++){
      var randomChar =MasterBucket[Math.floor(Math.random() * MasterBucket.length)];
      AlmostaPassword.push(randomChar);
      //create a string password from an array AlmostaPassword
      // var password = AlmostaPassword.join("");
      var newPassword = AlmostaPassword.join("");
        console.log(newPassword)  
  }
   return newPassword
  }
  
 



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