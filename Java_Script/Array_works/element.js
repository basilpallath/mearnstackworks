// var array=[0,10,20,30,40,50]
// var element=30
// var flag=0
// for(let numbers of array){
//     if(numbers==element){
//         flag=1
//         break
//     }
    
// }
// console.log(flag==0?"not found":"element found");
var array=[0,10,20,30,40,50]
 var element=30
  var flag=0
  for(let index in array){
      if(element==array[index]){
          console.log(index);
          flag=1
          break
      }
  }
  console.log(flag==0?"nf":"found");