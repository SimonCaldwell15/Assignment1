"use strict";
//Simon Caldwell
//W0304743
//Assignment 1 

var readlineSync = require('readline-sync');


// DO NOT EDIT: The main function to house our program code 
function main()
{
    // enter your code here
    //Input
    var customersName = readlineSync.question("Enter customers name: ");
    var distances = readlineSync.question("What is the distance in kilometers for delivery?: ");
    var recordSales = readlineSync.question("What is the cost of records purchased?: ");
        


    //Processing

    var moneyPerKm = distances * 15
    let deliveryCost = moneyPerKm.toFixed(2);
    var salesTax = recordSales * 1.14
    let purchaseCost = salesTax.toFixed(2);
    var totalCost = moneyPerKm + salesTax
    let total_Cost = totalCost.toFixed(2);

    //Output
    console.log("purchase summary for: \t\t\t" + customersName)
    console.log("Purchase cost: \t\t\t" + purchaseCost)
    console.log("Delivery cost: \t\t\t" + deliveryCost)
    console.log("Total cost: \t\t\t" + total_Cost)

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
// Ready