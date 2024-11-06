'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*



          // Array methods //
// methods are functions attached to objects

let arr =['a', 'b', 'c', 'd', 'e'];

    //slice method
console.log(arr.slice(2));//c, d, e
console.log(arr.slice(2, 4));//c, d
console.log(arr.slice(-2));//d, e
//to get the last element of any aray
console.log(arr.slice(-1));
console.log(arr.slice());//can be use to creat a shallow copy of an array
//or you can use the spread operator to create a shallow copy
console.log([...arr]);
// slice is best when chaining/using with other methods

//splice
//it mutates the original array

//console.log(arr.splice(2));  //c d e // it returns the same as slice
console.log(arr);//the original array is changed spliced items removed from the list

//to delete the last element
console.log(arr.splice(-1));

// visit MDN.org to check more methods

    // REVERSE //
//mutates the original array
arr = ['a','b','c','d','e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//concat
//does not mutate the original array
const latters = arr.concat(arr2);
console.log(latters);
//or you can use soread operator
console.log([...arr, ...arr2]);

//  JOIN

console.log(latters.join('-')); //join latters using (-); a-b-c-d-e-f-g-h-i-j




const arr =[23, 22, 56];
console.log(arr[0]);//returns first element
console.log(arr.at(0)); //also returns last element

//geting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//the at method also works with stings

console.log('jonas'.at(0)); //j
console.log('jonas'.at(-1)); //s


*/


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of 

//for (const movement of movements){
  for (const [index, movement] of movements.entries()){ 
  if (movement > 0) {
    console.log(`movement ${index + 1}: you have deposited ${movement}`);
  }else {
    console.log(`movement ${index + 1}: you withdrew ${Math.abs(movement)}`); //use absolute math method to remove negative
  }
}
//in for of the first value is index followed by content

console.log("-------forEach------------");
movements.forEach(function(mov, i, arr){
  if(mov > 0) {
    console.log(`movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1}: you withdrew ${mov}`);
  }
});
//in forEach the first value is the current element followed by index then array 
//order matters

//continue and break do not work in for each loop




