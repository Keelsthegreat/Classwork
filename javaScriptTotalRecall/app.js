// I. Variables & Datatypes

let assignment = "value"

assignment = "changedValue"
// console.log(assignment)

let oldVar = "Jordan"
let newVar = "Manara"

let collabVar = oldVar + newVar
// console.log(collabVar)

// declare uses keyword to establish
// assign uses = operator to associate value
// define is recalling value 

// this ==> because it helps organization
// 60-40 
// --------------------------------

// Strings

let firstVar = "first"
firstVar = "hello World"
firstVar = 1
let secondVar = firstVar
secondVar = "any String"
// console.log(firstVar)

let name = "Jaime"
let greeting = `Hi my name is ${name}`
// console.log(greeting)
// --------------------------------

// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c);

// console.log(a * a === d);

// console.log(48 == '48');
// --------------------------------

// The Farm
let animal = "cow" || "sumnElse"
if (animal === "cow") {
    // console.log("Mooooo")
} else {
    // console.log('Hey! You are not a cow')
}
// --------------------------------
// DriversEducation

let age = 33

if (age >= 16) {
    // console.log("Here are the keys")
} else {
    // console.log("here is a skateboard")
}
// --------------------------------

// Loops

for (let i = 0; i <= 10; i++) {
    // console.log(i, " <--currentNum")
}
for (let i = 10; i <= 400; i++) {
    // console.log(i, " <--currentNum")
}

for (let i = 12; i <= 4000; i += 3) {
    // console.log(i, " <--currentNum")
}
// B.GetEven

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        // console.log(i, " <-- is even")
    }
}
// C. i gotttt 5555 oonnn it!

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log(i, " <-- HIFIVE! Three is a Crowd!")
    } else if (i % 5 === 0) {
        // console.log(i, " <-- High Five!")
    } else if (i % 3 === 0) {
        // console.log(i, " <-- Three is a Crowd!")
    }
    else {
        // console.log(i,'<-- I found a number')
    }
}
// --------------------------------
// Savings Account
let accountBalance = 0

// for(let i=0;i<=10;i++){
//   accountBalance += i
// }

// console.log(`Balance : ${accountBalance}`)

for (let i = 1; i <= 100; i++) {
    accountBalance += i
}
// console.log(accountBalance*2)

// Arrays/ControlFlow
// values
// yes,bc of [index]
// students

// EZ does it
let quotes = [
    'YadaYaba',
    'WordsBond',
    'BadaBing'
]

// Accessing Elements
const randomThings = [1, 10, "Hello", true]

randomThings[0]
randomThings[2] = "World"
// console.log(randomThings)

// ChangeValues

ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2]
ourClass[4] = "Octocat"
ourClass.push("Cloud City")
// console.log(ourClass)

// Mix it Up
const myArray = [5, 10, 500, 20]

myArray.push('Aegon')
myArray.push('strOvMyChoice')
// console.log(myArray)
myArray.shift()
myArray.unshift("Bob Marley")
// console.log(myArray)
myArray.pop()
myArray.reverse()
console.log(myArray)

// BiggieSmalls
let thisnum = 9
if (thisnum > 100) {
    console.log("Big Number")
} else {
    console.log("Little Number")
}
// munkey in the middle
if (thisnum > 10) {
    console.log("Big Number")
} else if (thisnum < 5) {
    console.log("Little Number")
} else {
    console.log("MojoJoJo")
}
// -----------------------------
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

// console.log(`"Kristyn is rocking that ${kristynsCloset[2]} in Kristyn's closet today!"`)

kristynsCloset.splice(6, 0, "Raybans")
kristynsCloset[5] = "Stained Knit Hat"
// console.log(kristynsCloset)

// Thom is looking fierce in a grey button-up, jeans and wool scarf!"

let outfit = [thomsCloset[0][0], thomsCloset[1][1], thomsCloset[2][1]]

console.log(`Thom is looking fierce in a ${outfit[0]}, ${outfit[1]} and ${outfit[2]}!`)
thomsCloset[2][1] = "Footie Pajamas"

// Functions
const printGreeting = (name) => {
    console.log(`Hello there ${name}`)
}
printGreeting(name)

const printCool = (name) => {
    console.log(`${name} is cool`)
}
printCool(name)

const calculateCube = (dimensions) => {
    let vol = dimensions ** 3

    console.log(`Cube Volume is : ${vol}`)
}
calculateCube(5)

let vowels = ["a", "e", "i", "o", "u"]
const isVowel = (char) => {
    if (vowels.includes(char)) {
        console.log("IS a Vowel")
    } else {
        console.log(false)
    }
}
isVowel("p")
isVowel("i")

const getTwoLengths = (x, y) => {
    console.log(x.length, y.length)
}
getTwoLengths("Jordan", "Lea")

const getMultiLengths = (...longs) => {
    longs.forEach((x) => {
        console.log(x.length)
    })
}

getMultiLengths("apple", "banana", "nyc")

const maxOfThree = (a, b, c) => {
    let greaterNum;
    if (a > b) {
        console.log(a)
        greaterNum = a
    } else {
        console.log(b)
        greaterNum = b
    }

    if (greaterNum < c) {
        console.log("C WINS", c)
    } else {
        console.log(`${greaterNum} WINS`)
    }
}
maxOfThree(1, 43, 222)
maxOfThree(1, 433, 222)
maxOfThree(1221, 43, 222)

const printLongestWord = (arr) => {
    let biggest = 0
    arr.forEach((word) => {
        if (word.length > biggest) {
            biggest = word.length
            console.log(word, "is Biggest")
        }
    })
}

printLongestWord(["apple", "elephant", "croissant"])