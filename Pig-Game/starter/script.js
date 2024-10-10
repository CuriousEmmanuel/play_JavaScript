'use strict';

//both getElementById and querySelector works the same

// we use # for selecting ids

//////////////////------selecting elemets---//////////////////

const score0El = document.querySelector('#score--0');//score0El is a dome element

//getElementById is always fastor than the selector
//here we only pass the name of the id without the # symbol because we are not writing a selector we are only passing the name of the Id that we are looking for\
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

const score1El = document.getElementById('score--1');
const currentEl0 =document.getElementById('current--0');
const currentEl1 =document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew =document.querySelector('.btn--new');
const btnRoll =document.querySelector('.btn--roll');
const btnHold =document.querySelector('.btn--hold');

//////////////////---starting conditions----///////

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');



//            //store data
// //we can not store scores inside the function coz it will be reseted everytime the function is called
// ///the scores of both players will be stored in an arrat
// const scores =[0,0];
// let currentScore = 0; 
// let activePlayer = 0;
// let playing = true;
//declare variables outside the scope first or wont work

let scores,currentScore,activePlayer,playing;

                 ///////functions/////////////////

//init for initialization
const init = function(){
	score0El.textContent = 0;
    score1El.textContent = 0;
   
      scores =[0,0];
      currentScore = 0; 
      activePlayer = 0;
      playing = true;

    currentEl0.textContent =0;
    currentEl1.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
//call the function at the start of the game to reset everything 
init();

const switchPlayer = function(){
			//setting the score to 0 before switch
		//we select the current player and assign his score to 0
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		currentScore = 0;
		//switch player
		activePlayer = activePlayer === 0 ? 1 : 0;//tenary operator
		//another classlist method 'toggle' if the element is there it removes it if it is not there it adds it
		//toggling both at the same time will ensure the class in only on one side
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
	};


//////////////-------building dice functionality--------/////
btnRoll.addEventListener('click',function(){

	if(playing){


	//1. generate a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1 //it will generate up to 5 so we add one to make it 6
	console.log(dice);

	//2. display dice
	diceEl.classList.remove('hidden')//then we remove hidden class to make the dice visible
    //we add an image according to the number rolled to the src element from the html as a string
	
	diceEl.src = `dice-${dice}.png`;//this I do not understand

	//3. check for rolled 1: if true, switch to next player
	if(dice !== 1) {
		//add dice to the currentScore
	// currentScore = currentScore + dice;
		           //-or-//
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		//currentEl0.textContent = currentScore;//TO BE CHANGED LATTER
	}else{
		//setting the score to 0 before switch
		//we select the current player and assign his score to 0
		//document.getElementById(`current--${activePlayer}`).textContent = 0;
		// currentScore = 0;
		// //switch player
		// activePlayer = activePlayer === 0 ? 1 : 0;//tenary operator
		// //another classlist method 'toggle' if the element is there it removes it if it is not there it adds it
		// //toggling both at the same time will ensure the class in only on one side
		// player0El.classList.toggle('player--active');
		// player1El.classList.toggle('player--active');

		switchPlayer();
	}
  }
}); 
//let us as cores to the plate with hold button

btnHold.addEventListener('click',function(){
	if(playing){


	//1.Add current score to the active players score
    scores[activePlayer] += currentScore; //add values to the array above depending on the activeplayer
    // scores[1] = scores[1] + currentSore;
    //we use template string to add the values dynamically to the current--0 (the 0 is added dynamically according to the active playe)
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
	//2.Check if players score is >= 100
	if(scores[activePlayer] >= 100){
	//finish the game
		playing = false;
		document.querySelector('.dice').classList.add('hidden');

		//add winner class fom css
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        //remove the active player class to avoid conflicts
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

 
        }else {
	//else switch to next player
	    //same code as above needed so make it a function
    switchPlayer();
     }
 }
});
btnNew.addEventListener('click', init);//{

	//we remove the anonymous function and pass in the init function as a value js will call it for you
// btnNew.addEventListener('cbtnNew.addEventListener('click',function(){lick',function(){ //replaced with init value

	// score0El.textContent = 0;
    // score1El.textContent = 0;
    // currentEl0.textContent =0;
    // currentEl1.textContent = 0;
    // //remove winner class to one of the players or all players
    // player0El.classList.remove('player--winner');
    // player1El.classList.remove('player--winner');
    // //make the first player start the game
    // player0El.classList.add('player--active');
    // player1El.classList.remove('player--active');
//});
