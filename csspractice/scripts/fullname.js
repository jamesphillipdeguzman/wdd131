let firstname = "Caleb Angelo";
let middlename = "Cabintoy";
let lastname = "De Guzman";

// document.getElementById("fullname").innerHTML = `Your complete name is <br> <br>${firstname} ${middlename} ${lastname}`;

// 1) Write a function declaration / definition named fullName that has two parameters named first and last.
// The function's purpose is to combine those two string parameters together to return one combined string (a 'full' name)
//with a space between the first and last variables.

// function completeName(first, middle, last) {
//     return `${first} ${middle} ${last}`;
// }

// const fullname = completeName(firstname, middlename, lastname);
// document.getElementById("fullname").innerHTML = `${fullname}`;


const fullName = function completeName(first, middle, last) {
    return `${first} ${middle} ${last}`;                        
}

// const fullname = completeName(firstname, middlename, lastname);
// document.getElementById("fullname").innerHTML = `${fullname}`;

fullName.completeName(firstname, middlename, lastname);



