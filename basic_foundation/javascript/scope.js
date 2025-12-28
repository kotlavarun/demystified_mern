function ScopeFunc(){
    console.log(arguments);
    
}

ScopeFunc(1,true,"hello") //Function Invocation / call 



// const arrowFunc=()=>{
//     console.log(arguments)
// }
// arrowFunc(1,true,"hello")

const arrowFunc=(num,bool,str)=>{
    console.log(num,bool,str)
}
arrowFunc(1,true,"helloo")

const arrowFunc1=(num,bool,str)=>(console.log(num,bool,str))
arrowFunc(1,true,"hello")

//Function Expression
//F=ma

const classicFunExp = function(){
    console.log("This is the classic function expression")
}
classicFunExp();


