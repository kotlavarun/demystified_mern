// const counter=()=>{
//     let count=0;

//     const increment=()=>{
//         count=count+1;
//         console.log("count:",count);
//         return count;

//     }
//     const decrement=()=>{
//         count=count-1;
//         console.log("count:",count);
//         return count;
//     }
//     const funcArr={increment,decrement};
//     return funcArr;
//     //return[increment,decrement]
// }
// const returnedFuncArr=counter() //or const[increment,decrement]=counter()
// console.log(returnedFuncArr)

let numOne=1;
let numTwo=2;

const outerFunc=()=>{
    console.log(numOne)
    console.log(numTwo)
    let numThree=numOne+numTwo;
    console.log(numThree);

    const innerFunc=()=>{
        let numFour=numThree+1
        console.log(numFour)

    }
    return innerFunc;
}
const returnedInnerFunc=outerFunc();
returnedInnerFunc()