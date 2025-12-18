const taskForm = document.querySelector(".taskForm");
const taskInput = document.querySelector(".taskInput");
const tasksContainer=document.querySelector(".tasksContainer");

let TODOS=[]


document.addEventListener("DOMContentLoaded",function(){
    
    const areTodosLoaded=loadTodos()
    if(areTodosLoaded){
        renderTodos(TODOS)
    }
    
    
})
const handleEditbutton=()=>{
    console.log("Edit button pressed");

}
const handleDeleteButton=(taskIdtoDelete)=>{
    console.log("Delete Button pressed")
    console.log(taskIdtoDelete)
    TODOS=TODOS.filter((task)=>task.taskId!=taskIdtoDelete)
    localStorage.setItem("todo",JSON.stringify(TODOS));
    const listItemToBeRemoved=document.getElementById(taskIdtoDelete);
    listItemToBeRemoved.remove();

}

const handleTaskDone=(taskIdToUpdate)=>{
    for(let index=0;index<TODOS.length;index++){
        if(TODOS[index].taskId==taskIdToUpdate){
            TODOS[index].isTaskDone=!TODOS[index].isTaskDone
        }
        
    }
    localStorage.setItem("todo",JSON.stringify(TODOS))
}
const createAndPush=(task)=>{
    const newListItem=document.createElement("li");

    newListItem.setAttribute("class","taskItem");
    newListItem.setAttribute("id",task.taskId)

    const checkBoxInput = document.createElement("input");
    checkBoxInput.setAttribute("type","checkbox");
    checkBoxInput.checked=task.isTaskDone;
    checkBoxInput.addEventListener("change",()=>handleTaskDone(task.taskId))

    const tasksContentContainer=document.createElement("div");

    const pTag=document.createElement("p");
    pTag.setAttribute("class","task");
    pTag.textContent=task.taskText;

    const timeStampPtag=document.createElement("p");
    timeStampPtag.textContent=task.timeStamp;

    tasksContentContainer.appendChild(pTag)
    tasksContentContainer.appendChild(timeStampPtag)

    const taskActionButtonContainer = document.createElement("div");
    taskActionButtonContainer.setAttribute("class","tasksAction")

    const editButton=document.createElement("button");
    editButton.textContent="Edit"
    editButton.addEventListener("click",handleEditbutton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent="Delete"
    deleteButton.addEventListener("click",()=>handleDeleteButton(task.taskId));

    taskActionButtonContainer.appendChild(editButton);
    taskActionButtonContainer.appendChild(deleteButton);

    newListItem.appendChild(checkBoxInput);
    newListItem.appendChild(tasksContentContainer);
    newListItem.appendChild(taskActionButtonContainer)

    tasksContainer.prepend(newListItem);
   
}





const renderTodos=(todos)=>{
    for(let index=0;index<todos.length;index++){
        
        
        createAndPush(todos[index]);

        
    }
}


const loadTodos=()=>{
    console.log(TODOS)
    const stringifiedTodos=localStorage.getItem("todo");
    const todosArray=JSON.parse(stringifiedTodos);
    if(todosArray && todosArray.length){
        // TODOS.push(...todosArray);
        TODOS=todosArray;
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

    if(!taskInput.value.trim()){
        alert("Please enter something");
        return;
    }

    const newTask={
        taskId:Date.now(),
        taskText:taskInput.value.trim(),
        isTaskDone:false,
        timeStamp:new Date()

    }


    createAndPush(newTask);

    
    TODOS.push(newTask);
    saveTOdoINLocalStorage(TODOS);
    
    taskInput.value=""
}

taskForm.addEventListener("submit",AddTask)

