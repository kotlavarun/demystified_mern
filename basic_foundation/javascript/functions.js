let numOne =5
let numTwo=2
function sum(numOne,numTwo){ //parameters
    let numThree = numOne+numTwo;
    return numThree;
}

function minusTwo(numOne,numTwo){
    let minusnum=numOne-numTwo;
    return minusnum;
}

function multiply(numOne,numTwo){
    let numThree=numOne*numTwo;
    return numThree;
}
let addresult=sum(numOne,numTwo) //arguments
//console.log("sum result is " + addresult)

let minusresult=minusTwo(numOne,numTwo);
//console.log("minus result is " + minusresult)

let multiResult=multiply(numOne,numTwo);
//console.log("Multiply result is "+multiResult);

console.log(addresult+minusresult+multiResult)