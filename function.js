// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =  prePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function prePassword(){

    var lowercase ="qwertyuiopasdfghjklzxcvbnm".split("");
    var uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM".split("");
    var numbers ="1234567890".split("");
    var specialChar ="~-_=+[]:;?!@#$%^&*".split("");
    var AlmostaPassword =[];
    var MasterBucket =[];
    var passwordLength = 0;
    var confirms = 0;
    // var newPassword = "";
    var hello = confirm("Hello! Welcome to the app! Would you like to create a password?")
    var passwordLength = parseInt(prompt("Please choose amount of symbols from 8 to 128"))
    //create AlmostaPassword and a MasterBucket
    
    function passLength(){
    
          if(passwordLength<8 ||passwordLength>128){
          alert("Error!Please choose amount of characters between 8 to 128")
          return passLength()
     } 
    
    console.log(passwordLength)
    }
    passLength();
    
    
    // function pickRandom(array){
    //     array[Math.floor(Math.random() * array.length)];
    // };
    
    
    var choiceLC = confirm("Would you like to have lowercase letters?")
    var choiceUC = confirm("Would you like to have uppercase letters?")
    var choiceNUM = confirm("Would you like to have numbers?")
    var choiceSpecChar = confirm("Would you like to have special characters?")
    
    //put one random character from a chosen group in array AlmostaPassword
    if (choiceLC === true){ 
    // pick a random character from lowercase array and add in an array AlmostaPassword
    var randomLowerCase = lowercase[Math.floor(Math.random() * lowercase.length)];
    AlmostaPassword.push(randomLowerCase);
    //create a masteBucket array with approved type of characters
    MasterBucket = MasterBucket.concat(lowercase)
    //count confirms to define in the end that user chose  at least 1 type of characters
     confirms ++
     console.log(confirms)
    }
    
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
    // return AlmostaPassword
    // return MasterBucket
    
    console.log(AlmostaPassword)
    console.log(MasterBucket)
    
    var difference = passwordLength-confirms
    console.log(difference)
    
    for (i=0;i<difference;i++){
        var randomChar =MasterBucket[Math.floor(Math.random() * MasterBucket.length)];
        AlmostaPassword.push(randomChar);
        //create a string password from an array AlmostaPassword
        // var password = AlmostaPassword.join("");
         var  newPassword = AlmostaPassword.join("");
          console.log(newPassword)  
    }
    
    return newPassword;
    }
    
    // generatePassword();
    