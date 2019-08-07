// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

// var mantra = "Be the dev"
// 1a. Write the code that returns 'B' from mantra.

var mantra = "Be the dev"
var letter = mantra.charAt(0)
console.log(letter)

// 1b. Write the code that determines if there is an 'x' in mantra.

    var mantra = "Be the dev";
    var lookFor = mantra.includes("x")
console.log(lookFor)

// 1c. Write the code that determines if there is a 'v' in mantra.

    var mantra = "Be the dev";
    var lookFor1 = mantra.includes("v")
console.log(lookFor1)

// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.


// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

function longerName(dog, cat){
    if (dog.length > cat.length) {
         return dog
    } else if
        (cat.length > dog.length)
         return cat
}
console.log(longerName(myDog, myCat))

// // 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
  
    var myDogCat = []
    myDogCat.push(myDog,myCat)

console.log(myDogCat)

// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.

// -----------------------------------------------
// Consider this variable:

// var myMessage = "Learning is fun!"

// // 3a. Write the code that logs each letter of the message using a for loop.
// for (let i = 0; i < myMessage; i++)

function logsLetter(){
    var myMessage = "Learning is fun!"
    for (let i = 0; i < myMessage.length; i++)
        return myMessage.split("").join()
}
console.log(logsLetter())


// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().


// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
function noVowels(testString){
    let vowles = "aeiou"
    let arr = []
    for (let i = 0; i < testString.length; i++){
        if(!vowles.includes(testString[i])){
            arr.push(testString[i])
        }
    }
    return arr.join("")
}
console.log(noVowels(testString))

// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
// function noVowels(testString){
//      let vowles = "aeiou"
//      let arr = []
//      for (let i = 0; i < testString.length; i++){
//          if(!vowles.includes(testString[i])){
//              arr.push(testString[i])
//         } else {
//             return "error variable is not a string"
//      }
//   }
//      return arr.join("")
// }
// console.log(noVowels(testString))

// ----------------------------------------------
// Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

function catss(cats){
    let newArr = [];
    for(let i = 0; i < cats.length; i++ ) {
        if (cats[i].animal === "cat") {
            newArr.push(cats[i])
        }
    } 
    return newArr
} 
console.log(catss(toonimals))

//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

function nonCats(notCats){
    let newArr2 = [];
    for(let i = 0; i < notCats.length; i++ ) {
        if (notCats[i].animal !== "cat") {
            newArr2.push(notCats[i].name)
        }
    } 
    return newArr2
} 
console.log(nonCats(toonimals))


//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
