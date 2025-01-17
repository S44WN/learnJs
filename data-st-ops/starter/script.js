'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //openingHours : openingHours //old way

//   //new way - ES6 enhanced object literal
//   openingHours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMeun[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     // defining  default values for the parameters
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     //rest pattern - collects all the remaining elements into an array like otherIngredients will be an array
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// //for of loop
// for (const item of menu) console.log(item);

// for (const [index, item] of menu.entries()) {
//   console.log(`${index}: ${item}`);
// }

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// }); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// }); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
// // uses default values for the parameters

// //destructuring objects
// const [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //destructuring objects with different names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// //if menu is not defined, it will be an empty array
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let p = 111;
// let q = 999;
// const obj = { p: 23, q: 7, r: 14 }; //p and q are not the same as the variables above
// ({ p, q } = obj); // using parenthesis to avoid syntax error
// console.log(p, q);

// //nested objects
// const {
//   fri: { open: op, close: cl },
// } = openingHours;
// console.log(op, cl);

// //-------------------------------------------------------------------------------------

// //destructuring arrays
// const arr = [1, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2]; //old way
// console.log(a, b, c);

// const [x, y, z] = arr; //new way
// console.log(x, y, z);

// //-------------------------------------------------------------------------------------

// // spread operator

// const arrr = [7, 8, 9];
// const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]]; //old way
// console.log(badNewArr); // [1, 2, 7, 8, 9]

// const newArr = [1, 2, ...arrr]; //new way - using spread operator
// console.log(newArr); // [1, 2, 7, 8, 9]

// //adding elements to an array -mainMenu using spread operator
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// //copying arrays - using spread operator
// const mainMenuCopy = [...restaurant.mainMenu];

// //joining arrays from restaurant object - starterMenu and mainMenu
// const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // [ 'J', 'o', 'n', 'a', 's', ' ', 'S.' ]
// console.log(...str); // J o n a s
// //console.log(`${...str} Schmedtmann`); - SyntaxError: Unexpected token '...'

// //real world example
// const ingredients = [
//   //prompt user to enter ingredients
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //old way

// // Here is your delicious pasta with 1, 2 and 3 as entered in the prompt
// restaurant.orderPasta(...ingredients); //new way - using spread operator

// //objects
// //new object with properties from restaurant object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// //copying objects
// const restaurantCopy = { ...restaurant }; //copying restaurant object
// restaurantCopy.name = 'Ristorante Roma'; //changing name of the restaurant

// //-------------------------------------------------------------------------------------

// //rest pattern and parameters
// // SPREAD because on the RIGHT side of =
// const arr3 = [1, 2, ...[3, 4]];

// // REST because on the LEFT side of =
// const [r, s, ...others] = [1, 2, 3, 4, 5]; //rest pattern - collects all the remaining elements into an array
// console.log(r, s, others); // 1 2 [ 3, 4, 5 ]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// //object
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// // functions
// const add = function (...numbers) {
//   //rest pattern - collects all the remaining elements into an array
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// //rest parameter - collects all the remaining elements into an array
// add(8, 2, 5, 3, 2, 1, 4);
// add(2, 3); // 5
// add(5, 3, 7, 2); // 17

// const val = [23, 5, 7];
// add(...val); //spread operator - used to expand an array into its elements

// // mushrooms is not an array, it is a single value
// // onion, olives, spinach - rest pattern
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// //-------------------------------------------------------------------------------------

// //short circuiting (&& and ||)

// console.log('----- OR -----');

// //use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null);
// // null - because null is falsy value and undefined is a falsy value as well and null is the last falsy value

// //if the first value is a truthy value, it will be returned
// //if the first value is a falsy value, it will return the second value
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// //restaurant.numGuests = 0; // 0 is a falsy value so it will return the second value - MAJOR BUG
// // ternary operator - if restaurant.numGuests is truthy, it will be returned, otherwise 10 will be returned
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 10

// const guests2 = restaurant.numGuests || 10; //short circuiting same thing as above
// console.log(guests2); // 10

// console.log('----- AND -----');
// console.log(0 && 'Jonas'); // 0 - falsy value Short-circuis and returns the first falsy value
// console.log(7 && 'Jonas'); // Jonas

// console.log('Hello' && 23 && null && 'jonas'); // null - short-circuits and returns the first falsy value

// //practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// //restaurant.orderBurger // undefined - because orderBurger method does not exist in the restaurant object
// restaurant.orderBurger && restaurant.orderBurger('cheese', 'tomato'); // undefined

// // restaurant.orderPizza is a truthy value, so it will move to the next expression i.e restaurant.orderPizza('mushrooms', 'spinach')
// // if restaurant.orderPizza is truthy, second part will be executed
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // FIXES THE BUG ABOVE - when restaurant.numGuests is 0

// //nullish coalescing operator (??)
// //nullish values: null and undefined (NOT 0 or '')
// restaurant.numGuests = 0;
// // if restaurant.numGuests is null or undefined, it will return 10
// const guests = restaurant.numGuests ?? 10;
// console.log(guests); // 0

//-------------------------------------------------------------------------------------
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw);

// //6
// function printGoals(...playerNames) {
//   console.log(playerNames);
//   console.log(`${playerNames.length} goals were scored.`); // when gets scoring player as input
// }
// printGoals(...game.scored);
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// //7
// // when team1> team 2 is true
// const winner = team1 > team2 && 'team 1 will win';
// console.log(winner);

///////////////////////////////////////
// The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

///////////////////////////////////////////////////////////////////////////////
