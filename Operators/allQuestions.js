// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

// assignment operators : =, +=, -=, *=, /=, %=, **=

let a = 10;

console.log(a);

a += 10;

console.log(a);

a -= 10;

console.log(a);

a *= 10;

console.log(a);

a /= 10;

console.log(a);

a %= 10;

console.log(a);

a **= 10;

console.log(a);


// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.
function compareNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    if (num1 === num2) {
        console.log("The numbers are equal.");
    } else if (num1 > num2) {
        console.log("The first number is greater than the second number.");
    } else {
        console.log("The first number is lesser than the second number.");
    }
}

compareNumbers();



// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

// logical operators : &&, ||, !

const firstNumber = 10;

const secondNumber = 20;

if (firstNumber > 0 && secondNumber > 0) {

    console.log("Both numbers are positive");

} else if (firstNumber > 0 || secondNumber > 0) {

    console.log("Atleast one number is positive");

} else {
    
        console.log("Both numbers are negative");
    
}


// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// bitwise operators : &, |, ^, ~, <<, >>, >>>

let b = 10;

let c = 20;

console.log(b & c);

console.log(b | c);

console.log(b ^ c);

console.log(~b);

console.log(b << 2);

console.log(b >> 2);

console.log(b >>> 2);


// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let d = 10;

let e = 20;

console.log(d > e ? d : e);


// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

// type operators : typeof, instanceof

console.log(typeof 10);

console.log(typeof "Sri");

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof [1, 2, 3]);

console.log(typeof { name: "Sri" });

console.log(typeof function () { });

console.log(typeof new Date());

console.log(typeof new Error());


// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

// string operators : +, +=

let f = "Sri";

let g = "Karan";

console.log(f + g);

console.log(f += g);


// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// same as Problem 7


// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

const person = {
    name: "Sri",
    age: 19,
    city: "Hyderabad"
}

console.log("name" in person);

console.log("age" in person);

console.log("city" in person);

