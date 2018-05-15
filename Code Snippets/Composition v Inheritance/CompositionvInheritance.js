// Class Inheritance
// creates 'Is-a-___' relationships.
// new instances of the class contain properties of the parent

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Rectangle {}

// Composition (Rec.)
// creates 'Has-a-____' relationships.
// Methods and properties are external to the thing being created

// Example courtesy of funfunfunction
// https://www.youtube.com/watch?v=wfMtDGfHWpA

const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name),
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed),
});

barker({ name: 'karo' }).bark();
// Woof, I am karo

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog('sniffles').bark();
