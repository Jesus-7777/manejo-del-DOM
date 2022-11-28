const btn = document.querySelector("[data-form-btn]");

console.log(btn);


//capturar eventos o listeners 
const createTask = (evento) => {
 evento.preventDefault(); //Este metodo no recarga la pagina
 const input = document.querySelector("[data-form-input]");
 const value = input.value;
 const list = document.querySelector("[data-list]");
 const task = document.createElement("li");
 task.classList.add("card");
 input.value = "";
 const content = `<div>
 <i class="far fa-check-square icon"></i>
 <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`;
 task.innerHTML = content;

 list.appendChild(task)

}
//Arrow funtion (funciones flechas) o funciones anonimas 
btn.addEventListener("click", createTask);