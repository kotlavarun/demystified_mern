console.log("function hoisting")

function classicFunction(num,bool,str){
    console.log("Inside classic function");
    console.log(num,bool,str)
    let username="Sundeep dasari classic"
    console.log(username)
    
}

classicFunction(1,true,"hello")

const varun=()=>{
const arrowFunc=(num,bool,str) => {
    console.log("Inside arrow function");
    console.log(this)
    console.log(num,bool,str)
    let username="Sundeep dasari arrow"
    console.log(username)
}

arrowFunc(1,true,"hello")}

varun("sai");


// const arrowFunc=(num,bool,str) => {
//     console.log("Inside arrow function");
//     console.log(this)
//     console.log(num,bool,str)
//     let username="Sundeep dasari arrow"
//     console.log(username)
// }

// arrowFunc(1,true,"hello")

// //varun();


