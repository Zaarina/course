// using this array
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
console.log(array.shift(), array);

// 2. Sort the array in order.
console.log(array.sort());

// 3. Put "Kiwi" at the end of the array.
console.log(array.push("Kiwi"));

// 4. Remove "Apples" from the array.
console.log(array.shift(), array)

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array.reverse());

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]); 
