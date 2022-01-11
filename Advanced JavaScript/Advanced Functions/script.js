function first() {
    var greet = "Hi";
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first()
newFunc();

//Closures - a function ran. The function executed. Its never going to execute again.
//BUT its going to remember that there are references to those variables,
//so the child scope always has access to the parent scope.

//Currying - change a function to only accept one parameter at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; 
//curriedMultiply(3)(4)

const multiplyBy5 = curriedMultiply(5);


//Compose
const compose = (f, g, h) => (a) => f(g(h(a)));
//parameters f and g returns a function that takes parameter a 
//that returns a function that has function f() and g().

const sum = (num) => num + 1;
const sum1 = (num) => num + 2;
const sum2 = (num) => num + 10;

compose(sum, sum1, sum2,)(5);

