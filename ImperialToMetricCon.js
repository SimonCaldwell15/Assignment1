"use strict";
//Simon Caldwell
//W0304743
//Assignment 1 

// This program converts a weight given in imperial units (tons, stones, pounds, ounces)
// to the metric equivalent in metric tons, kilograms, and grams.

var readlineSync = require('readline-sync');

// Main function
function main() {
    // Input
    var tons = parseInt(readlineSync.question("Enter number of tons (imperial): "));
    var stones = parseInt(readlineSync.question("Enter number of stones: "));
    var pounds = parseInt(readlineSync.question("Enter number of pounds: "));
    var ounces = parseFloat(readlineSync.question("Enter number of ounces: "));

    // Processing
    var totalOunces = 35840 * tons + 224 * stones + 16 * pounds + ounces;
    var totalKilos = totalOunces / 35.274;

    var metricTons = parseInt(totalKilos / 1000);
    var remainingKilos = totalKilos - (metricTons * 1000);
    var kilos = parseInt(remainingKilos);
    var grams = (remainingKilos - kilos) * 1000;
    grams = grams.toFixed(1);

    // Output
    console.log("\nMetric weight equivalent:");
    console.log("Metric tons: " + metricTons);
    console.log("Kilograms: " + kilos);
    console.log("Grams: " + grams);
}

main();