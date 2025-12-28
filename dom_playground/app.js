// console.log("hello")

// console.log(username);
// var username ="Varun"

// console.log(favnum);
// var favnum=5;


// console.log(numOne);
// let numOne =1;

// console.log(numTwo)
// let numTwo=2;

// console.log(BATCH_NUMBER);
// const BATCH_NUMBER=5;


console.log("Inside app.js")

console.log(document)

const errorBtn=document.getElementById("error-btn");
const successBtn=document.getElementById("success-btn");
const infotext=document.getElementById("info-text");

const handleclickonError=()=>{
    console.log("error has been clicked");
    if(infotext.classList.contains("success-text")){
        infotext.classList.remove("success-text");
    }
    infotext.classList.add("error-text");
    infotext.textContent="Error has been occured"
}
const handleclickonSuccess=()=>{
    console.log("success has been clicked")
    if(infotext.classList.contains("error-text")){
        infotext.classList.remove("error-text");
    }
    infotext.classList.add("success-text");
    infotext.textContent="Success has been clicked"
}

errorBtn.addEventListener("click",handleclickonError);
successBtn.addEventListener("click",handleclickonSuccess);
