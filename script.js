'use strict';
const ply0 = document.querySelector('.player--0');
const ply1 = document.querySelector('.player--1');
const ply0Sc = document.querySelector('#score--0'); 
const ply1Sc = document.getElementById('score--1'); 
const ply0Cr = document.querySelector('#current--0'); 
const ply1Cr = document.getElementById('current--1'); 

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//initial conditions
let score = [0,0];
ply0Sc.textContent = 0;
ply1Sc.textContent = 0;
ply0Cr.textContent = 0;
ply1Cr.textContent = 0;

dice.classList.add('hidden');

let currScore = 0;
let activePl = 0;
let gameOn = true;

const switchPlayer = function(){
    document.querySelector(`#current--${activePl}`).textContent = 0;
    activePl = activePl===1?0:1;
    currScore = 0;
    ply0.classList.toggle('player--active');
    ply1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if(gameOn)
    {
        const num = Math.trunc(Math.random()*6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${num}.png`;

        if(num != 1){
            currScore += num;
            document.querySelector(`#current--${activePl}`).textContent = currScore;
        }
        else{
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click', function(){
    if(gameOn){
        score[activePl] += currScore;
        document.querySelector(`#score--${activePl}`).textContent = score[activePl];
    
        if(score[activePl] >= 10){
            document.querySelector(`.player--${activePl}`).classList.add('player--winner');
            gameOn = false;
            dice.classList.add('hidden');
        }
        else{
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function(){
    score = [0,0];
    ply0Sc.textContent = 0;
    ply1Sc.textContent = 0;
    ply0Cr.textContent = 0;
    ply1Cr.textContent = 0;
    dice.classList.add('hidden');
    currScore = 0;
    activePl = 0;
    gameOn = true;
    ply0.classList.add('player--active');
    ply0.classList.remove('player--winner');
    ply1.classList.remove('player--active','player--winner');
})


