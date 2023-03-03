


// alert&prompts


//  variables
let introduction = "welcome to my site"
let username = "Akili Inniss"
// let location = "NewYork"
let date = " Jan. 27, 2023"

const students = ["Dana","DJ", "Deja","Divna"]
console.log(introduction)

let favDay = {
    day: "Friday",
    weather: "Sunny",
    activity: "Art museum",
    homework: false
    location1: "New York"
    timeClassEnds: 4
}

//functions
// if you want functs to run immediately after site loads put function call in js. 
// HOWEVER if you want functs to be activated based on specific element add funct call
// to element using an attribute like onClick onHover etc


const introSite = () => {
    let guessAge = prompt( " Are you 18 and over?")

    if(guessAge === "yes") {
        let mainBox = document.querySelector('.container')
        //1. Find an element and target it by class name
        mainBox.innerHTML =introduction

    }else {
    let ourPage = document.querySelector('body')

    ourPage.style.backgroundColor = "red" } 

}

// incorps loop 

const displayStudents = () => {
    for(i=0;i<students.length;i++) {
       //1. create element
       let studentBubble = document.createElement('div')
       //2. assign class 
       studentBubble.setAttribute('class','person')
       studentBubble.setAttribute('src', '')
       //2a. fill new element w info
       studentBubble.innerHTML = students[i]
       //3. Append Item
    
        let mainBox = document.querySelector('.container')
        mainBox.append(studentBubble)
    }
}
// conditionals


// querySelectors
// **extra credit**


// hw design interactive mockup
// create 2 or 3 functions


