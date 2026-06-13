// class CoffeMachine {
//     boilWater() {
//         console.log("Boiling Water...");
//     }
//     addCoffee() {
//         console.log("Adding Coffee Powder...");
//     }
//     addMilk() {
//         console.log("Adding Milk...");
//     }
//     serveCoffee() {
//         console.log("Coffee Ready!");
//     }
// }

// const machine = new CoffeMachine();

// machine.boilWater();
// machine.addCoffee();
// machine.addMilk();
// machine.serveCoffee();


class CoffeeMachine {
    boilWater() {
        console.log("Boiling Water...");
    }
    
    addCoffee() {
        console.log("Adding coffee powder...");
    }

    addMilk() {
        console.log("Adding milk...");
    }

    makecoffee() {
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        console.log("Coffee Ready!");
    }
}

const c = new CoffeeMachine();
c.makecoffee(); 