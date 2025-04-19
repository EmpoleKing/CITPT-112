// Chapter 3 Project 1
// Create the array
const theList = ['Laurence', 'Svekis', true, 35, null,
    undefined, {test: 'one', score: 55}, ['one', 'two']
];

// Remove the first item
theList.shift(); // Removes 'Laurence'

// Remove the last item
theList.pop(); // Removes ['one', 'two']

// Remove the first item again (true)
theList.splice(1, 1); // Removes true

// Remove the last item again (undefined)
theList.splice(-2, 1); // Removes undefined

// Remove the first item again (35)
theList.splice(1, 1); // Removes 35

// Remove the last item again ({test: 'one', score: 55})
theList.pop();

// Remove the null value
theList.splice(1, 1); // Removes null

// Add "FIRST" to the beginning of the array
theList.unshift('FIRST');

// Add "MIDDLE" after "Svekis"
theList.splice(2, 0, 'MIDDLE');

// Add "hello World" after "MIDDLE"
theList.splice(3, 0, 'hello World');

// Add "LAST" to the end of the array
theList.push('LAST');

// Output the array
console.log(theList);

// Chapter 3 Project 2
// Create the inventory
let storeInventory = [];

// Create three items
let item1 = {
    name: 'Booster Box',
    model: 'Kaldheim',
    cost: 145.00,
    quantity: 10
};

let item2 = {
    name: 'Booster Pack',
    model: 'Strixhaven',
    cost: 5.00,
    quantity: 100
};

let item3 = {
    name: 'Pre-Release Kit',
    model: 'Adventures in the Forgotten Realms',
    cost: 60.00,
    quantity: 15
};

// Add the items to the inventory
storeInventory.push(item1, item2, item3);

// Log the inventory to the console
console.log("Inventory:", storeInventory);

// Access the quantity of the third item
console.log("Quantity of third item:", storeInventory[2].quantity);

// Update the quantity of the third item
storeInventory[2].quantity = 20;

// Log the updated inventory to the console

// Adding new item to the inventory
let item4 = {
    name: 'Collector Booster Box',
    model: 'Strixhaven',
    cost: 350.00,
    quantity: 5
};

// Add the new item to the inventory
storeInventory.push(item4);

// Log the updated inventory to the console
console.log("Updated Inventory:", storeInventory);