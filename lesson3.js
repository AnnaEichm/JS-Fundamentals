//objects
var customer = {
    firstName: 'John', 
    lastName: 'Smith',
    cars: ["Volvo", "Tesla",  "BMW"]
};

//Dot notation
customer.lastName = "Mike"; 

// Bracket notation
customer['lastName'] = "Silver";

console.log(`${customer.firstName} ${customer.lastName}`);

//arrays
var car = ["Volvo", "Tesla",  "BMW"];
car[2] = "Anna";
console.log(car[2]);

console.log(customer.cars[1]);