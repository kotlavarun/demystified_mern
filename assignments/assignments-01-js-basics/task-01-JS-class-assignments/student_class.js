class Student{
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    getDetails(){
        console.log(`Name:${this.name},Age:${this.age},Course:${this.course}`);
        
    }
    isAdult(){
        if(this.age>=18){
            console.log("True");
            
        }else{
            console.log("False");
            
        }
    }
}

const varun= new Student("varun",21,"CSE-AIML");  //Instance is created
const charan=new Student("Sai Charan",19,"BBA");  //Instance is created

varun.getDetails();
varun.isAdult();
charan.getDetails();
charan.isAdult();