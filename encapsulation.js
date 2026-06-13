class BankBalance {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amt) {
        this.#balance += amt;
        console.log("Deposited:" , amt);
    }

    withdraw(amt) {
        if(this.#balance >= amt) {
        this.#balance -= amt;
        console.log("Withdrawed:", amt);
        } else {
            console.log("Insufficient Balance..");
        }
}
}

let b = new BankBalance(20300);
console.log(b.getBalance());
b.deposit(10000)

console.log("Avaliable Balance is", b.getBalance())

b.withdraw(100000)

console.log("Avaliable Balance is", b.getBalance())
