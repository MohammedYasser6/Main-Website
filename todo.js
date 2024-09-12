const addBtn = document.querySelector(".todo-main_body .add-Btn");
const inputtxt = document.querySelector(".todo-main_body .input-input");
const search = document.querySelector(".todo-main_body .search-input");
const task_container= document.querySelector(".todo-main_body .tasks-container");
const liContainer= document.querySelector(".todo-main_body .li-container");
const li = document.querySelector(".todo-main_body li");


// const deleteButtons = document.querySelectorAll('.img');
let todos = JSON.parse(localStorage.getItem("tasks")) || [];
displayTodos(todos);

const handleDelete = (e) => {
    const updatedTodos = todos.filter(todo => todo.id != e.id)
    todos = updatedTodos;
    localStorage.setItem("tasks",JSON.stringify(todos))

    displayTodos(todos);
};

addBtn.addEventListener("click", () => {
    if(inputtxt.value === ""){
        alert("Please enter a task");
    }
    else{
        todos.push({
            id:inputtxt.value+Math.floor(Math.random()*100),
            text:inputtxt.value
        })
        localStorage.setItem("tasks",JSON.stringify(todos))
        displayTodos(todos);
    }
})

function displayTodos(arr) {
    liContainer.innerHTML=""
    arr?.forEach(todo=>{
        liContainer.innerHTML += `
                        <li id=${todo.id}>${todo.text}<button class="img" onclick="handleDelete(${todo.id})"></button></li>
            `
    })
        inputtxt.value=""
}


search.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
   let filteredArr = todos.filter(task=>task.text.toLowerCase().includes(searchValue))   
   displayTodos(filteredArr);
    
});
