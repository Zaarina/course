// function multiply(a,b ) {
// 	return a*b;
// }

// alert(multiply(3,4)); 

function age() {
	var age = prompt("How old are you?");

	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	} else {
		alert ("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// switch (age) {
// 	case (age < 18):
// 		alert("Sorry, you are too young to drive this car. Powering off");
// 		break;
// 		case (age > 18):
// 		alert("Powering On. Enjoy the ride!");
// 		break;
// 		default:
// 		alert ("Congratulations on your first year of driving. Enjoy the ride!");
// }