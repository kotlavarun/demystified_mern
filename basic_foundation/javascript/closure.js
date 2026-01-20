function stBank(){
    let bankBalance=0;
    function withdraw(x){
        if(x>bankBalance){
            console.log("Insufficient balance")
            return;
        }
        bankBalance=bankBalance-x;
        console.log("amount withdrawn successfully");

    }
    function deposit(y){
        bankBalance=bankBalance+y;
        console.log("Amount successfully deposited");
    }
    function checkBalance(){
        console.log(`Balance amount is ${bankBalance}`);
        console.log(bankBalance)

    }
    return {withdraw,deposit,checkBalance}
}

const varun=stBank();

varun.deposit(500);
varun.withdraw(200)
varun.checkBalance()