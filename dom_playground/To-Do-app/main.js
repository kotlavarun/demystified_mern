const taskForm = document.querySelector(".taskForm");
const taskInput = document.querySelector(".taskInput");
const tasksContainer=document.querySelector(".tasksContainer");

const TODOS=[]


document.addEventListener("DOMContentLoaded",function(){
    
    const areTodosLoaded=loadTodos()
    //console.log(areTodosLoaded)
    if(areTodosLoaded){
        renderTodos(TODOS)
    }
    // loadTodos()
    // renderTodos(TODOS)
    
    
})

const createAndPush=(task)=>{
    const pTag=document.createElement("p");
    pTag.setAttribute("class","task");
    pTag.textContent=task;
    tasksContainer.appendChild(pTag);
   
}


const renderTodos=(todos)=>{
    for(let index=0;index<todos.length;index++){
        
        
        createAndPush(todos[index]);

        
    }
}
// const createAndPush=(task)=>{
//     const pTag=document.createElement("p");
//     pTag.setAttribute("class","task");
//     pTag.textContent=task;
//     tasksContainer.appendChild(pTag);
   
// }




const loadTodos=()=>{
    console.log(TODOS)
    const stringifiedTodos=localStorage.getItem("todo");
    const todosArray=JSON.parse(stringifiedTodos);
    if(todosArray && todosArray.length){
        TODOS.push(...todosArray);
        console.log(TODOS)
        return true;
    }
    return false;
}

const saveTOdoINLocalStorage=(todos)=>{
    const stringifiedTodos=JSON.stringify(todos);
    console.log(localStorage)
    localStorage.setItem("todo",stringifiedTodos);
    return;
}

const AddTask=(event)=>{
    event.preventDefault();
    console.log("clicked")
    const newTask=taskInput.value;
    const pTag=document.createElement("p");
    pTag.setAttribute("class","task");
    pTag.textContent=newTask;
    tasksContainer.appendChild(pTag);
    
    TODOS.push(newTask);
    saveTOdoINLocalStorage(TODOS);
    
    taskInput.value=""
}

taskForm.addEventListener("submit",AddTask)

