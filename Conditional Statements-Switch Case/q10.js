let username = prompt("Enter user name");
if (username.length < 6) {
    console.log("Username too short");
} else if (username.length > 15) {
    console.log("Username too long");
} else {
    console.log("Username accepted");
}
