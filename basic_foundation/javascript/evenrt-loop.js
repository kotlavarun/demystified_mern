console.log("one")

setTimeout(function goal(){
    console.log("2.First timeout");
},0)

setTimeout(function goal(){
    console.log("3.First timeout");
},0)

setTimeout(function goal(){
    console.log("4.First timeout");
},0)

setTimeout(function goal(){
    console.log("5.First timeout");
},0)

setTimeout(function goal(){
    console.log("6.First timeout");
},0)


fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response)=>response.json()).then(jsonData => console.log(jsonData)).catch((error)=> console.error(error));

const proms=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("resolved")
    })
},0)


proms.then((data)=>console.log(data)).catch(error=>console.error(error));


Promise.resolve("6. Promise is resolved").then((data)=> console.log(data))
Promise.resolve("7. Promise is resolved").then((data)=> console.log(data))
Promise.resolve("8. Promise is resolved").then((data)=> console.log(data))
Promise.resolve("9. Promise is resolved").then((data)=> console.log(data))
Promise.resolve("10. Promise is resolved").then((data)=> console.log(data))


console.log("11. END of program");

