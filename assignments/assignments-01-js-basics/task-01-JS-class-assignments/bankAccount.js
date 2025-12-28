class BankAccount{
    constructor(accountHolder,balance){
        this.name=accountHolder;
        this.balance=balance;
    }
    deposit(amount){
        this.balance=this.balance+amount;
        console.log("Available balane: ",this.balance);
    }
    withdrawn(amount){
        if(amount>this.balance){
            console.log("Insufficient Balance");
            return;
        }
        this.balance=this.balance-amount;
        console.log("Withdrawn amount: ",amount);
        console.log("Available Balance: ",this.balance);
        
    }
    getBalance(){
        console.log("Available Balance: ",this.balance);
    }

}

const varun=new BankAccount("varun",5000);
const charan=new BankAccount("charan",6000);

varun.deposit(1000);
varun.withdrawn(7000);