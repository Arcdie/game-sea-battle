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

// Vairables

const numLine = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const letLine = ['А', 'Б', 'В', 'Г', 'Д', 'Є', 'Ж', 'З', 'І', 'К'];
const sqrArr = [];
const fields = [];

// Functions for letters and nabers lists

function createNumbers(item) {
  /*
          Вообще каждый раз дергать dom не прикольно.
          Лучше в переменную совать эти div, а потом в item разом append все блоки.
        */
  for (let i = 1; i <= 10; i++) {
    const square1 = document.createElement('div');
    square1.classList.add('square1');
    if (item === '#num') {
      square1.innerText = numLine[i - 1];
    } else {
      square1.innerText = letLine[i - 1];
    }
    document.querySelector(item).append(square1);
  }
}
/*
  createLetters и createNumbers делает одинаковый код.
  В параметры можно передавать (item, letters) и в square1.innerText подставлять letters[i - 1]
*/

function createField(item) {
  for (let i = 1; i <= 100; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = `${i}`;
    fields.push({
      does_exist_warship: false,
      is_reserved: false,
    });
    document.querySelector(item).append(square);
    sqrArr.push(square.id);
  }
}

function Start() {
  createNumbers('#num');
  createNumbers('#let');
  createNumbers('#num2');
  createNumbers('#let2');
  // createLetters('#let');
  // createLetters('#let2');
  createField('#player-field');
  createField('#enemy-field');
}

Start();
