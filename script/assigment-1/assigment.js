

// Day 2 (Task 1) "Zakat Calculator"

// var zakat_percentage;

// var zakat_percentage=0.025;
// var userinput=+prompt("PLEASE ENTER YOUR AMOUNT")
// var result=(zakat_percentage*userinput) ;
// alert("YOUR ZAKAR VALUE IS  "+result)




// TASK 2 

/* calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/













// TASK 2
/* calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/


// var  familymembers=+prompt("ENTER TOTAL MEMBERS OF FAMILY");
// var fitramethod = +prompt("Choose A Fitrah Method " +""+" 1.Wheat "+""+" 2.Barley "+""+" 3.Dates "+""+" 4.Raisins ");


// if (fitramethod==1)
// {
//     alert("Fitra amount of your family is " + familymembers * 250 +" RS.");
// }
// else    if (fitramethod==2) {
//     alert("Fitra amount of your family is "+familymembers*450 +" RS.");
// }
// else if (fitramethod==3){
//     alert("Fitra amount of your family is "+familymembers*2100+" RS.");
// }
// else if (fitramethod==4){
//     alert("Fitra amount of your family is "+familymembers*2800+" RS.");
// }
// else{
//     alert("please select any of one from given options")}
    










// TASK 3
// "Guess Game"

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


// var guess = +prompt("guess the secret number between 1 to 10")
// if (guess == 6){
//     alert("Conguralation! your answer is correct.");
// }else {alert("your answer is wrong")
// }






// TASK 4
/* Create a program that asks the user to enter a name, and then prints out the name
 with the first letter capitalized (Make your name in capitalized case).*/

//  var name = prompt("Enter your name in small letters.")
//  document.write(name[0].toUpperCase() + name.slice(1).toLowerCase());









// task 5

/* In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.*/

// var contactNumber = [];
// var contactName = [];

// for (var i = 0; i < 3; i++) {
//   var number = prompt("Enter a contact number:");
//   var name = prompt("Enter a contact name:");
//   contactNumber.push(number);
//   contactName.push(name);
// }

// for (var i = 0; i < contactNumber.length; i++)
// {
//   console.log(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
//   alert(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
// }



// task 6


/* Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.
 */



// var products = ["lays", "kurkure", "cholate chips", "ding dong", "wispy", "slims", "cupcake"];


// var userInput = parseInt(prompt(`Enter the position of the item you want to remove (1 - ${products.length}):`));

// var removedItem = products.splice(userInput - 1, 1);

// console.log(`The removed item is: ${removedItem}`);
// alert(`The removed item is: ${removedItem}`);

// console.log(`The remaining items in the array are: ${products}`);
// alert(`The remaining items in the array are: ${products}`);

// console.log(`Total number of items remaining: ${products.length}`);
// alert(`Total number of items remaining: ${products.length}`);



// task 7


/* Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.
  */


// if (nationality === 'Pakistani' || nationality === 'Indian') {  
//   console.log("You are eligible to vote");

//   if (age>= 18 && gender === 'male'){
//     console.logs("You are eligible to vote");
//          
//           if ( age>= 18 && gender === 'female'){
//             console.logs("You are eligible to vote");
//           else
//           console.log("You are not eligible to vote");
//     }}
//   }








// Task  8 

/* You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.*/


// var WorldcupTeam = ["Player1", "Player01",  "Player02",  "Player03",  "Player04",  "Player05",  "Player06",  "Player07",  "Player08",  "Player09",  "Player10",  "Player12",  "Player13",  "Player14",  "Player15", ];

// var FinalTeam = WorldcupTeam.slice(2,13)

// console.log(WorldcupTeam)
// console.log(FinalTeam)