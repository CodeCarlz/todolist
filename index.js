const addBtn = document.getElementById('addBtn')
const todoInput = document.getElementById('todoInput')
const todoContainer = document.getElementById('todo-Container') 

addBtn.addEventListener('click', addTask);

// function toDoList(){
//  todoContainer.innerHTML += `<div class="todo">
//  <p>${todoInput.value}</p>
//  <div>
//    <button>edit</button>
//    <button>delete</button>
//  </div>
// </div>`
// }

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
      </div>
    `;
    todoContainer.appendChild(li);
    todoInput.value = '';

    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
    todoContainer.removeChild(li);
    
    const editButton = document.createElement('button');
    editButton.addEventListener('click', () => {
      const newText = prompt('Edit the task:', addTask);
      if (newText !== null) {
        span.textContent = newText;
      }
    })
    });
  }
}