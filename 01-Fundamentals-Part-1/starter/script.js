//  let js = "cool";
//      // if(js === "cool") alert("cool");
      
//    //alert('welcome to javascript');
//       20+56+98+-8 //this calculation results will not apear on the web and neither on the console
//       console.log(20+56+98+-8); //but if we link our script and console the result will now show up in the console 


//       /*variables

//       do not use uppers case its  for constants
//       do not start with uppercase
//       use camelformat ie firstName(first lowercase and second start with upper case value)
//       do not use reserved word*/

//       let firstName = "john";
//       console.log(firstName);

//       console.log(typeof firstName);

//       let jsa = true;
//       console.log(typeof jsa);

//       //changing the value of a variabl
//       jsa = "good";
//       console.log( jsa);
//       console.log(typeof jsa);
// //undefined valuess
//  let people;
//  console.log(people);//undefined value
//  console.log(typeof people) //undefined type

//  console.log(typeof null);//object which is a bug

 //challenge 1

 // let johnHeight = 20;
 // let JohnWheight = 70;
 // let bmi = JohnWheight / johnHeight **2;
 // console.log(bmi);

 //  let peterHeight = 20;
 // let peterWheight = 100;
 // let bmi1 = peterWheight / (peterHeight * peterHeight);
 // console.log(bmi1);

 // console.log(peterHeight > johnHeight);
 // console.log(bmi<bmi1);

 //strimgs


// the `` sign found on top of tab key its called backticks
//backtics can also be used on regular string and its easier when using apostrophies too

// to use multiple line strings make sure u use backticks


// let line =`dfgyt4345tr
// ertyhytrty
// ertyhgfdfgh
// ertyhgfdfgh
// yhgfghn
// fgnhgfertyt4thtrghn`;

// console.log(line);

// let line1 ="dfghgfewfgbgffgbg \n\
// fghnbvcvbnbvbbvbb\n\
// fgytredfghgf";  //untill when;
// console.log(line1);

//if else


// let age = 14;
// let ofAge = age >= 18;
// if (ofAge){

// console.log(`you can`);
// }else{
//    let yearsLeft = 18 - age;
//    console.log(`wait for ${yearsLeft} years`);
// }

// let birthYear = 18990;
// let century; //declared firsd

// if (birthYear <= 2000) {
//    century = 20;//initializsd
// }else{
//    century =21
// }
// console.log(century);
// variables declared inside the block can not be accessed outside

//challenge 2

 // let johnHeight = 20;
 // let JohnWheight = 70;
 // let johnBmi = JohnWheight / johnHeight **2;


 //  let peterHeight = 20;
 // let peterWheight = 100;
 // let peterBmi = peterWheight / (peterHeight * peterHeight);

 // if (johnBmi>peterBmi) {
 //   console.log(`john has high BMI ${johnBmi}`)
 // }else{
 //   console.log(`peter has high bmi ${peterBmi}`)
 // }


//type conversion and coercion

 // let byear = "1990";
 // console.log(byear + 18);//string concanteneted to a number
 // console.log(Number(byear) + 18);

 // let sex = "male";
 // console.log(Number(sex) + 1);//NaN nit a number //cant converts trings to a number

 // //coercion

 // console.log('I am' + 22+ 'years');//int converted to string utomatically
 // //addintion sign converts numbers to string while subtraction converts strings to numbers 
 //  console.log('45' - '7' - 10);

 //  //devision and multiplcation too converts strings to numbers


//falsy values
//values that will be convertet to false if changed to boolean
//eg 


 let dolphinesScors = (96 + 96 + 96)/3;
 let koalasScore = (96 + 96 + 96)/3; 

console.log(dolphinesScors);
console.log(koalasScore);

if (dolphinesScors > koalasScore) {
	console.log('dolphines are wiiners')
}
else if(koalasScore>dolphinesScors){
	console.log('kaolas are winners')
}
else if{
	console.log('DROW')
}


