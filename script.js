( () => {
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
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
};


//Arroa functions o funciones anonimas
btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};
//Inmediatrly invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

})();