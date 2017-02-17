//1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

//var userEntry = window.prompt("what is your name?");
//var str = window.alert(userEntry.length);

//2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

//var userName = window.prompt("what is your name?");
//var userNumber = window.prompt("choose a number 1-10");
//var lettr = userName.charAt(userNumber-1);
//window.alert(lettr);

//3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

//var firstName = window.prompt("what is your First Name?");
//var lastName = window.prompt("what is your Last Name?");
//window.alert("your name is " + firstName + " " + lastName);

//4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

//var str = "the quick brown fox jumps over the lazy dog";
//window.alert(str.indexOf("fox"));

//5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

//var str = "the quick brown fox jumps over the lazy dog";
//window.alert(str.lastIndexOf("fox"));

//6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

//var str = "the quick brown fox jumps over the lazy dog";
//var strName = window.prompt("Enter Your Name");
//window.alert(str.replace ("the lazy dog", strName));

//7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

//var str = "the quick brown fox jumps over the lazy dog";
//var strWord = str.search(window.prompt("Enter A Word"));
//window.alert(strWord);


//8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

//var oldString = "the quick brown fox jumps over the lazy dog";
//var newString = oldString.substr(-12, 12);
//window.alert(newString.toUpperCase());


//9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

//var str = "       THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG        ";
//window.alert(str.trim().toLowerCase());


//10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//var str = "the quick brown fox jumps over the lazy dog";
//window.alert(str.charAt(0).toUpperCase() + str.slice(1));







