function BankDetails(FirstName,LastName,AccountNo,IFSC,Branch,MobileNum,MinDeposit){
    this.firstName=FirstName;
    this.LastName=LastName;
    this.AccountNo=AccountNo;
    this.IFSC=IFSC;
    this.Branch=Branch;
    this.MobileNum=MobileNum;
    this.Balance=MinDeposit;
}

BankDetails.prototype.Deposit=function(amount){
    if(amount>0){
        this.Balance=this.Balance+amount;
        console.log("Available Balance is ",this.Balance);
    }
    else{
        console.log("Enter correct amount")
    }
}

BankDetails.prototype.Withdraw=function(amount){
    if(amount>this.Balance){
        console.log("Insufficient Balance");
    }
    else{
        this.Balance=this.Balance-amount;
        console.log("You succesfully withdrawed "+amount+"rupees");
        console.log("Available Balance : ",this.Balance);

    }
}

BankDetails.prototype.CheckBalance=function(){
    console.log("Available balance : ",this.Balance);
}
const Varun= new BankDetails("Varun","Kotla","123","BARB0TILHYD","Secunderabad",12345,2000)