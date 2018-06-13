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