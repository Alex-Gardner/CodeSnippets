/*
 - Implicit Binding
 - Explicit Binding
 - new Binding
 - window Binding
*/

// Implicit Binding: "Context is left of the period"
const makeAnimal = function(name, feet, eats, speed) {
  return {
    name: name,
    feet: feet,
    eats: eats,
    speed: speed,
    introduce: function() {
      console.log(
        `I am a ${this.name}. I run on ${this.feet} feet, eat ${this
          .eats}, and move ${this.speed}.`,
      );
    },
  };
};

const Bear = makeAnimal('Bear', 4, 'everything', 'fast');
const Gazelle = makeAnimal('Gazelle', 4, 'plants', 'extremely fast');
const Human = makeAnimal('Human', 2, 'everything...and then some', 'slow');

Bear.introduce(); // I am a Bear. I run on 4 feet, eat everything, and move fast.
Gazelle.introduce(); //I am a Gazelle. I run on 4 feet, eat plants, and move extremely fast.
Human.introduce(); //I am a Human. I run on 2 feet, eat everything...and then some, and move slow.

// **the 'this' keywords are bound to the item left of the function at run time
// -------------------------------------------------

// Explicit Binding: "The function is told which object to use as context"
// Used an object within an object for complexity sake
const nursery = {
  Tommy: {
    name: 'Tommy Gorisberg',
    action: '💩 my pants',
  },
  Madison: {
    name: 'Madison Michelson',
    action: 'insulted everyone',
  },
  Hawkeye: {
    name: 'Hawkeye Danger',
    action: 'started a swordfight',
  },
  Marshall: {
    name: 'Marshall Bad',
  },
  Cody: {
    name: 'Cody Croc',
  },
};

const shaming = function() {
  console.log(
    `My name is ${this.name}, and I ${this.action} today. I am sorry.`,
  );
};

shaming.call(nursery.Tommy);
shaming.call(nursery.Madison);
shaming.call(nursery.Hawkeye);

/* ---- Marshall is particularly bad: he needs an array
    to describe all the bad things he's done today. To do this we use 'apply'
*/
const marshallActs = [
  "took Mr. Carter's (real) hair and used it as a wig",
  'destroyed the time-out area',
  'laughed at the principal',
];

const reallyBad = function(act1, act2, act3) {
  console.log(
    `Zehaha~! I'm ${this.name}. I ${act1}. I also ${act2} and ${act3}.`,
  );
};

reallyBad.apply(nursery.Marshall, marshallActs);

/* -- Cody planned ahead for all his activities.
*/
const codyActs = [
  'cause a riot in the class',
  'break up best friends',
  'escape from time-out',
];
const forethought = function(act1, act2, act3) {
  console.log(
    `Heheh. Fools! I, ${this
      .name} am planning to ${act1}, ${act2}, and ${act3}!`,
  );
};
//  'bind' works the same as call
//  - it takes in individual parameters, not an array
// 'bind' does not immediately run the function.
const planning = forethought.bind(
  nursery.Cody,
  codyActs[0],
  codyActs[1],
  codyActs[2],
);
console.log('And here we start...');
planning();

// -------------
// new Binding
// JS instantiates a new object from the constructor.
// The 'this' keyword is bound to that new object
const Restaraunt = function(storetype, size, taste) {
  this.storetype = storetype;
  this.size = size;
  this.taste = taste;
  this.announce = function() {
    console.log(
      `Hey, let's go to a ${this.size}, ${this
        .storetype}, restaraunt. Its taste is ${this.taste}.`,
    );
  };
};

const burgerKing = new Restaraunt('chain', 'big', 'not the best');
burgerKing.announce(); // Hey, let's go to a big, chain, restaraunt. Its taste is not the best.
// ----------
// window Binding
// when no object is specified, JS defaults to binding to the browser window
// ** This is not good in pretty much all circumstances

function oreally() {
  console.log(`Yep, I'm feeling really good about ${this.size}`);
}
oreally(); // Yep, I'm feeling really good about undefined

function illustration() {
  console.log(`${this}`);
}
illustration(); // [object Window];
