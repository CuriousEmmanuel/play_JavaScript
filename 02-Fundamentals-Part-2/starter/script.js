'use strict';


// //USING STRICT MODE
// //make sure to put 'use strict' on top of the code no other code above it
// //comments are allowed since js will automatically ignore them
//  'use strict';
// let name = true;
// const age = false;

// if (age) name = false;
// console.log(name); 

// //i think it doesnt work with my console





// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
'use strict';



// let HasDriversLicence = false;
// const PassTest = true;

// if (PassTest) HasDriversLicence = true;
// if (HasDriversLicence) console.log("welcome to driving");



//without strict the console just fails silently and we can not able to identify our error 
//conclusion always use strict mode 
//this time it worked
// it also warn when u use strict mode reserved words


//functions


// function greetings(){
//   console.log ("hello thhere?");
// }
// greetings();

// function fruitprocecor(apples,oranges){
//   console.log(apples,oranges);
//   const juice = `a juice with ${apples} aples and ${oranges} oranges`;
//   return juice;

// }
// //now let us invok the function and fill the apples and oranges blank spaces with actual values which are called the arguments

// fruitprocecor(4,7);//this will only produce the number of apples and orranges 
// //if we want the juice we need to store it in a variable

// const appleOrangeJuice = fruitprocecor(6,8);
// console.log(appleOrangeJuice);

// console.log(fruitprocecor(23,67));

// console.log("function inside a function");

// function insidefunction(){

//   function fruitprocecor(apples,oranges){
//   console.log(apples,oranges);
//   const juice = `a juice with ${apples} aples and ${oranges} oranges`;
//   return juice;

// }
// //now let us invok the function and fill the apples and oranges blank spaces with actual values which are called the arguments

// fruitprocecor(4,7);//this will only produce the number of apples and orranges 
// //if we want the juice we need to store it in a variable

// const appleOrangeJuice = fruitprocecor(6,8);
// console.log(appleOrangeJuice);

// console.log(fruitprocecor(23,67));
// }
// console.log(insidefunction());



// function declaration
// function calcAge1(birthyear){
//   const age = 2030 - birthyear;
//   console.log(age);
// }
// calcAge1(1990);



// //function expresion
// const calcAge2 = function(birthyear2){
//   const age2 = 2030 - birthyear2;
//   console.log(age2);
// }

// calcAge2(1991);

//OR

// const calcAge2 = function(birtyear2){
// console.log(2030 - birtyear2);
// }
// calcAge2(1990);

// //Arrow function

// //return happens implicitely you do not need to do it explicitely
// //it is simple one line function

// const calcAge3 = birthyear3 =>2037 - birthyear3;
// const age3 = calcAge3(1992);
// console.log(age3);

// //multiple parameters with arrow function

// const yearsUntillRetirement = (birthYear,firtName) => {
//   const age = 2037 -birthYear;
//   const retirement = 65 - age;
//   return `${firtName} retires in ${retirement} years`;
// }
// console.log(yearsUntillRetirement(1991, 'jinas'));
// console.log(yearsUntillRetirement(1980, 'bob'));


//functions calling other functions
//assuming this mchine onli work with small pieces to make juice

// function cutFruitPieces(fruits){
//   return fruits * 4;
// }

//    function fruitprocecor(apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//    const juice = `a juice with ${applePieces} pieces of aples and ${orangePieces} pieces of oranges`;
//    return juice;
//  }
//  console.log(fruitprocecor(8,10));

//  //review

//  function calcAge(birthYear){
//   const personAge = 2030 - birthYear;
//   return personAge;
//  }

//  function ageUntillRetirement(firstName){
//   const age  = calcAge(1990);
//   const retireAge = 65 - age;
//   const statement = `Mr ${firstName} retires after ${retireAge} years`;
//   return statement;

//  }
//  console.log(ageUntillRetirement('jonas'));

//challenge


// const calcAvarage = (score1,score2,score3)=>
//  {score1 + score2+score3;
// const avarage =calcAvarage(44,23,71);
// console.log(avarage);}


// function dolphinescalcAvarage(score1,score2,score3){
//   const avarage = (score1 + score2 +score3)/3
//   return avarage;
// }
// //console.log(dolphinescalcAvarage(44,23,71));

// function koalascalcAvarage(score1,score2,score3){
//   const avarage = (score1 + score2 +score3)/3
//   return avarage;
// }
// //console.log(koalascalcAvarage(65,54,49));



