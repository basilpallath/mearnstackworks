var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
  //  q1  total number accounts
//   console.log(accounts.length);

   
//q2  print all account numbers whose ac-type savings
// accounts.filter(acc=>acc.ac_type=="savings").forEach(account=>console.log(account.acno));

//q3 print balance of acno=1000
// var balance=accounts.find(acc=>acc.acno==1000).balance
// console.log(balance);
//q4 print all g-pay transaction details
// var phonepayTs=accounts.map(data=>data.transactions).flat().filter(t=>t.method="phone-pay")
// console.log(phonepayTs);
// print 500above transactions
// var trans=accounts.map(data=>data.transactions).flat().filter(t=>t.amount>500)
// console.log(trans);


//q4 print credit transcation's of 1002

// var creditTs=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(creditTs);

//q5 print highest balance account details
// console.log(accounts.reduce((acc1,acc2)=>acc1.balance>acc2.balance?acc1:acc2));




//q6 print transaction history of 1002
var transactionHistory=[]
var creditTs=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(creditTs);
var debitTransaction=accounts.find(data=>data.acno==1002).transactions
// console.log(debitTransaction);
// var transactionHistory={debittransaction:debitTransaction,creditTransaction:creditTs}
// console.log( transactionHistory);
transactionHistory=[...creditTs,...debitTransaction]
console.log(transactionHistory);