var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]
// var redCateogeory=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(redCateogeory);
// console.log(coivd_data.map(p=>p[2]));
// console.log(coivd_data.map(data=>[data[1],data[2]]))
var idukkydetails=coivd_data.find(data=>data[1]=="iduky")[4]
console.log(idukkydetails);