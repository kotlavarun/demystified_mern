const taskForm=document.querySelector(".taskForm");
const taskinput=document.querySelector(".taskInput");
const tasksContainer=document.querySelector(".tasksContainer");

taskForm.addEventListener("submit",function(event){
    event.preventDefault();

    const newTask=taskinput.value;
    const ptag=document.createElement("p");
    ptag.setAttribute("class","task")
    ptag.textContent=newTask;
    console.log(ptag);

    tasksContainer.appendChild(ptag);
    taskinput.value="";

})