'use strict'

//score elements
const userScoreE1 = document.getElementById('user-score');
const computerScoreE1 = document.getElementById('computer-score');

//weapon elements
const weaponsContainer = document.getElementById('weapons-container'); 
const userWeaponE1 = document.getElementById('user-weapon');
const computerWeaponE1 = document.getElementById('computer-weapon');

//Result elements
const resultContainer = document.getElementById('result-container');
const resultE1 = document.getElementById('result');
//project variables
let userScore = 0 ;
let computerScore = 0;

let userChoice = '';
let computerChoice = '';

const weapons = ['Rock' , 'Paper' , 'Scissors'];
//functions
//game defaults
const init = function(){
    userScoreE1.textContent = userScore;
    computerScoreE1.textContent = computerScore;
};




//Display Weapons
const displayWeapons = function(){
    weapons.forEach((weapon) => {
        //create weapon Button Element
        const weaponE1 = document.createElement('button');

        //Adding a class of weapon to the button element
        weaponE1.classList.add('weapon');

        //adding an attribute of value to button to get it in js
        weaponE1.setAttribute('value',`${weapon}`);

        //we are inserting an image inside the button
        weaponE1.innerHTML = `<img src = "./assets/images/${weapon}.png" alt = "${weapon}"/>`;

        //we are appending the element created in to weapons container
        weaponsContainer.appendChild(weaponE1);

    });
};
//show result function

const showResult = function(userChoice, computerChoice,result){
    //add message in result container
    resultContainer.classList.add('show');
    userWeaponE1.textContent = userChoice.toUpperCase();
    computerWeaponE1.textContent = computerChoice.toUpperCase();

    //show the result acc to result
    if(result === 'draw'){
        resultE1.textContent = 'Game Draw';
    }else if(result === 'win'){
        resultE1.textContent = 'Hey!  You Win ';
        userScore++;
    }else if(result === 'lost'){
        result.textContent = 'OOPS! You Lost';
        computerScore++;
    }


    ///Displaying scores
userScoreE1.textContent=userScore;
computerScoreE1.textContent = computerScore;
};

//Game Rules - Get Result Function
const getResult = function (userChoice, computerChoice) {
  //We are combining choices into a string
  let resultString = `${userChoice}${computerChoice}`;
  if (userChoice === computerChoice) {
    //Draw
    showResult(userChoice, computerChoice, 'draw');
  } else if (
    resultString === 'rockscissors' ||
    resultString === 'paperrock' ||
    resultString === 'scissorspaper'
  ) {
    //win
    showResult(userChoice, computerChoice, 'win');
  } else if (
    resultString === 'scissorsrock' ||
    resultString === 'rockpaper' ||
    resultString === 'paperscissors'
  ) {
    //lost
    showResult(userChoice, computerChoice, 'lost');
  }
};

//initializers
//Replacing the html score values
init();

//Displaying weapons on UI
displayWeapons();

//event listeners
document.querySelectorAll('button').forEach((weapon) => {
  //add Event listener for the weapon
  weapon.addEventListener('click', () => {
    userChoice = weapon.value;
    computerChoice = weapons[Math.trunc(Math.random() * weapons.length)];

    getResult(userChoice, computerChoice);
  });
});
