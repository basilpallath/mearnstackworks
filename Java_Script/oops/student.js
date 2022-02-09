// class student{
//     setstudentDetails(rollno,st_name,course,duration){
//         this.rollno=rollno
//         this.studentName=st_name
//         this.course=course
//         this.duration=duration
//     }
//     printstudentDetails(){
//         console.log(this.rollno,this.studentName,this.course,this.duration);
//     }
// }
// var st=new student()
// st.setstudentDetails(1,"basil","ms",5)
// st.printstudentDetails()
class student{
    constructor(rollno,st_name,course,duration){
        this.rollno=rollno
        this.studentName=st_name
        this.course=course
        this.duration=duration
    }
    printstudentDetails(){
        console.log(this.rollno,this.studentName,this.course,this.duration);
    }
}
var st=new student(1,"basil","ms",5)
st.printstudentDetails()