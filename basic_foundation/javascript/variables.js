//console.log("Hello , Sir")
let username;
username="sundeep"
username="varun" // re-assignment
{
    //console.log(username)
    let username="sai"
    let userref=username
    userref="varun"
    console.log(userref)
    console.log(username)

    let person={
        name:"brad",
        age:40
    };
    let newperson=person;
    newperson.name="varun"
    console.log(person)
    console.log(newperson)
}
//console.log(username)


const batch=5
//batch =6 cannot re-arrange in const
//console.log(batch)