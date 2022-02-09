class Parent{
    bike(){
        console.log("passion");
    }
}
class Child extends Parent{
    bike(){
        console.log("duke");
    }
}
var ch=new Child()
ch.bike()