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