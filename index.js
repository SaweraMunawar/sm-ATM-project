#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly Enter your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:"
    },
    {
        type: "list",
        name: "transacationType",
        choices: ["Fast Cash", "Withdraw"],
        message: "select your transaction",
        when(answer) {
            return answer.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "select your amount",
        when(answer) {
            return answer.transacationType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answer) {
            return answer.transacationType == "Withdraw";
        },
    }
]);
if (answer.userId && answer.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answer.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("Insuficient Balance");
    }
}
