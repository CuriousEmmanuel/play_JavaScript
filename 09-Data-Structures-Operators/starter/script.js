 'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  ///destructuring with function
  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// setting default values in case of undefined / unavailable data
const { menu = [], starterMenu: starters = []} = restaurant;
menu is not available 
console.log(menu,starters);//without [] it will result to undefined

//spread operator

//in case you want to aadd eements on the begining of an array 
const arr = [7,6,4];
const badWayArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badWayArr);


//using spread operator (...);
const newArr = [1, 2, ...arr];
console.log(newArr);

// //destructuring an array(getting elements from an array)

// const arr =[2, 4, 5];

// //method one
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //console.log(a,b,c);

// //method two
// //more simpler
// const [x, y, z] = arr;
// console.log(x, y, z);

// //with destructuring we need not take all the elements from the array only what we neeed
// //if for some reasons we need to skip the middle element and go to the next one we only nee to leave a hole while destructuring
// //eg
// // const [first, , third] = restaurant.categories;
// // console.log(first,third);

// let [main, , secondary] = restaurant.categories;
// console.log(main,secondary);

// // //if we want to switch the items without destructuring

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main,secondary);//interchanged succesifully secondary first then main


// //switching variables using destructure

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //default values
// //incase there is no next walue to avoide undefined
// const[p, q, r] = [8,9];
// console.log(p, q, r);//8, 9, undefined

// const[p=1, q=1, r=1] = [8,9];//seting 1 as default value.
// console.log(p, q, r);//8, 9, 1
// //very useful especially when we get data from an API






// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();
// split method creats an array from the splited string_decoder
//now you can get the values (splited string) out of the array and use them

for (const flight of flights.split('+')) {
  // using destructuring
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}










