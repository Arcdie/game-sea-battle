/* global
functions,
objects,
*/

/* Constants */

const URL_ = '/api/...';

/* Variables */

/*
onload => Module logic..
*/

/* Functions */

// Functions for letters and nabers lists

function createNumbers(item) {
    for(let i = 1; i <= 10; i++) {
        const numLine = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const square1 = document.createElement("div");

        square1.classList.add("square1");  
        square1.innerText = numLine[i-1];   
        document.querySelector(item).append(square1);
    }
}
createNumbers("#num");
createNumbers("#num2");

function createLetters(item) {
    for(let i = 1; i <= 10; i++) {
        const numLine = ['А', 'Б', 'В', 'Г', 'Д', 'Є', 'Ж', 'З', 'І', 'К'];
        const square1 = document.createElement("div");
        square1.classList.add("square1");  
        square1.innerText = numLine[i-1];   
        document.querySelector(item).append(square1);
    }
}
createLetters("#let");
createLetters("#let2");


const sqrArr = [];


function createField(item) {
    for(let i = 1; i <= 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square"); 
        square.id = `${i}`;
        square.setAttribute('does_exist_warship', false);
        square.setAttribute('is_reserved', false);
        document.querySelector(item).append(square); 
        sqrArr.push(square.id);  
    }
}
createField("#player-field");
createField("#enemy-field");




