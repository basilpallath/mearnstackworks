arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]




// arr.flat().filter(num=>num>=10).forEach(n=>console.log(n));

// arr.flat().map(num=>num**2).forEach(n=>console.log(n));
// var sum=arr.flat().reduce((n1,n2)=>n1+n2)
// console.log(sum);
var highestElement=arr.flat().reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highestElement);
