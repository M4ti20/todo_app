const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".add-todo-button");
const todoContainer = document.querySelector(".todo-container");

addTodoButton.addEventListener("click", addTodo);

function addTodo(e) {
    e.preventDefault();

    const newTask = document.createElement("div");
    newTask.classList.add("new-task");
    newTask.innerText = todoInput.value;
    todoContainer.appendChild(newTask);
    todoInput.value = "";

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
    buttonsDiv.appendChild(trashIcon)

}


todoContainer.addEventListener("click", deleteAcheckTask);

function deleteAcheckTask(e) {
    
    if (e.target.classList[0] === "trash-btn") {
        const todo = e.target.parentElement.parentElement;
        todo.remove();
    } else if (e.target.classList[0] === "check-btn") {
        const checkIcon = e.target;
        checkIcon.classList.add("check-btn-green");
        checkIcon.classList.remove("check-btn");
    }
}