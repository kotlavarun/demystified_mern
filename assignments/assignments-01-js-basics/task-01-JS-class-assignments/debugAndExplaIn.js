class User {
    constructor(name) {
    name = name;
    }
    sayHello() {
        console.log("Hello", this.name);
    }
}
const u1 = new User("Sandeep");
u1.sayHello();

// For the about code undefined is printed beacuse "this " is not binded with the created instance
// this is missing in the constructor


// Fixed Code
class User2 {
    constructor(name) {
    this.name = name;
    }
    sayHello() {
        console.log("Hello", this.name);
    }
}
const u2 = new User2("Sandeep");
u2.sayHello();

