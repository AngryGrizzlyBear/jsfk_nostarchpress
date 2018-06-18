// Arrays

var dinosaurs = [
    "T-Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosarus",
    "Pteranodon",
    "Apatosarus",
    "Diplodocus",
    "Compsognathus"]

// accessing an array
console.log(dinosaurs[0])
console.log(dinosaurs[3])

// Setting or changing elements in an array
dinosaurs[0] = "Tyrannosaurus Rex"
console.log(dinosaurs)

dinosaurs[9] = "Giant Three Toed Sloth"

console.log(dinosaurs)

//Mixing Data Types in an array

var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10]
console.log(dinosaursAndNumbers[2][0])

// Working with arrays, finding the length of an array.
var maniacs = ["Yakko", "Wakko", "Dot"];
console.log(maniacs.length)
console.log(maniacs[maniacs.length -1])

// Adding elements to an array
var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama")
console.log(animals)
console.log(animals.length)
animals.unshift("Monkey");
animals.unshift("Polar Bear")
console.log(animals)
console.log(animals.length)

// Removing Elements from an Array

var lastAnimal = animals.pop();
console.log(animals.pop())
console.log(animals)
console.log(animals.unshift(lastAnimal))
console.log(animals)
var firstAnimal = animals.shift();
console.log(firstAnimal)
console.log(animals)

// Adding Arrays
var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals)
console.log(furryAnimals)
console.log(scalyAnimals)

// Joining multiple arrays
var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var featheredAnimals = ["Macaw", "Dodo"];
var allAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals)
console.log(allAnimals)