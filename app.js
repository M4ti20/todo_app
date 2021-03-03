const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".add-todo-button");
const todoContainer = document.querySelector(".todo-container");

addTodoButton.addEventListener("click", addTodo);

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value.length <= 2){
        alert('Zadanie za krótkie')
    }else {
        const newTask = document.createElement("div");
        newTask.classList.add("new-task");
        newTask.innerText = todoInput.value;
        todoContainer.appendChild(newTask);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons-div");
        newTask.appendChild(buttonsDiv);

        const checkIcon = document.createElement("button");
        checkIcon.innerHTML = '<i class="fa fa-check-circle"></i>';
        checkIcon.classList.add("check-btn");
        buttonsDiv.appendChild(checkIcon)

        const trashIcon = document.createElement("button");
        trashIcon.innerHTML = '<i class="fa fa-trash"></i>';
        trashIcon.classList.add("trash-btn");
        buttonsDiv.appendChild(trashIcon);

            saveTaskLocal(todoInput.value);
    
            todoInput.value = "";
        }
    }


todoContainer.addEventListener("click", deleteAcheckTask);

function deleteAcheckTask(e) {
    
    if (e.target.classList[0] === "trash-btn") {
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        removeFromLocal(todo);
    } else if (e.target.classList[0] === "check-btn") {
        const checkIcon = e.target;
        checkIcon.classList.add("check-btn-green");
        checkIcon.classList.remove("check-btn");
    }
}

function saveTaskLocal(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getTask);

function getTask() {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const newTask = document.createElement("div");
        newTask.classList.add("new-task");
        newTask.innerText = todo;
        todoContainer.appendChild(newTask);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons-div");
        newTask.appendChild(buttonsDiv);

        const checkIcon = document.createElement("button");
        checkIcon.innerHTML = '<i class="fa fa-check-circle"></i>';
        checkIcon.classList.add("check-btn");
        buttonsDiv.appendChild(checkIcon)

        const trashIcon = document.createElement("button");
        trashIcon.innerHTML = '<i class="fa fa-trash"></i>';
        trashIcon.classList.add("trash-btn");
        buttonsDiv.appendChild(trashIcon);

    });
}

function removeFromLocal(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));

}