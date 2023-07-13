'use strict';

const setLength = document.getElementById('length');
const setDifficulty = document.getElementById('difficulty');
const form = document.getElementById('form');
const donePass = document.querySelector('.done-password');
const infoButton = document.querySelector('.info-button');
const info = document.querySelector('.info');
const closeInfo = document.querySelector('.close-info');

// prettier-ignore
const easyPasswordCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// prettier-ignore
const normalPasswordCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// prettier-ignore
const hardPasswordCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"];

/* const randomValuesFromArray = function (array) {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
} */

const shortPass = [3, 4, 5];
const mediumPass = [6, 7, 8];
const longPass = [9, 10, 11, 12];
const extremePass = [18, 19, 20];

// Generate random array
const randomValueFromArray = function (difficulty, chars) {
  const shuffled = [...difficulty]
    .sort(() => 0.5 - Math.random())
    .slice(0, chars);

  donePass.textContent = shuffled.join('');
  return shuffled.join('');
};

// Generate random short password
const generateShortPassword = function () {
  const difficulty = setDifficulty.value;

  if (difficulty === 'easy')
    randomValueFromArray(
      easyPasswordCharacters,
      randomValueFromArray(shortPass, 1)
    );
  if (difficulty === 'normal')
    randomValueFromArray(
      normalPasswordCharacters,
      randomValueFromArray(shortPass, 1)
    );
  if (difficulty === 'hard')
    randomValueFromArray(
      hardPasswordCharacters,
      randomValueFromArray(shortPass, 1)
    );
};

// Generate random medium password
const generateMediumPassword = function () {
  const difficulty = setDifficulty.value;

  if (difficulty === 'easy')
    randomValueFromArray(
      easyPasswordCharacters,
      randomValueFromArray(mediumPass, 1)
    );
  if (difficulty === 'normal')
    randomValueFromArray(
      normalPasswordCharacters,
      randomValueFromArray(mediumPass, 1)
    );
  if (difficulty === 'hard')
    randomValueFromArray(
      hardPasswordCharacters,
      randomValueFromArray(mediumPass, 1)
    );
};

// Generate random long password
const generateLongPassword = function () {
  const difficulty = setDifficulty.value;

  if (difficulty === 'easy')
    randomValueFromArray(
      easyPasswordCharacters,
      randomValueFromArray(longPass, 1)
    );
  if (difficulty === 'normal')
    randomValueFromArray(
      normalPasswordCharacters,
      randomValueFromArray(longPass, 1)
    );
  if (difficulty === 'hard')
    randomValueFromArray(
      hardPasswordCharacters,
      randomValueFromArray(longPass, 1)
    );
};

// Generate random extreme password
const generateExtremePassword = function () {
  const difficulty = setDifficulty.value;

  if (difficulty === 'easy')
    randomValueFromArray(
      easyPasswordCharacters,
      randomValueFromArray(extremePass, 1)
    );
  if (difficulty === 'normal')
    randomValueFromArray(
      normalPasswordCharacters,
      randomValueFromArray(extremePass, 1)
    );
  if (difficulty === 'hard')
    randomValueFromArray(
      hardPasswordCharacters,
      randomValueFromArray(extremePass, 1)
    );
};

// Listen for submit the form and set the length of the password
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (setLength.value === 'short') generateShortPassword();
  if (setLength.value === 'medium') generateMediumPassword();
  if (setLength.value === 'long') generateLongPassword();
  if (setLength.value === 'extreme') generateExtremePassword();
});

// INFO BUTTON
// Open the info bar
infoButton.addEventListener('click', function () {
  info.style.left = '0px';
  info.style.transitionDuration = '1s';
});

// Close the info bar
closeInfo.addEventListener('click', function () {
  info.style.left = '-100%';
  info.style.transitionDuration = '2s';
});
