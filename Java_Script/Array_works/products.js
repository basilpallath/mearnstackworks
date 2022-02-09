var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidenseek",50,0],
    [103,"moms",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,50],
    [106,"oreo",70,80]
]
// var highProduct=products.reduce((prd1,prd2)=>prd1[2]>prd2[2]?prd1:prd2)
// console.log(highProduct);
// var outofStock=products.reduce((val1,val2)=>val1[3]<val2[3]?val1:val2)
// console.log(outofStock);
// for(let items of products){
//     if(items[1]=="oreo"){
//         console.log(items);
//     }
// var available=products.some(p=>p[3]>50)
// console.log(available);
// var cost=products.some(p=> p[2]>=10 && p[2]<=20)
// console.log(cost);
// var cost=products.filter(p=> p[2]>=10 && p[2]<=20)
//  console.log(cost);
// products.forEach(p=>console.log(p[1]))
// console.log(products.map(items=>items[1]));
// console.log(products.filter(items=>items[2]<50));
// console.log(products.find(data=>data[1]=="oreo")[2]);
console.log(products.filter(data=>data[1]=="oreo"));