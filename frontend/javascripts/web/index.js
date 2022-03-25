/* global
functions,
objects,
*/

/* Constants */

/* Variables */

/*
onload => Module logic..

/*
  Исполняемую логику засунуть в функцию, которая сработает при загрузке документаю
*/

/* Functions */

// Functions for letters and nabers lists

function createNumbers(item) {
    for(let i = 1; i <= 10; i++) {
        /*
          numLine создается на каждой иттерации цикла. Лишний жер памяти.
          Когда пойдут большие циклы / объемные массивы - производительность начнет не производить.
          Решение: в блок Variables или вне цикла.
        */

        const numLine = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

        /*
          Вообще каждый раз дергать dom не прикольно.
          Лучше в переменную совать эти div, а потом в item разом append все блоки.
        */

        const square1 = document.createElement("div");

        square1.classList.add("square1");
        square1.innerText = numLine[i-1];
        document.querySelector(item).append(square1);
    }
}
createNumbers("#num");
createNumbers("#num2");

/*
  В одном месте функции, в другом выполняемый код. Сейчас их 2, легко.
  Будет 22, запутаешься :)
*/

/*
  createLetters и createNumbers делает одинаковый код.
  В параметры можно передавать (item, letters) и в square1.innerText подставлять letters[i - 1]
*/
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

        /*
          Чуть не то.
          В Variables создать const fields = [];
          А тут в каждой иттерации делать:
          fields.push({
            does_exist_warship: false,
            is_reserved: false;
          });
        */

        square.setAttribute('does_exist_warship', false);
        square.setAttribute('is_reserved', false);
        document.querySelector(item).append(square);
        sqrArr.push(square.id);
    }
}
createField("#player-field");
createField("#enemy-field");
