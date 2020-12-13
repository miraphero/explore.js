var bananaPrice = 12;
console.log(bananaPrice);
var seenAfter = 21;
console.log(typeof seenAfter);
var name = "liza";
console.log(typeof name);
var isHot = true;
var isRich = false;
console.log(typeof isHot);
console.log(typeof isRich);

// HOME TASK = 2TA,2TA KORE 6TA Number,String,Boolean VAR declare koro

var courseModule = 60;
var iAmIn =12;
console.log(courseModule,iAmIn);
console.log(typeof courseModule,iAmIn);


// string
var motherName = "Parul Rahman";
var fatherName = 'Mozibur Rahman';
console.log(motherName,fatherName);


// boolean
var areSingle = true;
var areMingle = false;
console.log(areMingle);

// var names are case sensitive  .....Camelcase.
// declaring names should be Meaningfull.
var name= `rock`;
var promise = "I promise I will work Hard to Become a Programmar";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf("mill"));

// khuje na pele/na mille value dekhabe:-1

// split
console.log(promise.split(' '));
var countryName = 'Bangladesh';
console.log(countryName.indexOf('dosh'));


// intezer || float(fraction)
// 23  ||  23.12

var Number1 = 25;
var Number2 = 15.5;
Number2 = parseInt(Number2);
console.log(Number1 + Number2);

// number2 = +number2;
// simple way to converting string to number
var Number1 = 25;
var Number2 = 15.5;
Number2 = +Number2;
console.log(Number1 + Number2);

// number to string
// by adding an empty string ''
var Number1 = 25;
var Number2 = 15.5;
Number1 = '' + Number1;
console.log(typeof Number1);


// .toFixed
var Number1 = 0.1;
var Number2 = 0.2;
var total = Number1 + Number2;
total = total.toFixed(5)
console.log(total);


// + , -, * , / , %
var price1 = 25;
var price2 = 35;
var total =price2 % price1;
console.log(total);


// price2++     [increase value 1]
var price1 = 25;
var price2 = 35;
price2++ ;
var total =price2 + price1;
console.log(total);


var price1 = 25;
var price2 = 35;
price2 = price2 + 1;
console.log(price2);

// price2--  : [decrease value 1]

// FarhanaNaznin
var price1 = 'Farhana';
var price2 = 'Naznin';
total = price1 + price2;
console.log(total);

// Farhana Naznin     [' ' ,  " " ]
var price1 = 'Farhana';
var price2 = 'Naznin';
total = price1+  " " + price2;
console.log(total);

// for getting job ,3 factor works
// 1.skill-knowledge
// 2.skill presentation throuth PERFORMANCE, their given task,interview
// 3.Luck factor

// .absolute (Math.abs)   [converts to Positive,- to +, + to +]
var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

// .round  (Math.round)
var number = 5.49; 
var result = Math.round(number);
console.log(result);

// .ceil  (Math.ceil) [round figure but upper scale e]{just like the mean shopkeeper}
var number = 5.01; 
var result = Math.ceil(number);
console.log(result);

// .floor (Math.floor) [round figure but lower scale e]{exact opposite to ceil}
var number = 5.99999; 
var result = Math.floor(number);
console.log(result);

// .random (Math.random)  [any random figure,but random]
var number = 5.99999; 
var result = Math.random(number);
console.log(result);

// pick a round random number
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);
