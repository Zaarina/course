var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

list.shift() //["cat", "tiger", "bird"]

list.pop() // ["cat", "bear"]

list.push("elephant") // 3, ["cat", "tiger", "elephant"]

list.concat(["bee","dear"]) // ["cat", "tiger", "elephant", "bee", "dear"]

list.sort() // ["bear", "cat", "elephant"]

var myList = ["cat", "tiger", "elephant", "bee", "dear"];
var myNewList = myList.concat(["monkey"]);
myList // ["cat", "tiger", "elephant", "bee", "dear"];
myNewList // ["cat", "tiger", "elephant", "bee", "dear", "monkey"];

var numbers = [1, 2, 3, 4];

var booleans = [true, false, true];

var functionList = [function apple() {
    console.log("apple")
}];

//not advised
var MixedList = ["apples", 2, undefined, true, function apple() { console.log("apples") }];

//nested arrays
var list = [["tiger", "cat", "bear", "bird"]]
console.log(list[0][2]) //bear