const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];



let ex1 = "1) Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30"
console.log(ex1);

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


let ex2 = "2) Repeat the previous programming snippet by using a while loop."
console.log(ex2);

let i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

let ex3 = "3) Repeat the previous programming snippet by using a forEach loop.";
console.log(ex3);

// studentReport.forEach(element => {
//     if(element < LIMIT) console.log(element)
// });

studentReport.forEach(function(element) {
    if (element < LIMIT) {
        console.log(element)
    }
});

let ex4 = "4) Repeat the previous programming snippet by using a for...in loop.";
console.log(ex4);

for (let student in studentReport) {
    if (studentReport[student] < LIMIT) {
        console.log(studentReport[student]);
    }
}


let ex5 = "5) Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.";
console.log(ex5);


// for (let studentRep of studentReport) {
//     if(studentRep < 30) console.log(studentRep);
// }


// document.getElementById("ex1").innerHTML = ex5 + "<br/>";
// for (let i = 0; i < studentReport.length; i++) {
//     document.getElementById("ex1").innerHTML += `${studentReport[i]} <br/>`;
// }


const today = new Date();

// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const options = { weekday: "long" };

let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);

document.getElementById("today").innerHTML = `Today is ${todaystring}`;

const todaystr = document.getElementById("today").innerHTML = `Today is ${todaystring}`;
console.log(todaystr);

const output = document.getElementsByTagName("ul");

for (let i = 0; i <= DAYS; i++) {
    let nextday = new Date();
    // console.log(todaystr);
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    item = document.createElement("li");
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}


const button = document.querySelector("#mybutton");

button.addEventListener("click", () => {
    // Change the background color of the body
    document.body.style.backgroundColor = "lightblue";
});



