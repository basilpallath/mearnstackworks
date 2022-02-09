 var account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}
// q1 create a function validateAccountNumber(acno) if acno exist return true else return false
// q2 create a function authenticate (acno,password) if given credential are correct 
// return access granted else return permission denied
// function validateAccountNumber(account_number){
//     if(account_number in account_details){
//         return true
//     }
//     else{
//        return false
//     }
// }
// console.log(validateAccountNumber(2000));
// function authenticate(account_number,password){
//     if(account_number in account_details){
//         if(password==account_details[account_number].password){
//             console.log("permission Granted");
//         }
//     }else{
//         console.log("permission denied");
//     }
// }
// console.log(authenticate(1002,"userthree"));
function validateAccountNumber(accno){
    return accno in account_details?true:false
}
console.log(validateAccountNumber(1000));
function authenticate(accno,pwd){
    
}