// function checkWinner(koalas,dolphines){
//   const avgkoalas = koalascalcAvarage(650,54,49);
//   const avgDolphines =dolphinescalcAvarage(44,23,71)
// if(avgkoalas >=  2*avgDolphines)
// {
//  console.log(`koalas wins ${avgkoalas}  vs ${avgDolphines}`)
//  }else if( avgDolphines >= 2*avgkoalas)
//  {
//     console.log(`dolphines wins ${avgDolphines} vs ${avgkoalas}`)
//  }else
//  {
//    console.log('no winner.......')
//  };

// }
// console.log(checkWinner(400,100))
// // arrow function
// const calcAvarage = (a,b,c) => (a,b,c)/3;
// console.log(calcAvarage(3,4,5));

// const scoredolphines = calcAvarage(44,23,71);
// const scoreKaolas = calcAvarage(65,54,49);
// console.log(scoredolphines,scoreKaolas);

// const checkwiner(avgDolphines,avgkoalas){
//    if (true) {
//     console.log();
//    }
// }
// checkwiner(scoredolphines,scoreKaolas);

// arrays
// const friends = ['michael','steven','peter'];
// console.log(friends);
// //or
// const year = new Array(123,3445,2345,2345,45678,7544);
// console.log(year);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// console.log(friends[friends.length  -2 ]);

// friends[2] = 'jay';
// console.log(friends);
// //even though it is friends is declared with constant it s still mutable
// //because an array is not a primitive value.


// // Arrays also store different types st the same time

// const firstname = 'jonas ;'

// const jonas =[firstname,'schedman',234-567,'teacher',friends];
// console.log(jonas);

// //calculating ages function with arrays

// const calcAge = function(birthyear){
// return 2030 - birthyear;
// }
// const years = [1990,1991,1992,1993,1994,1995,1996];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[years.length -1]);
// console.log(age1,age2,age3,age4);

// const ages =[age1,age2,age3,age4];
// console.log(ages);


//Array methods

//Add elements


// const friends = ['michael','steven','peter'];
// friends.push('jay');//adds the new item to the end of the list
// console.log(friends);
// //push function can alo return length of an array
// const newlength = friends.push();
// console.log(newlength);

// friends.unshift('john');//add  item at the bigining of an array also returns lentgh
// console.log(friends);


// //Removes Elements

// friends.pop();//removes the last elements
// //it can also return the removed element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); //remove first element
// //returns removed element
// console.log(friends);

// console.log(friends.indexOf('steven')) //1
// console.log(friends.indexOf('bob')); // -1 not available


// console.log(friends.includes('steven')) //true
// console.log(friends.includes('bob'))  //false not available;
// //it works with strict equality so it does not work with type conversion\


// //it can also be used in conditions
// if (friends.includes('steven')) {
//   console.log('you have a friend called steven');
// }


// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// }
// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]


// //Adding arrays works different e.g add tips and bills

// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
// console.log(bills,tips, totals);

//objects
//used to group togather data that belongs togather in{}
//retrieving items from an object doe not need order line in an array.
//order of properties does not matter

// const jonas = {
//   firstname: 'jonas',
//   lastname: 'schmedtmann',
//   age:2037 - 1991,
//   job: 'teacher',
//   friends: ['michael','peter','steven']
// };
// console.log(jonas);

// //dot notation
// console.log(jonas.lastname);

// //bracket notation
// console.log(jonas['lastname']);

// //computed property name

// const nameKey = 'name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// //dot notation can not do that

// const interestedIn = prompt('what do you want to know about jonas? fisrsname,lastname,age,job or friends');

// if(jonas[interestedIn]){
// console.log(jonas[interestedIn]);
// } else{
//   console.log('wrong request!!! try firstname,lastname,age,joband friends');
// }

// // only with bracket notation dot notation output undefined coz there is no index as interestedIn


// //adding elements

// jonas.location = 'portugal';

// jonas['tweeter'] = '@jonasswetsman';

// console.log(jonas)


// //challenge
// //"jonas has 3 friends, and his best friend is called michael"

// console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//object methods
//objects can also store functions

// const jonas = {
//   firstname: 'jonas',
//   lastname: 'schmedtmann',
//   birtYear:1991,
//   job: 'teacher',
//   friends: ['michael','peter','steven'],
//   hasDriversLicence: true,

//   // calcAge: function(birthYear){
//   //   return 2030 - birthYear;
//   // }


// //we can avoid repetition
  
//   calcAge: function (){
//     console.log(this);
//     return 2037 - this.birtYear;
//   },


//   // a method needs to be inside the object then cal it outside

//   getSummary: function() {
//     return `${this.firstname} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`;

//   }

// };

// console.log(jonas.calcAge());
// // console.log(jonas["calcAge"](1991));

