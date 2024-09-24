"use strict";


// Short-Term Loan Calculator
// This program calculates the weekly payment for a loan based on user input.

var readlineSync = require('readline-sync');

// Main function
function main() {
    // Input
    var loan = parseFloat(readlineSync.question("Enter the loan amount in dollars: "));
    var interest = parseFloat(readlineSync.question("Enter the annual interest rate (in %): "));
    var number = parseInt(readlineSync.question("Enter the number of years for the loan: "));

    // Processing
    var i = interest / 5200; // Weekly interest rate
    var N = 52 * number;  // Total number of weekly payments
    var denominator = 1 - Math.pow(1 + i, -N);
    var weeklyPayment = (i * loan) / denominator;
    weeklyPayment = weeklyPayment.toFixed(2); // Round to two decimal places

    // Output
    console.log("\nYour weekly payment will be: $" + weeklyPayment);
}

main();

// Ready