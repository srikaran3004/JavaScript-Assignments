let size = prompt("Enter the number of values:");
size = parseInt(size);

if (!isNaN(size) && size > 0) {
    let sum = 0;

    for (let i = 1; i <= size; i++) {
        let value = prompt(`Enter number ${i}:`);
        value = parseFloat(value);

        if (isNaN(value)) {
            console.log("Invalid value");
            break;
        }

        sum += value;
    }

    const avg = sum / size;
    console.log(`Average of numbers: ${avg.toFixed(2)}`);
} else {
    console.log("Invalid input. Please enter a valid number for the size.");
}
