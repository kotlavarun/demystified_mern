const taskForm = document.querySelector(".taskForm");
const taskInput = document.querySelector(".taskInput");
const tasksContainer=document.querySelector(".tasksContainer");
const sortingArray=document.getElementById("sortBtn");

let TODOS=[]
let completeTODOS=[]


document.addEventListener("DOMContentLoaded",function(){
    
    const areTodosLoaded=loadTodos()
    if(areTodosLoaded){
        renderTodos(TODOS)
    }
    
    
})

sortingArray.addEventListener("change",function(){
    console.log(sortingArray.value);
    if(sortingArray.value=="new"){

        TODOS=TODOS.sort((a, b) => a.timeStamp.localeCompare(b.timeStamp));
        localStorage.setItem("todo",JSON.stringify(TODOS));
        tasksContainer.replaceChildren(); // modern & clean
    
        renderTodos(TODOS)
    }
    else if(sortingArray.value=="old"){
        TODOS=TODOS.sort((a, b) => b.timeStamp.localeCompare(a.timeStamp));
        localStorage.setItem("todo",JSON.stringify(TODOS));
        tasksContainer.replaceChildren(); // modern & clean
    
        renderTodos(TODOS)
    }
    else if(sortingArray.value=="complete"){
        completeTODOS=TODOS.filter((task)=>task.isTaskDone==true)
        localStorage.setItem("ctodo",JSON.stringify(completeTODOS));
        tasksContainer.replaceChildren();
        renderTodos(completeTODOS)
    }
    
})

const handleEditbutton=(taskIdToEdit)=>{

    if(document.querySelector(".taskSave")){
        console.log("save button exits ");
        return;
    }
    console.log("Edit button pressed");
    console.log(taskIdToEdit)
    const listItemtoBeEdit=document.getElementById(taskIdToEdit);
    const paraTobeEdited =listItemtoBeEdit.querySelector(".task")
    const tasksAction=listItemtoBeEdit.querySelector(".tasksAction")
    //console.log(tasksAction)
    //const edit_btn=listItemtoBeEdit.querySelector(".taskEdit")
    //edit_btn.textContent="Save"
    //console.log(edit_btn)
    //console.log(paraTobeEdited)
    //paraTobeEdited.style.backgroundColor = 'white';
    paraTobeEdited.setAttribute("contenteditable","true");
    paraTobeEdited.classList.add("white_bg");
    const savebtn=document.createElement("button");
    savebtn.textContent="Save"
    savebtn.setAttribute("class","taskSave");
    tasksAction.prepend(savebtn);
    paraTobeEdited.focus()
    savebtn.addEventListener("click",function(){
        const editValue=paraTobeEdited.textContent;
        console.log(editValue)
        for(let index=0;index<TODOS.length;index++){
            if(TODOS[index].taskId==taskIdToEdit){   
                TODOS[index].taskText=editValue;
                TODOS[index].timeStamp=new Date().toISOString();
            }
        }
        localStorage.setItem("todo",JSON.stringify(TODOS));
        paraTobeEdited.setAttribute("contenteditable","false");
        paraTobeEdited.classList.remove("white_bg");
        savebtn.remove();
    })


}
const handleDeleteButton=(taskIdtoDelete)=>{
    
    console.log("Delete Button pressed")
    console.log(taskIdtoDelete)
    const userconfirm=confirm("Are you sure want to delete");
    if(userconfirm){

        TODOS=TODOS.filter((task)=>task.taskId!=taskIdtoDelete)
        localStorage.setItem("todo",JSON.stringify(TODOS));
        const listItemToBeRemoved=document.getElementById(taskIdtoDelete);
        listItemToBeRemoved.remove();
    }

}

const handleTaskDone=(taskIdToUpdate)=>{
    const listItemtoBeEdit=document.getElementById(taskIdToUpdate);
    const paraTobeEdited =listItemtoBeEdit.querySelector(".task")
    for(let index=0;index<TODOS.length;index++){
        if(TODOS[index].taskId==taskIdToUpdate){
            TODOS[index].isTaskDone=!TODOS[index].isTaskDone
            if(TODOS[index].isTaskDone){
                paraTobeEdited.classList.toggle("striker")
            }
            else{
                paraTobeEdited.classList.toggle("striker")
            }
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

    if(task.isTaskDone){
        pTag.classList.add("striker")
    }
    else{
        pTag.classList.remove("striker")
    }

    const timeStampPtag=document.createElement("p");
    timeStampPtag.textContent=task.timeStamp;

    tasksContentContainer.appendChild(pTag)
    tasksContentContainer.appendChild(timeStampPtag)

    const taskActionButtonContainer = document.createElement("div");
    taskActionButtonContainer.setAttribute("class","tasksAction")

    const editButton=document.createElement("button");
    editButton.setAttribute("class","taskEdit");
    editButton.textContent="Edit"
    editButton.addEventListener("click",()=>handleEditbutton(task.taskId));

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","taskDelete")
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
        timeStamp:new Date().toISOString()

    }


    createAndPush(newTask);

    
    TODOS.push(newTask);
    saveTOdoINLocalStorage(TODOS);
    
    taskInput.value=""
}

taskForm.addEventListener("submit",AddTask)

