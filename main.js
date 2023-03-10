const input = document.getElementById("userinput");
const addToInput = document.getElementById("addBtn");
const todosAmount = document.getElementById("amount");
const buttonComp = document.getElementById("completeBtn");
const ul = document.querySelector("ul");

const inputLength = () => input.value.length;

const createListElement = () => {
    const li = document.createElement("li");
    li.classList.add("todo-list");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    const button = document.createElement("button");
    button.setAttribute("id", "completeBtn");
    button.classList.add("red-btn");
    button.appendChild(document.createTextNode("Complete"));
    li.appendChild(button);  
}
    


const addListAfterClick = (event) => {
    event.preventDefault();
    if(inputLength() > 0 ) 
        createListElement();
}

const addListAfterKeypress = (event) => {
    if(inputLength() > 0 && event.keyCode === 13) 
        createListElement();
}

addToInput.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);




















