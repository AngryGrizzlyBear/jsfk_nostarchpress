// Data Types and Variables.
5;
"Hi, I'm a string!";
true;
99 * 123;
12177;
"This is a long string".slice(0, 4);
"This"
true && false;
false

// Remember that semicolons mark the end of a particular
// Javascript command or instruction(known as a statement), sort
// of like a period at the end of a sentence.

// Numbers and Operators

12345 + 56789;
22 + 33 + 44;
1000 - 17;
123 * 456;
12345 / 250;
49.38
1234 + 57 * 3 - 31 / 4;
console.log((15 + 9) * 2)

// Variables

var age = 12;
console.log(age)

var numberOfSiblings = 1 + 3;
var numberOfCandies = 8;
console.log(numberOfCandies / numberOfSiblings);

// Seconds in an hour

var secondsInAMinute = 60;
var secondsInAnHour = 60;
var secondsInAnHour = secondsInAMinute * secondsInAnHour;
console.log(secondsInAnHour)

// Seconds in a day

var hoursInADay = 24;
var secondsInADay = secondsInAnHour *  hoursInADay;
console.log(secondsInADay);

// Seconds in a year

var daysInAYear = 365;
var secondsInAYear = daysInAYear * secondsInADay;
console.log(secondsInAYear)


// Age in seconds

var age = 29;
console.log(age * secondsInAYear);

// Incrementing and  Decrementing

var highFives = 0;
console.log(++highFives);
console.log(++highFives);
console.log(--highFives);

highFives = 0;
console.log(highFives++)
console.log(highFives++)
console.log(highFives)

// += (Plus-Equals) and -= (Minus Equals)

var x = 10;
x = x + 5;
console.log(x)

var score = 10;
score += 7;
console.log(score)
score -= 3;
console.log(score);

// Other examples
var balloons = 100;
console.log(balloons *= 2);

var balloons = 100;
console.log(balloons /=  4);

// Strings
console.log("Hello world!");

var myAwesomeString = "Something REALLY awesome!!!";
console.log(myAwesomeString)

var myThing = 5;
myThing = "this is a string";
console.log(myThing)

var numberNine = 9;
var stringNine = "9";
console.log(stringNine + numberNine);

// Joining Strings

var greeting = "Hello ";
var myName = "Nick";
console.log( greeting + myName);

// Finding the length of a string

console.log("Supercalifragilisticexpialidocious".length);

var java = "Java";
console.log(java.length);
var script = "Script";
console.log(script.length);
var javascript = java + script;
console.log(javascript.length);

// Getting a single character from a string.

var myName = "Nick";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);

var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4= "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

// Changing strings to all capital or all lowercase letters
console.log("Hello there, how are you doing?".toUpperCase());
console.log("Hello there, how are you doing?".toLowerCase());

// Booleans

var javascriptIsCool = true;
console.log(javascriptIsCool);

// logical expressions

var hadShower = true;
var hasBackpack = true;
console.log(hadShower && hasBackpack);

// || or

var hasApple = true;
var hasOrange = false;
console.log(hasApple || hasOrange);

// ! not

var isWeekend = true;
var needToShowerToday = !isWeekend;
console.log(needToShowerToday)