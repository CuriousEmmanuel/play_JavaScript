'use strict';
// //in js we can select elements just the way we select them in css using the class or id


// //a class we select using a dot. and an id we use #
// //to select the content of the element we use another dot again

// console.log(document.querySelector('.message').textContent);

// //changine html text using DOM replacng the previous message

// //this is Dom manipulation 

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);


// //let us select the number and the score

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //at the input field to get the actual value we use the value property

// console.log(document.querySelector('.guess').value);

// //to change the value

// document.querySelector('.guess').value =100


// //log the new value to the console
// console.log(document.querySelector('.guess').value);

//what about logging the value automatically to the console when we click on CHECK???
//handling click events
//make js rect to what is hapening by listening to the events

//first select the element then add then call the listener
//then specify the event you want to listenaither click hover or any event that might happen
//then tell what to do when the event happens






//remember function 

// const x = function(){
// 	consile.log();
// };

/// 1
//now add event handler which is a function to do what it must when the event occure
//when click the function handles the event and logs the value to the console
// the result will be a string and we need a number so we convert it with the number()function
//store the result of the event in a variable guess

/// 2
//////////lets generate the random number before listening to events

const secretNumber = Math.trunc(Math.random()*20) + 1;

///3
//updating the scores to decrease after every wrong guess



///////4
//with DOM we can also change/manipulate the  css styles of a page

let score = 20;//keeping the variable to store information is better than always relaying on DOM to keep records for us
///////5
//setting the high score
let highscore = 0;

//make secret number invisible until the user wins the game
// document.querySelector('.number').textContent = secretNumber;



document.querySelector('.check').addEventListener('click', function(){
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	//lets implement scenariors  when there is no input
	if(!guess){
		document.querySelector('.message').textContent = 'No number!!!';
			
 //when player wins
			}else if (guess === secretNumber){
	          document.querySelector('.message').textContent = 'Correct Number!!!';
            //change body color if player wins
	          //body is not a class nor an ID so no dot or #
	          //All css attributes that has joined names will  ot work on js so use firstSecond  (camelCase notation)
	          //name and put the values in a string 
	          document.querySelector('body').style.backgroundColor = '#68b374';
              
              document.querySelector('.number').style.width = '30rem';
 			//high score 
              if(score > highscore){
              	highscore = score;
              	document.querySelector('.highscore').textContent = highscore;


              	//----------------refactoring the code ------------

              	//it did not work sorry

              // }else if(guess !== secretNumber){
              // 	if(score > 1){
              // 		document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
              // 		score--
              // 	}else{
              // 		document.querySelector('.score').textContent = 'you lost the game!';
              // 		document.querySelector('.score').textContent = 0;
              // 	}
              // }




              //desplay the secret number
              document.querySelector('.number').textContent = secretNumber;
//when guess is too high
            }else if (guess > secretNumber){

            	if(score > 1){
            		document.querySelector('.message').textContent = 'Too high!!';
                    score--;
                    document.querySelector('.score').textContent = score;
            	}else{
            	document.querySelector('.message').textContent = 'You Lost The Game';
            	
             //reseting the score to zero when player lose the game
            	document.querySelector('.score').textContent = 0;
            	}
            	

     //when guess is too low
            }else if(guess < secretNumber){
            	if(score > 1){
            		document.querySelector('.message').textContent = 'Too low!!';
                    score--;
                    document.querySelector('.score').textContent = score;
            	}else{
            	document.querySelector('.message').textContent = 'You Lost The Game';
            	document.querySelector('.score').textContent = 0;
            	}

            }
};


//Again bubbon challenge
//specify the event 'click', then the handler function() without a name;
document.querySelector('.again').addEventListener('click',function(){
	document.querySelector('.score').textContent = 20;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('.message').textContent = 'start guessing.....';
	  document.querySelector('body').style.backgroundColor = '#222';
              
       document.querySelector('.number').style.width = '15rem';
})
