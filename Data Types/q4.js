let subject1Marks = prompt("Enter marks in subject 1:");
subject1Marks = parseFloat(subject1Marks);

let subject2Marks = prompt("Enter marks in subject 2:");
subject2Marks = parseFloat(subject2Marks);

if (!isNaN(subject1Marks) && !isNaN(subject2Marks)) {
    const totalMarks = subject1Marks + subject2Marks;
    const totalSubjects = 2;
    const percentage = (totalMarks / (totalSubjects * 100)) * 100;

    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
} else {
    console.log("Invalid input. Please enter valid marks.");
}
