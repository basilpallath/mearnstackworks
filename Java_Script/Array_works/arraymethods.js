arr=[10,11,12,13,14]
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2);
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)