const input = document.getElementById("userinput");
const addToInput = document.getElementById("addBtn");
const todosAmount = document.getElementById("amount");
const buttonComp = document.querySelectorAll("#completeBtn");
const redButton =document.getElementById("completeBtn");
const ul = document.querySelector("ul");
const addedUl = document.querySelectorAll("ul");
const list = document.getElementsByTagName("li");
const values = document.getElementsByClassName("values");




const inputLength = () => input.value.length;
const checkList = () => list.length;
const checkAmount = () => values.length;



const createListElement = () => {
    //createList
    const li = document.createElement("li");
    li.classList.add("todo-list");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    hideHeading();
    displayValues();

    //createButton
    const button = document.createElement("button");
    button.setAttribute("id", "completeBtn");
    button.classList.add("red-btn");
    button.appendChild(document.createTextNode("Complete"));
    li.appendChild(button);
}



const hideHeading = () => {
    if(checkList() > 0 ) {
        const emptyTodo = document.getElementById("empty");
        emptyTodo.style.display = "none";
    }   
}   

const displayValues = () => {
    if(checkAmount() > 0) {
        const text = document.getElementById("counter");
        text.style.visibility = "visible";
    }
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







    

    

    


   


















