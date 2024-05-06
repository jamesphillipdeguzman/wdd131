
const input = document.querySelector('#favchap');

function addBOMChapter(bomVerse) {

    console.log(bomVerse);

    // Create the list item
    const list = document.querySelector('#list');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Create a unique ID for the li element
     li.id = bomVerse;

    if (li) {
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);


    }



    // Define which Book of Mormon verse to delete

    const elementToRemove = document.getElementById(bomVerse);

    deleteButton.addEventListener("click", function () {
        const response = prompt("Would you like to delete " + bomVerse + " [y/n]: ");
        if (response.toLowerCase() == 'y') {

            elementToRemove.parentNode.removeChild(elementToRemove);
            // Reset value of input to nothing
            input.value = '';
            input.focus();

        } else {
            //do nothing
        }

    });


}



const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e.code);
  // checkout e.code, e.key, and e.keyCode
    // what is the difference?
    // e.key allows me to get the character I pressed on the keyboard
    // For example 'Z' is uppercase 'Z' and 'z' is lowercase 'z'.
    // e.code on the other hand, get the physical key code
    // For example z (lowercase) and Z (uppercase) both returns 'KeyZ'.
}

// Check if user clicked the Add Chapter button
const buttonElement = document.querySelector('#submitButton');
buttonElement.addEventListener("click", function () {
    bomVerse = input.value.trim();

    // If user did not type anything, prompt them to enter a scripture they like
    if (bomVerse == '') {
        const msg = document.getElementById('msg').textContent = "Please enter your favorite scripture";

    } else {

    // Add the scripture
        console.log(bomVerse);
        addBOMChapter(bomVerse);
        const msg = document.getElementById('msg').textContent = "";
        input.value = '';
        input.focus();

    }
});




// buttonElement.addEventListener("click", function () {

//     addBOMChapter();
//     if (input.value.trim() == '') {
//         alert('Please enter your fave BOM chapter');
//     } else {
//         console.log(input.value);
//         input.focus();



//     }
// });

// let el = document.getElementById("close-button");
// console.log(el.ariaLabel); // "Close"
// el.ariaLabel = "Close dialog";
// console.log(el.ariaLabel); // "Close dialog"


// const buttonElement = document.getElementById("submitButton");

// // modify the copyInput callback to receive the event object
// function copyInput(event) {
//   // take a look at the event!
//   console.log(event);
//   const inputElement = document.getElementById("inputBox");
//   const outputElement = document.getElementById("output");
//   outputElement.innerHTML = inputElement.value;
// }


