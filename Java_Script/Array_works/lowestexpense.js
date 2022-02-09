// var expenses=[25000,30000,35000,30000,20000]
// if(expenses[1]>expenses[0] && expenses[2]>expenses[0] && expenses[3]>expenses[0] && expenses[4]>expenses[0]){
//     console.log(expenses[0]);
// }
// else if(expenses[0]>expenses[1] && expenses[2]>expenses[1] && expenses[3]>expenses[1] && expenses[4]>expenses[1]){
//     console.log(expenses[1]);
// }
// else if(expenses[0]>expenses[2] && expenses[1]>expenses[2] && expenses[3]>expenses[2] && expenses[4]>expenses[2]){
//     console.log(expenses[2]);
// }
// else if(expenses[0]>expenses[3] && expenses[1]>expenses[3] && expenses[2]>expenses[3] && expenses[4]>expenses[3]){
//     console.log(expenses[3]);
// }
// else if(expenses[0]>expenses[4] && expenses[1]>expenses[4] && expenses[2]>expenses[4] && expenses[3]>expenses[4]){
//     console.log(expenses[4]);
// }
var expenses=[25000,30000,35000,30000,20000]
var minExp=expenses[0]
for(let amount of expenses){
  if( amount<minExp) {
      minExp=amount
  }
}console.log(minExp);