// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
    username: "Andy",
    password: "andy123"
};


// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "Andy",
        password: "andy123"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    }
]


// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
    username: "Jess",
    timeline: "Out for a jog!"
    },
    {
    username: "John",
    timeline: "My lunch for today"
    },
    {
    username: "Bill",
    timeline: "In a meeting"
    }
];

var usernamePrompt = prompt("Enter your username");
var passwordPropmt = prompt("Enter your password");

signIn(usernamePrompt, passwordPropmt);

function isUserValid() {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === usernamePrompt && database[i].password === passwordPropmt) {
            return true;
        } 
    } return false;
}

function signIn() {
    if (isUserValid()) {
        console.log(newsfeed);
    } else alert("Wrong username or password!");
}

// signIn2();
// function signIn2() {
//     if (usernamePrompt === "Andy" && passwordPropmt === "andy123") {
//         console.log("Welcome Andy! Here's your neewsfeed" + "\n", newsfeed);
//     } else {
//         alert("Wrong username or password");
//     }
// }