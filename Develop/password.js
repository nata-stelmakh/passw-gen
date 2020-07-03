
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

var lowercase ="qwertyuiopasdfghjklzxcvbnm".split("")
var uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM".split("")
var numbers ="1234567890".split("")
var specialChar ="~-_=+[]:;?!@#$%^&*".split("")

// THEN I am presented with a series of prompts for password criteria


// do you want lowercase?
var choiceLC = confirm("Would you like to have lowercase letters?")
// do you want uppercase?
var choiceUC = confirm("Would you like to have uppercase letters?")
// do you want to include numbers?
var choiceNUM = confirm("Would you like to have numbers?")
// do you want  special numbers?
var choiceSpecChar = confirm("Would you like to have special characters?")
// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters

function passGen(){
    var length = prompt("Please choose amount of symbols from 8 to 128")
    console.log(length)
    if(length<8 ||length>128){
    alert("Error!Please choose amount of characters between 8 to 128")
   return passGen()
}
}
passGen()
 //after chosen criteria, we have length and types of additional symbols that we need to include at least one of each
// to fill rest of the password  create a master bucket and randomly choose characters
//
function randomPick(string){
    return Math.floor(Math.random() * string.Length);
}
var masterBucket =[]
var confirms = 0

if (choiceLC =true){
    // pick a random character from lowercase array and add in master bucket
   masterBucket.push(randomPick(lowercase))
   confirms = confirms+1
  }
if (choiceUC =true){
    // pick a random character from uppercase array
    masterBucket.push(randomPick(uppercase))
     confirms = confirms+1
  }
if (choiceNUM =true){
    // pick a random character from numbers array
    masterBucket.push(randomPick(numbers)) 
    confirms = confirms+1
  }
if (specialChar =true){
    // pick a random special character from specialChar array
    masterBucket.push(randomPick(specialChar)) 
    confirms = confirms+1
  } 

//if a user didnt pick any special characters, ask him to start over
if (confirms===0){
    alert("You need to pick at least one type of special symbols!")
    writePassword()
} 
//1.we need a list of characters
//2.we need to find out what characters user wants
//3.we need to create a list from the characters we need tou use
//4.we need to pick random characters 
//5.return a password back




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