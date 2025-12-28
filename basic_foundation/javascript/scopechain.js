// function counter(){
//     let count=0;

//     function increment(){
//         count=count+1;
//         console.log("count:",count);
//         return count;

//     }
//     function decrement(){
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

// const increment=returnedFuncArr.increment
// console.log(increment)
// const increment=returnedFuncArr[0]
// const decrement=returnedFuncArr[1]
// increment();
// increment();
// increment();
// decrement();
// increment();
// decrement();






let numOne=1;
let numTwo=2;

function outerFunc(){
    console.log(numOne)
    console.log(numTwo)
    let numThree=numOne+numTwo;
    console.log(numThree);

    function innerFunc(){
        let numFour=numThree+1
        console.log(numFour)

    }
    return innerFunc;
}
const returnedInnerFunc=outerFunc();
returnedInnerFunc()
//outerFunc()();