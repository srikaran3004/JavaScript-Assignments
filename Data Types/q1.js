let distance=prompt("Enter distance in km");
distance=parseFloat(distance);
if(!isNaN(distance)){
    const meters=1000;
    const centimeters=100;

    let distanceInmeters=distance*meters;
    let distanceInCentimeters=distance*centimeters;
    console.log(`Distance in meters: ${distanceInmeters} meters`);
    console.log(`Distance in Centimeters: ${distanceInCentimeters} centimeters`);
}
else{
    console.log("Invalid input.");
}