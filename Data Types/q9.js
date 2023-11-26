function calculateAmount(quantity, rate) {
    return quantity * rate;
}

function calculateDiscount(amount, discountPercentage) {
    return (amount * discountPercentage) / 100;
}

function calculateAmountAfterDiscount(amount, discountAmount) {
    return amount - discountAmount;
}

var quantity = parseInt(prompt("Enter quantity:"));
var rate = parseFloat(prompt("Enter rate per unit:"));

if (!isNaN(quantity) && !isNaN(rate)) {
    var amount = calculateAmount(quantity, rate);
    var discountAmount = calculateDiscount(amount, 10);
    var amountAfterDiscount = calculateAmountAfterDiscount(amount, discountAmount);

    console.log("Amount: $" + amount.toFixed(2));
    console.log("Discount Amount (10%): $" + discountAmount.toFixed(2));
    console.log("Amount After Discount: $" + amountAfterDiscount.toFixed(2));
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
