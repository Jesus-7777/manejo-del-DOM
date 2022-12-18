import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import {
 displayTask
} from "./readTasks.js";

export const addTask = (event) => {
 event.preventDefault(); //Este metodo no recarga la pagina

 const input = document.querySelector("[data-form-input]");
 const calendar = document.querySelector("[data-form-date]");
 const list = document.querySelector("[data-list]");

 const value = input.value;
 const date = calendar.value;
 const dateFormat = moment(date).format("DD/MM/YYYY");

 if (value === "" || date === "") {
  return;
 };

 input.value = "";
 calendar.value = "";


 const complete = false;

 const taskObj = {
  value,
  dateFormat,
  complete,
  id: uuid.v4()
 };
 list.innerHTML = "";

 //? con JSON.pasce los datos de string se cambian a lo contrario
 const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
 taskList.push(taskObj);

 //?con JSON.stringify almacena datos solo en string
 localStorage.setItem("tasks", JSON.stringify(taskList));

 displayTask()

 /*  const task = createTask(taskObj);
  list.appendChild(task); */
};


//capturar eventos o listeners 
export const createTask = ({
 value,
 dateFormat,
 complete,
 id
}) => {
 const task = document.createElement("li");
 task.classList.add("card");

 const taskContent = document.createElement("div");
 const check = checkComplete(id);
 if (complete) {
  check.classList.toggle("fas");
  check.classList.toggle("completeIcon");
  check.classList.toggle("far");
 };

 const titleTask = document.createElement("span");
 titleTask.classList.add("task");
 titleTask.innerHTML = value;
 taskContent.appendChild(check);
 taskContent.appendChild(titleTask);
 //task.innerHTML = content;

 const dateElement = document.createElement("span");
 dateElement.innerHTML = dateFormat;
 task.appendChild(taskContent);
 task.appendChild(dateElement);
 task.appendChild(deleteIcon(id ));
 return task;
};