function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`)
        },
        withdraw : function (amount) {
            if(amount > balance ) {
                console.log("Insufficient funds!!!");
            }
            else {
                balance -= amount;
                console.log(`Withdraw: ${amount}, Balance: ${balance}`);
            }
        }
    };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(300)