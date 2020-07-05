# passw-gen
https://nata-stelmakh.github.io/passw-gen/

![](Screenshot%20(81).png)


1.Pseudo coding
2.created a list of variables - arrays, that contain characters for the future password
3.created prompts-asking user which type of characters they would like in a password
4.created if statements to check user's answers for prompts
5.created AlmostaPassword array.Every time when a user ansers "yes" for any group of characters,one random symbol from approved group would be stored there, to ensure that at least ONE of desired type of chacracters will be in a password
5.created MasterBucket array, to store chosen groups of characters.In the future that wil be the source to fill the rest of the password 
6.created function to check on amount of characters in the password
7.checking if at least one group of characters was chosen, otherwise process starts over
8.checking difference between desired length of a password and array AlmostaPassword.
9.Adding additional characters to the array till nessesary length
10.convert final array to a string
11.Password ready

