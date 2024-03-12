// Task 1: Implement a function that calculates total coffees sold
let sales = [ 0.99, 1.24, 1.99];

function totalCoffeesSold(){
    // Calculate the total coffees sold by summing up a sales array
    return sales.reduce((a, b) => a+b, 0);
}

console.log("total coffee sales so far: $", totalCoffeesSold());

// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
let coffeeMenu = []

function addCoffee(blend, decaf){
    let newCoffee = {
    coffeeBlend: blend,
    isDecaf: decaf
    };
    coffeeMenu.push(newCoffee);
}

addCoffee("Espresso", false);
addCoffee("Latte", true);
addCoffee("Cappuccino", true);
console.log(coffeeMenu);

function decafOnly(){
    return coffeeMenu.filter((coffee) => coffee.isDecaf);
}

console.log(decafOnly());

// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters{
    constructor(coffeeType){
        this.type = coffeeType;
    };
}

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtyCoffeeRoasters extends JazzCoffeeRoasters{
    constructor(coffeeType, speacilty = true){
        super(coffeeType);
        this.specialty = specialty;
    };
};

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function JazzCoffeeBlends(blend, decaf){
    this.coffeeBlend = blend;
    this.isDecaf = decaf;
};

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups{
    constructor(small = "$0.99", medium = "$1.39", large = "$1.78"){
        this.smallPrice = small;
        this.smallMedium = medium;
        this.smallLarge = large;
    };
};

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    
    let message = `${coffeeEvent.name} will be on ${coffeeEvent.date} at the ${coffeeEvent.venue}! Everyone is welcome!`;
    console.log(message);

    // Task 9: Use spreadrest operators on an array
    
    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    console.log(...coffeeTypes);

    // Add a new coffee type using spread operator and create an updated coffee type array
    let updatedCoffeeTypes = [...coffeeTypes,newType];
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    