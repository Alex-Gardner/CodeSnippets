/*
 - Implicit Binding
 - Explicit Binding
 - new Binding
 - window Binding
*/

// Implicit Binding: "Context is left of the period"

const makeAnimal = function(name, feet, eats, speed) {
  return {
    feet: feet,
    eats: eats,
    speed: speed,
    introduce: function() {
      console.log(
        `I am a ${this.name}. I run on ${this.feet} feet, eat ${this
          .eats}, and move ${this.speed}`,
      );
    },
  };
};

const Bear = makeAnimal('Bear', 4, 'everything', 'fast');

Bear.introduce();
