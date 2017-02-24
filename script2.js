//Part 1 - Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:
//1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

//var userNumber = window.prompt("choose a number");
//window.console.log(Math.abs(userNumber));

//2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

//var userNumber = window.prompt("Enter a floating point value");
//window.console.log(Math.ceil(userNumber));

//3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

//var userNumber = window.prompt("Enter a floating point value");
//window.console.log(Math.floor(userNumber));

//4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.







//5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 

//var userNumber = window.prompt("choose a number");
//window.console.log(Math.sqrt(userNumber));

//Part 2 - Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:
//6.	Create an application that gets the current date. Display that result within the console window.

//var x = new Date();
//window.console.log(x.toString());


//7.	Create an application that gets the number of days in a month. Display that result within the console window.

//var getDaysInMonth = function (month, year) {
//    return new Date(year, month, 0).getDate();
//};
//getDaysInMonth(2, 2017);

//8.	Create an application that gets the month name from a particular date. Display that result within the console window.

//var d = new Date();
//window.console.log(d.getMonth());

//9.	Create an application that tests whether a date is a weekend. Display that result within the console window.

//var d = new Date();
//var n = d.getDate();
//if (n === 6) {
//    window.console.log("It's the weekend");
//} else {window.console.log("It's NOT the weekend"); }


//10.	Creatse an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 

//var d = new Date();
//window.console.log(d.getDay() - 1);


//11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

//var d = new Date();
//var dayName = d.toString().split('')[0];
//window.console.log(dayName);


//Part 3 - Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:
//12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.

//var num1 = window.prompt("Enter a Number");
//var num2 = window.prompt("Enter a Number");
//if (parseInt(num1, 10) > parseInt(num2, 10)) {
//    window.console.log(num1);
//} else { window.console.log(num2);
//      }

//13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
// 
//Student Name
//Marks
//Ursula
//80
//Paul
//77
//Henry
//88
//Tabitha
//95
//Lucy
//68
//
//The grades are computed as follows:
//
//Range
//Grade
//<60
//F
//<70
//D
//<80
//C
//<90
//B
//<100
//A
//


//14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.

//var i;
//for (i = 1; i <= 15; i++) {
//    if ((i % 2) === 0) {
//        window.console.log("even");
//    }
//    if ((i % 2) !== 0) {
//        window.console.log("odd");
//    }
//}

//15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.

//var i;
//for (i = 1; i <= 100; i++) {
//    var answer = '';
//    if ((i % 3) === 0) answer += 'fizz';
//    if ((i % 5) === 0) answer += 'Buzz';
//    window.console.log(answer || i);
//}

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:
//1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
//2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
//3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
//4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
//5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
//6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.


//var startGame = window.confirm("Ready to Play? hit okay to begin");
//if (startGame) {
//    window.alert("Awesome, our hero is waiting!");
//} else { window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//       }
//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//var dir = window.prompt("Which direction would you like to head (please enter forward, left, or right)");
//switch (dir) {
//case "forward":
//    window.alert("You walk about 100 yards and safely make your way out of the cave.");
//    break;
//case "left":
//    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//    break;
//case "right":
//    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//    break;
//default:
//    window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}
//var rating = window.prompt("please rate the game on a scale of 1 to 10");
//if (isNaN(rating) || rating < 1 || rating > 10) {
//    rating = 10;
//} else if (rating > 5) {
//    window.alert("Thank you, we will continue to make improvements to the game!")
//} else {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//}




//Part 5 - The “Coin Flip” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
//1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
//2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
//4.	If the result is heads and the user selects heads, display the following message within an alert: 
//5.	If the result is heads and the user selects tails, display 
//6.	If the result is tails and the user selects heads, display the following message within an alert: 
//The flip was tails but you chose heads...you lose!
//7.	If the result is tails and the user selects tails, display the following message within an alert: 
//8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.


//var choice = window.prompt("choose heads or tails");
//
//var coinFlip = Math.round(Math.random());
//if (coinFlip === 0 && choice === "heads") {
//    window.alert("The flip was heads and you chose heads you win");
//}
//if (coinFlip === 0 && choice === "tails") {
//    window.alert("The flip was heads but you chose tails...you lose!");
//}
//if (coinFlip === 1 && choice === "tails") {
//    window.alert("The flip was tails and you chose tails...you win!");
//}
//
//if (coinFlip === 1 && choice === "heads") {
//    window.alert("The flip was tails but you chose heads...you lose!");
//}



//Part 6 - The “Coin Flip” Game Redux (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a for loop that loops 10 times.
//3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 


//for (var i = 0; i < 10; i++){
//    toss = Math.round(Math.random());           
//    if (toss === 1){
//        window.console.log("Tails");
//    } else {
//        window.console.log("Heads");
//    }
//}
//   


//Part 7 - The “Coin Flip Streak” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.

//var coinFlip;

//2.	Create a do while loop.
//3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
//5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

//var coinFlip = 0;
//do {
//    coinFlip++;
//    coinFlip = Math.round(Math.random());
//} while (coinFlip < 10){
//    if (coinFlip === 0) {
//        window.console.log("heads");
//    } else {
//        window.console.log("tails");
//    }
//}


//Part 8 – Looping a Triangle (5 points)
//Write a loop that displays the following triangle within a console window:
//#
//##
//###
//####
//#####
//######
//#######

//var i;
//var x = '';
//for (i = 0; i < 7; i++) {
//    window.console.log(x += '#');
//}


//Part 9 – Odd or Even? (5 points)
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//Sample Output:
//"0 is even" 
//"1 is odd" 
//"2 is even"

//var i;
//for (i = 0; i <= 15; i++) {
//    if ((i % 2) === 0) {
//        window.console.log(i + " is even");
//    }
//    if ((i % 2) !== 0) {
//        window.console.log(i + " is odd");
//    }
//}
