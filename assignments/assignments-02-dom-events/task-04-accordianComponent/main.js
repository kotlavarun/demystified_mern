// Notes app - Task 1

const taskOneForm=document.getElementById("notesBtn");
const taskOneInput=document.querySelector(".taskOne");
const tasknotesContainer=document.querySelector(".notesContainer");
const taskOnesubmit=()=>{
    event.preventDefault();

    console.log("hello");
    if(!taskOneInput.value.trim()){
        alert("Enter something")
        return;
    }
    const NoteInput=taskOneInput.value.trim();
    createNote(NoteInput);

    taskOneInput.value=""

}

const createNote=(note)=>{
    const listItem=document.createElement("li");
    listItem.setAttribute("class","listOne")
    const liId=Date.now()
    listItem.setAttribute("id",liId)
    const ptag=document.createElement("p");
    ptag.textContent=note;
    const delButton=document.createElement("button")
    delButton.textContent="Delete"
    delButton.addEventListener("click",()=>{delNote(liId)})

    listItem.appendChild(ptag);
    listItem.appendChild(delButton);

    tasknotesContainer.appendChild(listItem);
}

const delNote=(listId)=>{
    console.log(listId);
    const listToBeDeleted=document.getElementById(listId);
    listToBeDeleted.remove()
}
taskOneForm.addEventListener("click",taskOnesubmit)

//count Task-2

const searchtext=document.querySelector(".filterInput");
const listsearch=document.querySelectorAll("li");

searchtext.addEventListener("input",()=>{
    const searchInput=searchtext.value.toLowerCase();
    listsearch.forEach(item=>{
        const itemtext=item.textContent.toLowerCase();
        if(itemtext.includes(searchInput)){
            item.style.display="list-item";
        }
        else{
            item.style.display="none";
        }
    })
})

//Count Task-3

const countInputvalue=document.querySelector(".countInput");
const displayCountText=document.querySelector(".displayText");
const max=10;
const countTask=()=>{
    
    if (countInputvalue.value.length >=max) {
    countInputvalue.value = countInputvalue.value.slice(0, max);
  }
    displayCountText.textContent=`${countInputvalue.value.length} / ${max}`;
    // console.log("hello");
    if(countInputvalue.value.length==max){
        //console.log("hii")
        displayCountText.classList.add("limit")
    }
    else{
        displayCountText.classList.remove("limit")
    }
    
}

countInputvalue.addEventListener("input",countTask);


//Task-4

const headers=document.querySelectorAll(".header");
headers.forEach(header => {
  header.addEventListener("click", () => {

    headers.forEach(h => {
        console.log(h);
        
      const content = h.nextElementSibling;

      if (h !== header && h.classList.contains("active")) {
        console.log(h);
        
        h.classList.remove("active");
        content.classList.remove("active");
      }
    });

    const currentContent = header.nextElementSibling;

    header.classList.toggle("active");
    console.log(currentContent)
    currentContent.classList.toggle("active");
  });
});
