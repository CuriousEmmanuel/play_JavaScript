'use strict';

//do not change the parameters of a function 
//do not use two functions to manipulate one object
//javaScript does not have passing by reference it only use passing by value


// function accepting call back function
/*

const high5 = function(){
	console.log('hi');
};

document.body.addEventListener('click', high5);//once the body is clicked high5 fuction will be called

['martha','jonas','adam'].forEach(high5);
*/

//function return a new function


/*
const greet = function(greeting) {
	return function (name) {//greeterHey function
		console.log(`${greeting} ${name}`)
	};
};

const greeterHey = greet('Hey'); //now greeterHey is the function that returns the name
greeterHey('jonas');
greeterHey('steven');

//or you can call it in one go

greet('Hello') ('fdssfg'); //it worked

//arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('mary');

/
///setting up this keyword 


const lufthansa = {
	airline: 'lufthansa',
	iataCode: 'LH',
	bookings: [],
	//book: function() {} //this is the old way
     //new way
	book(flightNum, name){
		console.log( `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
//add loged items(booking details) to bookings array
		this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
	},
};

lufthansa.book(234, 'jonas schmedtman');
lufthansa.book(876, 'johny');
console.log(lufthansa);

//what if they have another  airline?
// since we need the book function that is up there and copying it is a bad idea coz we wwill be creating duplicates
//we will put it in a function so that it can be reusable
//let us use highb order function to call another function

/*

const euroWings ={
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};

const book = lufthansa.book; //we are assignimg the above function (lufthansa.book) to an0other function called book

////////////does not work

//book(23, 'sarah smith');   //error

//book() is no longer a method is just a regular function so the undefined comes because the this keyword points to nothing
//to solve it we need to tell js explicitly/manually what the this keyword will look like and make it poin to eurowings flight

//functions are objects and objects can have methods so lets use call method

/////////////////////////////call method   /////////////////////////


book.call(euroWings, 23, 'sarah smith');
console.log(euroWings);

book.call(lufthansa, 123, 'mary cooper');
console.log(lufthansa);


//Now we can go on and creat more airlines under the lufthansa group and use the same metghod over and over 

//let us ty for swissair line

const swiss = {
	airline: 'swiss airline',
	iataCode: 'SAL',
	bookings: [],//this is to inserted after booking 
};

book.call(swiss,234, 'mary cooper');
console.log(swiss)

///////////////////////////// apply method   /////////////////////////no loner in use

// aply method does not receive a list of arguments instead it takes an array
//then take the elements from anrray and pass it into the function

const flightData = [345, 'Ann deeel'];
book.apply(swiss, flightData);
console.log(swiss);


//with modern js there is a better way /////by using spread operator
book.call(swiss, ...flightData);


/////////////////////////////// Bind method //////////
// just like call method the bind method also enable us to maually set the this keyword for any function call

//it make it easier if we need to bok the flight multiple times
//instead of using cal all the time we can just use bind once

const bookEW = book.bind(euroWings); //we create new function which does not require to redirect this keyword
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steven well');// now is much simple

//part application ==> means that part of argument is already applied
//it help set some argument to stone /permanent

const bookEW23 = book.bind(euroWings, 23);//23 is already set so when book no need to write
//the job for bookEW()function is to set 23 

bookEW('jonas smedtman ');// this will book jonas to flight EW23;
bookEW('mary cooper'); // mary too will board flight ew23

// With Event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function (){
	console.log(this); //this keyword is dynamic and by default it will return the class ofbuy new plane from html document

	this.planes++;
	console.log(this.planes);//we need to define this keyword to point to lufthansa object(and we can use bind)
};

//lufthansa.buyPlane();//adding this now will enable this keyword to point at the lufthansa object



document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));//use bind method to point this to lufthansa


//partial applicatio
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//bind that function to reuse it

const addVAT = addTax.bind(null, 0.23);//this is creating a more specific functio from a general function(addTax)
// addVAT = value => value + value *0.23;

console.log(addVAT(100));

//writing function returning a function

const addTax2 = function(rate){
	return function (value){
     return value + value * rate;
	};
};

const addVAT2 = addTax2(0.23);
console.log(addVAT(100));

*/

// const poll = {
// 	question: 'What is your favorite programming language?',
// 	options: ['0: Javascript', '1: python', '2: Rust', '3: C++'],
// 	answers: new Array(4).file(0),

// 	registerNewAnswer(){
// 		//get answer
// 		const answer = Number(
// 			prompt(`${this.question}\n ${this.options.join('\n')} \n(Write option number)`)

// 			);
// 		console.log(answer);
  	
// 	},
		
// };
// poll.registerNewAnswer();


////////////// Immediately invoked function Expression(IIFE)////////////

// these are functions that are only called once and never called/used again
//and sometimes we need those functions

const runOnce = function (){
	console.log('this will only run once');
};//this can be called again and we do not want that we need something that can only be invoked once

runOnce();
//wrap a plain function on (brackets) to avoid an error and call it with (brackets again)

//IIFE
(function () {
	console.log('This will never run again');
})/*calling it*/();

///arrow function
	(() => console.log('This arrow will never run again'))();

	//there is no need to create a functon to create a new scope just use{ }
	{
		//this is a private scope
		//anyrthing declared here is private except from var 
	};
//DO NOT USE VAR


	////// clousers /////


let f;

const g = function () {
	const a = 23;
	f = function(){ //re assign f to a functio
		console.log (a * 2);
	};
};

const h = function (){
	const b = 77;
	f = function() { //re-assigning f again
		console.log(b * 2);
	};
};
g();
f();//it was abe to cross over

//second re-assignment

h();
f();//this becomes a different function than the other one and does a separate job
console.dir(f); //check the closure from the console
// f now does not have the value of a now it has the value of b 


//f function was born in g and then reborn again at h


//////////////////// my solution ////////////////
(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';
}) ();

const change =function () {
	const header = document.querySelector('h1');
	header.style.color = 'blue';
};

document.querySelector('body').addEventListener('click', change);

///////// solution //////////

(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';

	document.querySelector('body').addEventListener('click', function () {
		header.style.color = 'blue';
	});
}) ();







