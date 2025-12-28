const unOrderList =document.querySelector(".unordered-list")
console.log(unOrderList)
// const FirstlistItem=document.querySelector(".list-item")
// console.log(FirstlistItem)
const allList=document.querySelectorAll(".list-item")[2]
console.log(allList);
console.log(typeof allList)

const listitemsarray=[];

for(let key=0;key<allList.length;key++){
    const listitems=allList[key];
    console.log(listitems);
    listitemsarray.push(listitems)
}

console.log(listitemsarray)

// console.log(allList[0])
// console.log(allList[1])
// console.log(allList[2])


// const user={
//     user:"varun"
    
// }
// let varun=""
// console.log(user)
// console.log(user.username)


// if(varun){
//     console.log(user)
//     console.log("hii")
// }
if ("0") {
  console.log("Hello");
}
if(NaN){
    console.log("Nan")
}
if("0n"){
    console.log("on")
}

let sai
console.log(sai)

