let temperature = prompt("Enter tenperature");
switch (true) {
    case temperature < 0:
        console.log("Low temperature");
        break;
    case temperature >= 0 && temperature <= 30:
        console.log("Medium temperature");
        break;
    case temperature > 30:
        console.log("High temperature");
        break;
    default:
        console.log("Invalid temperature");
}
