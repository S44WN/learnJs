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

  order: function (starterIndex, mainIndex) {
    return [this.starterMeun[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // defining  default values for the parameters
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
// uses default values for the parameters

//destructuring objects
const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//destructuring objects with different names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
//if menu is not defined, it will be an empty array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let p = 111;
let q = 999;
const obj = { p: 23, q: 7, r: 14 }; //p and q are not the same as the variables above
({ p, q } = obj); // using parenthesis to avoid syntax error
console.log(p, q);

//nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

//-------------------------------------------------------------------------------------

//destructuring arrays
const arr = [1, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2]; //old way
console.log(a, b, c);

const [x, y, z] = arr; //new way
console.log(x, y, z);

//-------------------------------------------------------------------------------------

// spread operator

const arrr = [7, 8, 9];
const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]]; //old way
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arrr]; //new way - using spread operator
console.log(newArr); // [1, 2, 7, 8, 9]

//adding elements to an array -mainMenu using spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];

//copying arrays - using spread operator
const mainMenuCopy = [...restaurant.mainMenu];

//joining arrays from restaurant object - starterMenu and mainMenu
const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];

//iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // [ 'J', 'o', 'n', 'a', 's', ' ', 'S.' ]
console.log(...str); // J o n a s
//console.log(`${...str} Schmedtmann`); - SyntaxError: Unexpected token '...'

//real world example
const ingredients = [
  //prompt user to enter ingredients
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients); //

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //old way

// Here is your delicious pasta with 1, 2 and 3 as entered in the prompt
restaurant.orderPasta(...ingredients); //new way - using spread operator

//objects
//new object with properties from restaurant object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//copying objects
const restaurantCopy = { ...restaurant }; //copying restaurant object
restaurantCopy.name = 'Ristorante Roma'; //changing name of the restaurant

//-------------------------------------------------------------------------------------
