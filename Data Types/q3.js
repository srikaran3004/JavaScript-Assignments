let num1 = prompt("Enter the first number:");
num1 = parseFloat(num1);

let num2 = prompt("Enter the second number:");
num2 = parseFloat(num2);

if (!isNaN(num1) && !isNaN(num2)) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Quotient: ${quotient}`);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
