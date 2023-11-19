let radius = prompt("Enter radius");
radius = parseFloat(radius);

if (!isNaN(radius)) {
    const pi = 3.14;
    let area = pi * (radius * radius);
    console.log(`Area of circle: ${area} square meters`);
} else {
    console.log("Invalid input");
}
