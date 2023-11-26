let distanceInKilometers = prompt("Enter the distance between two cities (in km):");
distanceInKilometers = parseFloat(distanceInKilometers);

if (!isNaN(distanceInKilometers)) {
    const metersInKilometer = 1000;
    const feetInMeter = 3.28084;
    const inchesInFoot = 12;
    const centimetersInMeter = 100;

    let distanceInMeters = distanceInKilometers * metersInKilometer;
    let distanceInFeet = distanceInMeters * feetInMeter;
    let distanceInInches = distanceInFeet * inchesInFoot;
    let distanceInCentimeters = distanceInMeters * centimetersInMeter;

    console.log(`Distance in meters: ${distanceInMeters} meters`);
    console.log(`Distance in feet: ${distanceInFeet} feet`);
    console.log(`Distance in inches: ${distanceInInches} inches`);
    console.log(`Distance in centimeters: ${distanceInCentimeters} centimeters`);
} else {
    console.log("Invalid input. Please enter a valid number for the distance.");
}
