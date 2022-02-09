class bank{
    createAccount(acno,pname,pan,branch,phone,bal){
        this.accountNumber=acno;
        this.personName=pname;
        this.pan=pan;
        this.branch=branch;
        this.phone=phone;
        this.balance=bal;
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log(`transaction failed insufficient balance in your ${this.accountNumber}`);
        }
        else{
            this.balance-=amount
            console.log(`your account${this.accountNumber} has been debited with amount ${amount}your avl bal ${this.balance}`);
        }

    }
    deposit(amount){
        this.balance+=amount
        console.log(`your accont${this.accountNumber}has been credited with ${amount} your avl balance ${this.balance}`);
    }
    balanceEnqiry(){

console.log(`you avl balance =${this.balance} `);
    }
    

}
var bankDetails=new bank()
bankDetails.createAccount(1011,"Basil",668121,"kothamangalam",8848384075,10000)
bankDetails. balanceEnqiry()
