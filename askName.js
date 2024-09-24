// Ask for the user's name
process.stdout.write("What is your name? ");

// Listen for the input from the terminal
process.stdin.on('data', function(data) {
    // Trim the input to remove extra whitespace
    const name = data.toString().trim();

    // Print the name to the terminal
    console.log('Hello, ${name}!');

    // Exit the process
    process.exit();
});