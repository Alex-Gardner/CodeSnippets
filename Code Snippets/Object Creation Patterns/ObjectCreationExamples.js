// This file is a reminder for ways to create objects in JS

/*
Method 1: Factory Pattern ------------------------------------------------------------
*/

let humanFactory = function(name, age, state) {
    
    let holder = {};
    
    holder.name = name;
    holder.age = age;
    holder.state = state;
    
    holder.introducePerson = function() {
        
        console.log(`Hey, I'm ${this.name}! I'm ${this.age} years old and I live in ${this.state}`);  //created with backtics (``) to form string literals 
        
    };
    
    return holder;
    
};

let personA = humanFactory('Charles', 35, 'Arizona');
let personB = humanFactory('Aimee', 24, 'Minnesota');

personA.introducePerson();
personB.introducePerson();

/*
Method 2: Constructor Pattern ---------------------------------------------------------
*/

let houseConstructor = function(address, size, rooms){
    
    this.address = address;
    this.size = size;
    this.rooms = rooms;
    
    this.displayHouse = function(){
        console.log(`Here we have a house at ${this.address}, with a size of ${this.size} square feet and ${this.rooms} rooms.`);
    };
};

let house1 = new houseConstructor('159 Lagoon Street', 1250, 4);
let house2 = new houseConstructor('3365 Tundra Lane', 840 , 3);

house1.displayHouse();
house2.displayHouse();

/*
Method 3: Prototype Pattern --------------------------------------------------------------
*/

let planetProto = function(){
    
};

planetProto.prototype.mass = 1;
planetProto.prototype.radius = 1;
planetProto.prototype.name = 'unnamed';
planetProto.prototype.habitable = false;
planetProto.prototype.logPlanet = function(){
    console.log(`We have found a planet with mass of ${this.mass} EM and a radius of ${this.radius} ER. We shall call this planet ...${this.name}!`);
};

let planet1 = new planetProto();
planet1.mass = 1.5;
planet1.radius = .9;
planet1.name = 'Aqualand';
planet1.logPlanet();

console.log(planet1.hasOwnProperty('name'));      //This set method lets you know if the created instance has the property in itself or if it is going through a fallback to retrieve it from the prototype

/*
Method 4: Dynamic Prototype Pattern --------------------------------------------------------------
*/

let riverDynamicProto = function (name, flowDir) {
    
    this.name = name;
    this.flowDir = flowDir;
    
    if( typeof this.logRiver !==  'function') {
        riverDynamicProto.prototype.logRiver = function() {
            console.log(`Welcome to the ${this.name} River. The flow direction is ${this.flowDir}.`);
        };
    }
};

let river1 = new riverDynamicProto('Menetherendrelle', 'East-West');

river1.logRiver();

/* In this instance, we create objects via a constructor function, but dynamically add a method to the prototype object if none is present */