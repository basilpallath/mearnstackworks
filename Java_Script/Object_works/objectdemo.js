var student={
    roll_no:1000,
    st_name:"basil",
    course:"ms",
    total:450
}
// console.log(student.st_name);
// console.log(student.course);
// console.log(student.total);
// console.log("gender"in student);
// student["gender"]="male"
// console.log(student);
// student.isVaccinated="true"
// console.log(student);
// student.vaccine="covishield"
// console.log(student);
// student.vaccine="co-vaxin"
// console.log(student);
// student.total=500
// console.log(student);
// student.total+=50
// console.log(student);
for(var key in student){
    console.log(key);
    console.log(student[key]);
}