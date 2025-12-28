console.log("Form input")

const fullName=document.getElementById("fullname");
const email=document.getElementById("email")
const passkey=document.getElementById("password")
const batch=document.getElementById("batch")

// const gendermale=document.getElementById("male")
// const genderfemale=document.getElementById("female")

const btn=document.getElementById("btn");


btn.addEventListener("click",function(){
    const fullNamevalue=fullName.value;
    const emailvalue=email.value;
    const passvalue=passkey.value;
    //console.log(fullNamevalue)
    const batchvalue=batch.value
    
    

    const genderValue = document.querySelector("input[name='gender']:checked")?.value || "";


    const submitDetails={
        FullName:fullNamevalue,
        email:emailvalue,
        passWord:passvalue,
        gender: genderValue,
        batch: batchvalue

    }
    console.log(submitDetails)
})