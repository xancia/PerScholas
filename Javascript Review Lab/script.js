/*
Part 1. Variables & Datatypes
A. Q + A
1. How do we assign a value to a variable? 
A. = assignment operator
2. How do we change the value of a variable? 
A. = using the assignment operator
3. How do we assign an existing variable to a new variable? 
A. newVar = existingVar
4. Remind me, what are declare, assign, and define? 
A. Declaring a variable is to let your computer know that it exists and to keep memory for it(i.e. let, var, const). Assign to give a variable a value. Define means you want to create a variable with value.
5. What is pseudocoding and why should you do it?
A. Pseudocoding is writing code that is not actually code. You should use it to organize your logic in preparation for actual coding.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
A. 70-90% of the time should be spent preparing your logic on how to solve the problem.
*/
/*
// B. Strings
let firstVariable = "Hello World"
firstVariable = 0;
let secondVariable = firstVariable
secondVariable = "Yes"
// value of first variable = 0
let yourName = "Daniel Fitzpatrick"
let nameExpression = `Hello, my name is ${yourName}` // = "Hello, my name is " + yourName

// C. Booleans


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


// D. The Farm

let animal = "cow";
if (animal === "cow") {
    console.log('mooooo')
} else {
    console.log("Hey! You're not a cow.")
}

// E. Driver's Ed

let age = 0;
if (age >= 16) {
    console.log('Here are the keys!')
} else {
    console.log("Sorry, you're too young.")
}


// Part 2. Loops
// A. The Basics
for (let i = 0 ; i <= 10 ; i++) {
    console.log(i)
}

for (let i = 10 ; i <= 400 ; i++) {
    console.log(i)
}

for (let i = 12 ; i <= 4000 ; i+=3) {
    console.log(i)
}

// B. Get Even
for (let i = 0 ; i <= 100 ; i++) {
    if (i % 2 == 0) {
        console.log(i + " <-- is an even number")
    } else {
        console.log(i)
    }
}

// C. Give me Five
for (let i = 0 ; i <= 100 ; i++) {
    if (i % 5 == 0 && i % 3 == 0 && i != 0) {
        console.log(`I found a ${i}. Three is a crowd, High five!`)
    }
    else if (i % 5 == 0 && i != 0) {
        console.log(`I found a ${i}. High five!`)
    } else if (i % 3 === 0 && i != 0) {
        console.log(`I found a ${i}. Three is a crowd`)
    }
}
*/
// D. Savings Account
// let bankAccount = 0
// for (let i = 0 ; i <= 10 ; i++) {
//     bankAccount += i
// }
// console.log(bankAccount)

let bankAccount2 = 0;
for (let i = 0 ; i <= 100 ; i++) {
    bankAccount2 = bankAccount2 += i * 2
}

console.log(bankAccount2)




/* Part 3. Arrays & Control flow
A. Talk about it:
1. What are the things in an array called? 
A. Indexes = Indices
2. Do Arrays guarantee those things will be in order? 
A. Yes
3. What real-life thing could you model with an array? 
A. A List

*/

// B. Easy Does It
let quotes = ['Miyaangelo','MLK','Obama']

// C. Accessing Elements

const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
// A. randomthings[0]
// 2. Change the value of "Hello"to "World"
randomThings[2] = "World"
// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// 1. What would you write to access the 3rd element of the array?
// A. ourClass[2]
// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// 3. Add a new element, "Cloud City" to the array
ourClass.push('Cloud City')


// E. Mix It Up

const myArray = [5, 10, 500, 20];
// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon')
myArray.push('Your Choice')
// 2. Remove the 5 from the beginning of the array.
myArray.shift()
// 3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift('Bob Marley')
// 4. Remove the string of your choice from the end of the array.
myArray.pop()
// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
// A. Yes, mutates means we changed the original Array. It doesn't return anything
console.log(myArray)

// F. Biggie Smalls

let num = 6;
if (num < 100) {
    console.log('Little Number')
} else {
    console.log('Big Number')
}

// G. Monkey in the Middle

if (num < 5) {
    console.log('Little Number')
} else if (num > 10) {
    console.log('Big Number')
} else {
    console.log('Monkey')
}

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, 'raybans')
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat"
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0]
// 5. In the same way, access one item from Thom's pants array.
thomsCloset[1][0]
// 6. Access one item from Thom's accessories array.
thomsCloset[2][0]
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}!`)
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas'


// Part 4. Functions
// A. printGreeting
//Skip

// B. printCool
const printCool = function(string) {
    return `${string} is cool`
}

console.log(printCool("Captain Reynolds"));

// C. calculateCube
const calculateCube = function(num) {
    return num**3
}

console.log(calculateCube(5));

// D. isVowel
const isVowel = function(char) {
    char = char.toLowerCase()
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true
    } else {
        return false
    }
}

console.log(isVowel("U"));

// E. getTwoLengths

const getTwoLengths = function(string1, string2) {
    let num1 = string1.length
    let num2 = string2.length
    let arr = []
    arr.push(num1)
    arr.push(num2)
    return arr
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths

const getMultipleLengths = function(array) {
    let arr = []
    for (let string of array) {
        arr.push(string.length)
    }
    return arr
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree

const maxOfThree = function(a,b,c) {
    let max = 0;
    if (a > b && a > c) {
        max = a
    } else if (b > c && b > a) {
        max = b
    } else {
        max = c
    }
    return max
}

console.log(maxOfThree(11, 9, 15));

// H. printLongestWord

const printLongestWord = function(array) {
    let max = array[0].length
    let longestString = ''
    let reversedArr = array.reverse()
    for (let i = 0 ; i < reversedArr.length ; i++) {
        if (max <= reversedArr[i].length) {
            max = reversedArr[i].length
            longestString = reversedArr[i]
        } 
    }
    return longestString
}
let array1 = ['mark','cuong','daniel']
let array3 = ['osu', 'msu', 'ncsu']
let array2 = array1.map((string,index,array) => {

    return {name: string, student: array3[index]}
})

console.log(array2)

console.log(printLongestWord(["PEANUTBUTTER", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// Objects
// A. Make a user object



// B. Update the user

// C. Adding keys and values

// D. Shopaholic

// E. Object-within-object

// F. Loops

// G. Functions can operate on objects


// Cat Combiner


// Cat brain bender