var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector(".list");


function toggle() {
    li.classList.toggle("done");
}

li.addEventListener("click", toggle);

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); //<- hvorfor trenger man ikke å sette () bak addListAfterClick, det er jo en funksjon?

function addListOnEnter(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
    }
}

input.addEventListener("keypress", addListOnEnter); // samme her