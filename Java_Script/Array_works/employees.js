var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
// var totalSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalSalary);
// var minimumSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2)
// console.log(minimumSalary);
// var maxSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
// console.log(maxSalary);

// var lowExpEmp=employees.reduce((e1,e2)=>e1[5]<e2[5]?e1:e2)
// console.log(lowExpEmp[1]);
// for(let emp of employees){
//     console.log(emp[1]);
// }
// console.log(employees.length);
// for(let emp of employees){
//     if(emp[2]=="developer"){
//         console.log(emp);
//     }
// }
// for(let emp of employees){
//     if(emp[4]>30000){
//         console.log(emp);
//     }
// }
// for(let emp of employees){
//     if(emp[1]="arjun"){
//         console.log(emp);
//     }

// }
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);
// employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employees);
// console.log(employees.map(emp=>emp[1]));
// console.log(employees.map(emp=>emp[5]));
var developer=employees.filter(emp=>emp[2]=="developer");
console.log(developer);