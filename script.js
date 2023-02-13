const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = [];

if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
}


const renderTodos = () => {
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${todos[i]}
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        `;
        li.querySelector(".editBtn").addEventListener("click", () => {
            const newValue = prompt("Enter a new value", todos[i]);
            todos[i] = newValue;
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
        });
        li.querySelector(".deleteBtn").addEventListener("click", () => {
            let del = confirm("delete this todo")
            console.log(del)
            if (del == true) {
                console.log(todos[i])
                console.log(i)
                localStorage.removeItem("todos", JSON.stringify(todos));
                todos.pop(i)
                renderTodos();
            }
        });
        todoList.appendChild(li);
    }
};
renderTodos();


addBtn.addEventListener("click", () => {
    let val = todoInput.value.toString()
    if (val.trim() != "") {
        todos.push(todoInput.value);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
        todoInput.value = ""
    }
})