const btn = document.querySelector("[data-fotm-btn]");

const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-imput]');
    console.log(input.value);
};

console.log(btn);

//Arroa functions o funciones anonimas
btn.addEventListener('click', createTask);

