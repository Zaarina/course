// let + const
const player = "Bobby";
let experience = 100;
let wizardLevel = false; 

if (experience > 90) {
    let wizardLevel = true;
}

const obj = {
    player: "Bobby",
    experience: 100,
    wizardLevel: false
}
// obj.wizardLevel = true


//Destructuring
const obj = {
    player: "Bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;


//Object properties
const name = "John Snow";

const obj2 = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
} // 3: "hihi", John Snow: "hello"


//Template strings
const name = "Sally";
const age = 34;
const pet = "horse";

//const greeting = "Hello " + name + "you seem to be doing " + greeting + "!"

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


//Default arguments
function greet(name='', age=30, pet='cat'){
    return greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

//greet("John", 50, "monkey");


//Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//sym2 === sym3 = false (completely unique type)



//Arraow functions
function add(a, b) {
    return a + b; 
}

const add2 = (a, b) => a + b;