const input = document.getElementById("userinput");
const addToInput = document.getElementById("addBtn");
const todosAmount = document.getElementById("amount");
const buttonComp = document.getElementById("completeBtn");
const ul = document.querySelector("ul");

const inputLength = () => value.input.length;

const createListElement = () => {
    const li = document.createElement("li");
    li.classList.add("todo-list");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}


const addListAfterClick = (event) => {
    event.prefentDefault();
    if(inputLength() > 0 ) {
        createTodo();
    };
}

addToInput.addEventListener("click", createListElement);























