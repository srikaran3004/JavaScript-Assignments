function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

var fahrenheitTemperature = parseFloat(prompt("Enter temperature in Fahrenheit:"));

if (!isNaN(fahrenheitTemperature)) {
    var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " Fahrenheit is equal to " + celsiusTemperature.toFixed(2) + " Celsius");
} else {
    console.log("Invalid input. Please enter a valid number.");
}
