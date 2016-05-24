/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort() Sorts the array items in alpha or numerical order
var colors=['red', 'yellow','green'];
colors.sort ();
=>[ 'green', 'red', 'yellow' ]


// .concat() Combines string text from multiple strings into one new strings
var niceToMeetYou = 'Nice to meet you,  ';
niceToMeetYou.concat('Kelly.', ' I like your glasses.');
=>Nice to meet you,  Kelly. I like your glasses.

// .indexOf()Gives the position location of the first time a specified value (letter or word) shows up in a string
var you = "Nice to meet you, Kelly. I like your glasses.";
you.indexOf("y");
=>13

// .split() When a "separator" character is specified, it splits the array (at each point where that specified character shows up) into smaller individual arrays.
var str = "How many more potatoes?";
str.split("o");
=> [ 'H', 'w many m', 're p', 'tat', 'es?' ]

// .join()joins elements in an arry into a string (You can add words in between,such as "then" if desired)
var seasons = ["Spring", "Summer", "Winter", "Fall"];
seasons.join(" then ");
=> 'Spring then Summer then Winter then Fall'

// .pop() Removes an element from the end of an array
var catBreeds = ['devon rex', 'siamese', 'maine coon'];
catBreeds.pop();
=>[ 'devon rex', 'siamese' ]

// .push() Adds an item onto the end of an Array
var arr = [4,7.1];
arr.push(9);
=>[ 4, 7.1, 9 ]

// .slice() Returns a new array of elements starting with the one in the first named position and ending at BUT NOT INCLUDING the last named position.
var bedroom = ["bed", "chair", "rug", "lamp", "dresser"];
bedroom.slice(3, 4);
=> [ 'lamp' ]

// .splice()Adds and/or removes array elements at the specified position
var myDog = ['pug', 'doberman', 'spitz', 'collie'];
myDog.splice(2, 1, 'poodle');
// in index position 2 remove 1 item and add the element "poodle"
=> [ 'pug', 'doberman', 'poodle', 'collie']

// .shift() Removes an element from the beginning of an array
var betterWorld = [ 'racism', 'tolerance', 'diversity' ];
 betterWorld.shift();
 <[ 'tolerance', 'diversity' ]
// .unshift() Adds a given element to the beginning of an array and returns the new length value of the array
var cities = ["Charlotte", "Raleigh", "Greensboro", "Winston-Salem"];
cities.unshift("Kernersville","High-Point");
console.log(cities);
=>[ 'Kernersville', 'High-Point', 'Charlotte', 'Raleigh', 'Greensboro', 'Winston-Salem' ]

// .filter()creates a new array composed of elements that passed a test specified by a function
//I DON'T UNDERSTAND WHY I COULN'T GET THIS TO RUN IN repl.it.
//Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// .map()
// function isBigEnough(value) {
//   return value >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(isBigEnough);
// =>[12, 130, 44]