// //challenge
// //create a method
// //"Jonas is a 46-year old teacher, and he has a drivers licence"

// //console.log(`${jonas.firstname} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${return hasDriversLicence :'a' ? 'no'} drivers licence`);

// console.log(jonas.getSummary());


//challenge

// const objMark = {
//   fullName :'mark miller',
//   mass :78,
//   height :1.69,
//   calcBmi: function(){
//     //create an object with a property name nmi that holds the bmi using this.bmi
//    this.bmi = this.mass/this.height**2;
//   return this.bmi;
// }

// };

//const objJohn ={
//   fullName : 'john smith',
//   mass : 92,
//   height: 1.95,

//     calcBmi: function(){
//     //create an object with a property name nmi that holds the bmi using this.bmi
//    this.bmi = this.mass/this.height**2;
//   return this.bmi;
// }
// };


// objMark.calcBmi();
// objJohn.calcBmi();
// console.log(objMark.bmi, objJohn.bmi);
// console.log(objJohn.bmi);

// //"john smith BMI (28.3) is higher than mark millersv(23.2)!"

// if(objMark.bmi > objJohn.bmi){
//   console.log(`${objMark.fullName}'s BMI (${objMark.bmi}) is higher than ${objJohn.fullName}'s BMI (${objJohn.bmi})`)
// } else if (objJohn.bmi > objMark) {
//   console.log(`${objJohn.fullName}'s BMI (${objJohn.bmi}) is higher than ${objMark.fullName}'s BMI (${objMark.bmi})`)
// }


//loops





//for loop keeps running while the condition is true

// for(let rep = 1; rep <= 20; rep++) {
//   console.log(`lifting weights repetition ${rep}.`);
// }

//looping thorough an array
// const jonas = [
//   'jonas',
//   'dchmedman',
//   2037 -1990,
//   ['michael','peter','steven'],
//   true
// ];
// //create empty array

// const types = [];
// // console.log(jonas[0])
// // console.log(jonas[1])
// // console.log(jonas[2])
// // console.log(jonas[3])

// // for( let i=0; i<5; i++){
// //   console.log(jonas[i]);
// // }

// //what if we add another record to the array it will require change of the limit 

//  for( let i = 0; i < jonas.length; i++){
  
//   //reading from jonas array
//   console.log(jonas[i],typeof jonas[i]);

//   //filling types array
// //  types[i] = typeof jonas[i];
//         //or
//   types.push(typeof jonas[i]);
// }

// console.log(types);


// //copy array to another array

// const years = [1990,1991,1992,1993,1994,1995];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

//continue and break statements in loops
//continue exits the loop and continues at the next point
//nreak exits the loop completely


// console.log('------ONLY STRINGS--------');
//  for( let i = 0; i < jonas.length; i++){
//   //reading only strings
//   if(typeof jonas[i] !== 'string') continue;//skips all numbers and other types and continue on strin

  
//   console.log(jonas[i],typeof jonas[i]);


// }

// console.log('-----BREAKS WITH NUMBERS--------');
//  for( let i = 0; i < jonas.length; i++){
//   //reading only strings
//   if(typeof jonas[i] === 'number') break;//breaks completely when encounters the first number
  
//   console.log(jonas[i],typeof jonas[i]);
// }







////-----------looping backwords--------///////////



//  const jonas = [
//   'jonas',
//   'dchmedman',
//   2037 -1990,
//   ['michael','peter','steven'],
//   true
// ];

//  // 4,3,2,1,0;

//  for(let i = jonas.length - 1; i >=0; i--){
//   console.log(i,jonas[i]);
//  }


// ///loop inside aloop

//  //three exercise with five repetition each

//  for (let excercise = 1; excercise < 4; excercise ++){
//   console.log(`-----starting excercise ${excercise}`);

//   for(let rep = 1; rep < 6;rep++){
//     console.log(`----excercesise repetition ---${rep}`)
//   }
//  }


//-----while loop---
//continue running as long as the condition is true and does not need a counter variable

// for(let rep = 1; rep <= 5; rep++) {
//   //console.log(`lifting weights repetition ${rep}.`);
// }

// let rep = 1;
// while (rep <=10) {
//   //console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep ++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice =Math.trunc(Math.random() *6) +1;
//   if (dice === 6) console.log('loob is about to end');

// }



// challenge


// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));




// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22,295,176,440,37,105, 10,1100, 86, 52];

// const tips =[];
// const totals =[];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tips);
//   totals.push(tips + bills[i]);
// }
 console.log('bills, tips,totals');


