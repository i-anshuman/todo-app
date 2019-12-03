'use strict';

const addTaskForm = document.getElementById("addTaskForm");
const taskList = document.getElementById("taskList");
const task = document.getElementById("addTask");

const addTask = (event) => {
  event.preventDefault();
  
  //Creating <i> element that hold the check icon.
  const i = document.createElement('i');
  i.className = 'material-icons';
  i.innerHTML = 'done';

  //Creating <p> element that hold the task description.
  const p = document.createElement('p');
  p.className = 'task';
  p.innerHTML = task.value;

  //Creating <div> element that hold both <p> and <i>.
  const div = document.createElement('div');
  div.className = 'thing-todo__desc';

  //Creating <button> element that hold <i> element of delete icon.
  const button = document.createElement('button');
  button.className = 'thing-todo__del material-icons';
  button.type = 'button';
  button.innerHTML = 'delete_forever';

  //Creating <li> element that hold the <div> and <button>.
  const li = document.createElement('li');
  li.className = 'thing-todo';

  div.appendChild(p);       // Appending <p> to <div>.
  div.appendChild(i);       // Appending <i> to <div>.
  li.appendChild(div);      // Appending <div> to <li>.
  li.appendChild(button);   // Appending <button> to <li>.
  taskList.appendChild(li); // Appending <li> to <ul>.

}

const removeTask = (event) => {
  if (event.target.classList.contains("material-icons")) {
    var li = event.target.parentElement;
    taskList.removeChild(li);
  }
}

addTaskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
