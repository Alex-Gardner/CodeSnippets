// Functional programming vid series:
// https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

// Reduce   - https://www.youtube.com/watch?v=Wl98eZpkp-c&t=473s
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Method on arrays - generalized way to transform lists

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

//* where 'order' is the array being acted on
//proper english: (the array on which the function is being applied)

// The original example (only works on the 'orders' array above)

var origAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0 /*<-- starting point for (sum)*/);

console.log(`The original function gives: ` + origAmount);

// ES6 syntax

var otherTotalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(otherTotalAmount);

// A more generalized form of summation (works on any array in the same format)

var generalSum = function(arrayList) {
  return arrayList.reduce(function(sum, order) {
    console.log(order);
    return sum + order.amount;
  }, 0);
};

const ordersPrime = [
  { amount: 2504 },
  { amount: 1542 },
  { amount: 75 },
  { amount: 4554 },
  { amount: 9 },
  { amount: 985 },
];

console.log(`The more general form gives: ` + generalSum(ordersPrime));

//------------------------------------------

// Filter - Runs through an array and returns a new array with values matching the specification
// Reject - Opposite functionality of Filter: found in underscore.js and other libs

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

var dogs = animals.filter(function(animal) {
  return animal.species === 'dog';
});

console.log(dogs);
/*
[
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
]
*/

//-----------------------------------------------

// Map - applies the callback function to each item in an array

var nameArray = animals.map(function(animal) {
  return animal.name;
});

//-----------------------------------------------

// Sort - orders elements inside an array according to its value (or equivalent
// UNICODE value)

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

// sort by value
items.sort(function(a, b) {
  return a.value - b.value;
});
