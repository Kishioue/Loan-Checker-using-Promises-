const prompt = require('prompt-sync')();

const score = parseInt(prompt("Enter your Credit Score: "));
const income = parseFloat(prompt("Enter your Monthly Income: "));
const loanAmt = parseFloat(prompt("Enter your Requested Loan Amount: "));

function checkCreditScore(score) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (score >= 700) {
                resolve("Credit is good");
            } else if (score >= 600) {
                resolve("Credit is average");
            } else {
                reject("Loan rejected due to poor credit score");
            }
        }, 2000);
    });
}

function checkIncome(income, loanAmt) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (income * 10 >= loanAmt) {
                resolve("Income check passed");
            } else {
                reject("Loan rejected; Income too low");
            }
        }, 2000);
    });
}

// Promise chaining
checkCreditScore(score)
    .then((creditMessage) => {
        console.log(creditMessage);
        return checkIncome(income, loanAmt);
    })
    .then((incomeMessage) => {
        console.log(incomeMessage);
        console.log("Loan approved!");
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });