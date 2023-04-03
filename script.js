import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-fotm-btn]");

const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-imput]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement('spam');
    tittleTask.classList.add('task');
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);

    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};
//Arroa functions o funciones anonimas
btn.addEventListener('click', createTask);