# JAVASCRIPT FUNDAMENTALS 1

```javascript
console.log("Hello World");
console.log(20 * 20);

// We can log multiple values as well
console.log("Hi", "there", 21); // Prints: "Hi there 21"

// You can also do calculations in log
// ** is the exponential operator
console.log(20 * 20, 2 ** 4); // Prints: 400 16

// Using the typeof operator
console.log(typeof true); // Prints: boolean
let isAlarming = true;
console.log(typeof isAlarming); // Prints: boolean
console.log(typeof "isAlarming"); // Prints: string
console.log(typeof 12345); // Prints: number

// The same variable can be assigned to a different type
isAlarming = "YES!!";
console.log(typeof isAlarming); // Prints: string
console.log(isAlarming); //Prints: "YES!!"

// When a variable is first declared in JS, it is 'undefined' and it's type is also 'undefined'.
// So basically 'undefined' is BOTH the value as well as the type of the value!!
let year;
console.log(typeof year); //Prints: "undefined"
console.log(year); //Prints: "undefined"

// Note the following though. 'null' is again both a type as well as a value, just like 'undefined'
// So typeof undefined returns undefined, but typeof null returns object.
// So the following makes no sense. This is normally considered as a bug in JS (?)
console.log(typeof undefined); // Prints: "undefined"
console.log(typeof null); // Prints: "object"

// *********************************************************************************************************************
// Lecture 13: let, const and var
// *********************************************************************************************************************

// There are 3 different ways of defining variables in JS - let, const, var
// We will be coming back to these later in the course

// let can be used when you want to 'mutate' a variable, i.e. assign it a value only to reassign it later
let firstName = "Jane";
firstName = "Jack";

// const is used when the value assigned to that variable cannot be reassigned - immutable
const yearOfBirth = 2020;
// yearOfBirth = 2021; // Error: Attempt to assign to const or readonly variable

// For the same reason, creating a const variable without assigning a value to it is invalid.
// const yearOfDeath; // const variable without initializer is not allowed

// We don't even need to define variables at all, we can directly write the name of the variable and be done with it.
// But this is a very bad idea, because in that case JS will create a property on the global object (?)
middleName = "Vesuvius";

// *********************************************************************************************************************
// Lecture 15: Operator Precedence
// *********************************************************************************************************************

// Consider the following. The '-' operator has a higher precedence than the '=' operator. Hence it is evaluated first.
// '-' is a left-to-right execution.
// On the other hand, '=' has a right-to-left execution. Hence y is assigned a value of 10, and then x is assigned the value
// of y, which in this case is 10. Had the assignment operator had left-to-right execution, x would have been first assigned
// the value of y, which would have been 'undefined', and then y would have been assigned a value of 10.
// Which is not what we would have expected.
let x = (y = 25 - 10 - 5);

// *********************************************************************************************************************
// Lecture 17: String and Template Literals
// *********************************************************************************************************************

let currYear = 2020;
let introYear = 1995;

let message1 = "Javascript is " + (currYear - introYear) + " years old!";
console.log(message1);

// Alternatively you could use Template Literals. Note how currYear and introYear are being used
let message2 = `Javascript is ${
  currYear - introYear
} years old! The current year is ${currYear}.`;
console.log(message2);

// You can also use template strings to write multi-line strings
console.log(`This is a
    multiline string 
    in JavaScript`);

// *********************************************************************************************************************
// Lecture 20: Type Conversion and Type Coercion
// *********************************************************************************************************************

// Type Conversion

// This won't work obviously
let currentYear = "2020";
console.log("In 10 years, it will be " + currentYear + 10); // Prints: In 10 years, it will be 202010
console.log(currentYear + 10); // Prints: 202010

// Hence we have to do this instead
console.log("In 10 years, it will be " + Number(currentYear) + 10); // Prints: In 10 years, it will be 202010
console.log(Number(currentYear) + 10); // Prints:2030

// What if we try to convert something to number that is not really a number
console.log(Number("RGBK21")); // Prints: NaN

// The 'NaN' is generated. JS gives us a NaN value when an operation involving numbers fails to generate a value that is a Number
// Strangely enough, the typeof NaN is a Number
console.log(typeof NaN); // Prints: number

// Similarly, we can convert Numbers to String
console.log(String(23), 23); // You can see that the two values are different because they will be differently colored in the console

// Type Coercion

// Type Coercion happens when an operator is dealing with two values that have different types. In this case, JS will - behind the scenes -
// convert one value to another type.

// For eg. when the '+' operator is given a number and a string, it will convert the number to string
console.log("In 10 years, it will be " + currentYear + 10); // Prints: In 10 years, it will be 202010
console.log("23" - "10" - 3); // Prints: 10. Because in '-' operator case, JS converts the Strings to numbers
console.log("23" + "10" + 3); // Prints: 23103. Like we discussed, '+' converts numbers to string. Hence, concatenation happens
console.log("23" * "2"); // Prints: 46. '*' operator also converts Strings to Numbers
console.log("46" / "2"); // Prints: 23. '/' operator also converts Strings to Numbers
console.log("46" > "2"); // Prints: true. '>' operator also converts Strings to Numbers

// So the anomaly is the '+' operator that converts numbers to strings. All others, convert String to numbers.
console.log("23" + "10" - 3); // Prints: 2307. Like we discussed, '+' converts numbers to string. Hence, concatenation happens
console.log("23" - "10" + 3); // Prints: 16.
console.log("23" - "10" + "3"); // Prints: 133.
console.log(2 + 3 + 4 + "5"); // Prints: 95

// Confused? lol.

// *********************************************************************************************************************
// Lecture 21: Truthy and Falsy Values
// *********************************************************************************************************************

// In JS, we have 5 'falsy' values:
// 0, '' (the empty string), undefined, null, NaN
// What this means is that any value that is not one of the above values is going to be converted into 'true' if we convert it
// into a Boolean type variable. Only the above 5 values will be converted to false on conversion to boolean values

console.log(Boolean(0)); // Prints: false
console.log(Boolean(undefined)); // Prints: false
console.log(Boolean("TEST")); // Prints: true
console.log(Boolean({})); // Input is an empty object. Prints: true

// The way that we use the truthiness of a variable is by using if-else statements.
// So for instance, I can write this:
let salary = 0;
if (salary) {
  console.log("Do not spend it on Pizza only");
} else {
  console.log("What will you do now?"); // This block is triggered because '0' is a falsy type value
}

// Another way to use this is if the variable is defined or null
let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined"); // This block is triggered. But note that this block will also be triggered if height is 0.
}

// *********************************************************************************************************************
// Lecture 22: Equality operators
// *********************************************************************************************************************

// '===' is known as the strict equality operator. This operator does not perform type coercion
// '==' is known as loose equality operator. It does do type coercion.
console.log(18 === "18"); // Prints: false
console.log(18 == "18"); // Prints: true

// Similarly you have the !== and the != operators. These are again the strict and the loose variants of not equal resp.
// Always use the strict version

// *********************************************************************************************************************
// Lecture 26: switch statement
// *********************************************************************************************************************

let day = "tuesday";

switch (day) {
  // Note that the braces are not required here.
  case "monday": {
    console.log("Mondays, amirite?");
    console.log("Where is the coffee");
    break;
  }

  case "tuesday": {
  }

  case "wednesday": {
    // This code will be executed for both tuesday and wednesday
    console.log("More coffee");
    break;
  }

  default:
    console.log("Not a valid date");
}

// *********************************************************************************************************************
// Lecture 27: Statement and Expressions
// *********************************************************************************************************************

// A statement is something that produces a value
// 4 + 5 is an expression
// false is and expression
// A number like 1998 on it's own is an expression
// On the other hand..this if-else block is a statement. That is why it is called an if-else statement. It does not produce a value.
if (23 > 10) {
  console.log("23 is bigger");
} else {
}

// The reason this is important is that Template Strings can only have expressions, not statements
// What this means is that: within the ${}, there should be something that produces a value, so an expression, and not a statement
console.log(`Today is ${day}`);

// *********************************************************************************************************************
// Lecture 28: Ternary Operator
// *********************************************************************************************************************

// Since this is an operator and operators always produce values, we can use a variable to store that value
let age = 19;
let drink = age > 18 ? "wine" : "water";
console.log(drink);

// For the same reason as stated above, we can use the ternary operator inside a template literal
console.log(`I like to drink ${age > 18 ? "wine" : "water"}`);
```
