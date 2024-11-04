'use strict';
// function calcAge(birthYear){ // the function is in global scope 
	
// 	const age = 2030 - birthYear;

// 	function printAge(){
// 		const output = ``
// 	}
//   console.log(firstName);//js will do variable lookup and finds the name then sidplay
//   return age;
// }

// const firtsName = 'jonas';//global scope
// calcAge(1990);
// //js csn only do a variable lookup in global scope or parent scope

// //const and let variables are block scoped they are only visible to the block they are creater

// //variables declared with var are function scoped so they ignore the block scope and can be accessed outside the scope (if(){scope})

// //functions too are blocked scope they are only excecuted inside a block it was defined (in strict mode only)


// //    hoisting

// // referes to using a variable pr a function before declaring it
// var = me = 'jonas'//result to undefined
// let job ='teacher'//error 
// const yr =20//also error declare before initialize


// // only function declaration  can be called before declaration all other functions (expression and arrow)will result to an error
// const yr = function(){
// 	//results to an error because it is declered with const so it is stored in a variable
	
// }



//------------this keyword--------------

//this keyword/variable is a special var that is created for every execution context (every function)
//Takes the value of(points to) the owner of the function in which the this keyword is used

// this is not static. it depents on how the functin is called and its value is only assigned when the function is actualy called
//we use it in object that is calling the method
//////example
// const jonas ={
// 	name: 'jonas';
// 	birthYear:1980;
// 	calcAge:function() {
// 		return 2017 - this.birthYear  //this.birthYear is used as jonas.birthYear which works the same
// 	}
// };
// jonas.calcAge()//


//Methods ==> this is object that is calling the method
//Arrow functions ===> do not get their own this keyword instead it is this of sorrounding function(lexical this)
//in simple functions====> this will be undefined
//In event listener===> this is the DOM element that the handler is attached to

//NOTE
//this does not point to the function itself and also NOT the irs variable environment

// //action

// console.log(this); //this in global scope is simply the window object

// //in regular function

// const calcAge = function(birthYear){
// 	console.log(2030 - birthYear);
// 	 console.log(this); //this will be undefined in strict mode and in slopy mode it will be the window object
// };
// calcAge(1990);

// const calcAgeArrow = birthYear =>{
// 	console.log(2030 - birthYear);
// 	 console.log(this); //this will return the window object
// 	 //is because arrow function dows not get its own this key word so iit uses the lexical this keyword which means it uses the this keyword of its parrent function or its parent scope 
// };
// calcAge(1990);


// const jonas = {
// 	name: 'jonas',
// 	birthYear:1980,
// 	calcAge:function() {
// 	console.log(this);
// 	console.log(2030 - this.birthYear);
// 	},
// };
// jonas.calcAge()//this will call the method coz jonas is the owner of the method now we can use this to reference the object without retyping the object name
// //jonas is the object calling the method calcAge

// const matilda = {
// 	birthYear: 2017,
// };

// matilda.calcAge = jonas.calcAge; //function borrowing
// matilda.calcAge();
// // the this keyword will point to the object which call the method which is matilda


//NB
// ??avoid using var because it creates window objects

//this key word does not have its values it gets them from its sarrounding and if it does not find the value it returns undefined not an eror
//take away

// Never use an arrow function as a method 



// //----------Argument keywords-------------

// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(2,5);
// //this will print an array of list of arguments
// //it is very useful when we want to use more arguments than ones specified
// addExpr(2,5,8,9,4,3)//this will apear in the argument list ans an array so we can loop through them and use each value not only the ones specified in the parameters


// var addArrow = (a,b) =>{
// 	//when we have more than one line of code we must explicitly return
// 	console.log(arguments);
// 	return a + b;
// };
// //arrow function does not get this key word arguments.
// addArrow(2,4);//error argument not defined

// //only available in regular functions







// //--------------//------------------//----------
// //primitives are like numbers,strings,booliens etc
// let age = 30;
// let oldAge = age; //preserving the earlier age.
// age = 31
// console.loge(oldAge);//30
// console..log(age);//31

// const me = {
// 	name: 'jonas',
// 	age: 30,
// };
// //lets say i have a friend with the same properties 
// //we copy the object
// const friend = me;
// friend.age = 27; //chane friends age to 27.
// console.log('friend:',friend);
// console.log('me': me); //starnge it changes for everyone
// //different identifiers me and friend points to the same memory adress in heap
// //so the object is the same for both

// //when you think you are copying the object you are realy creating a variable that points to the same object



///copying objects

const jessica = {
	firstName:'Jessica',
	lastName:'williams',
	age: 27,
};

//use object.assign()function
const jessicaCopy = object.assign({},jessica);
jessicaCopy.lastName ='Davis';
console.log('before marriage:',jessica);
console.log('after marriage:', jessicaCopy);

//now this is the real copy of the first object because the new object was created on the heap and jessicaCopy refference to it
// however it only make a shallow copy which means it wont work in objects inside an object
