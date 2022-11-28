const btn = document.querySelector("[data-form-btn]");

console.log(btn);


//capturar eventos o listeners 
const createTask=(evento)=>{
 evento.preventDefault();//Este metodo no recarga la pagina
 const input = document.querySelector("[data-form-input]");
 console.log(input.value);
}
//Arrow funtion (funciones flechas) o funciones anonimas 
btn.addEventListener("click",createTask);

