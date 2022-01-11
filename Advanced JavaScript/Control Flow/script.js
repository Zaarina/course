// ternary operator
//condition ? expr 1 : expr 2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied"

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "Not available")

function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    } return "Access denied"
}

var answer2 = condition();

//switch

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction"
    }
    return whatHappens;
}
 
