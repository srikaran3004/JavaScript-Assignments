function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

var principalAmount = parseFloat(prompt("Enter principal amount:"));
var interestRate = parseFloat(prompt("Enter rate of interest (in percentage):"));
var numberOfYears = parseInt(prompt("Enter number of years:"));

if (!isNaN(principalAmount) && !isNaN(interestRate) && !isNaN(numberOfYears)) {
    var simpleInterest = calculateSimpleInterest(principalAmount, interestRate, numberOfYears);

    console.log("Principal Amount: $" + principalAmount.toFixed(2));
    console.log("Rate of Interest: " + interestRate.toFixed(2) + "%");
    console.log("Number of Years: " + numberOfYears);
    console.log("Simple Interest: $" + simpleInterest.toFixed(2));
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
