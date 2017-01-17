//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
inputGuest = prompt("How many guests?")
var guests = parseInt(inputGuest)

inputDonuts = prompt("How many donuts?")
var donuts = parseInt(inputDonuts)


if (guests > donuts) {
   alert("There are " + `${donuts}` + " donuts for " + `${guests}` + " guests" + " so, not enough donuts for everyone")
   }
   else {
     alert("There are " + `${donuts}` + " donuts for " + `${guests}` + " guests" + " so, donuts for everyone")
   }