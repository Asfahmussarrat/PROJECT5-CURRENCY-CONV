#! /usr/bin/env node
import inquirer from "inquirer";
// Define the lists of different currencies
let exchange_rate:any = {
    "USD":1,// Base currency
    "EUR":0.9,//Europeon currency
    "CAD":1.3,// canadian Dollar
    "AUD":1.65,// australian Dollar
    "JYP":113,// Japanese yen
    "PKR":280,// Pakistani Rupees
}
//Print the users to convert the currencies  from and to
let user_answers = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"select the currency convert from",
        choices:["USD","EUR","CAD","AUD","JYP","PKR",]

},
{
    name:"to_currency",
    type:"list",
    message:"select the currency convert to",
    choices:["USD","EUR","CAD","AUD","JYP","PKR"]
},
{
    name:"amount",
    type:"input",
    message:"Enter the amount to convert:",
}
]);
// Apply formula to convert currency
let from_amount = exchange_rate[user_answers.from_currency];
let to_amount = exchange_rate[user_answers.to_currency];
let amount = user_answers.amount
//Formula of conversion
let base_amount = from_amount / amount
let converted_amount = base_amount* to_amount
//Display the converted amount
console.log(`converted_amount =${converted_amount.toFixed(2)}`);
