function Student(fullName,rollNum,department){
    this.FullName=fullName;
    this.RollNumber=rollNum;
    this.depart=department;
    this.getAge=function(){
        console.log(this.FullName)
    }
}

Student.prototype.getMobile = function(){
    console.log(this.FullName)
}

const varun=new Student("Varun","HU21CSEN03001700","CSE-AIML");

console.log(varun);

