var arr=[2,3,4,5]
arr.sort((n1,n2)=>n1-n2)
var pairNum=1
var low=0,upp=arr.length-1
var flag=0
var curSum=0
while(low<upp){
    let CurSum=arr[low]+arr[upp]
    if(CurSum==pairNum){
        flag=1
        console.log(' pairs( $ {arr[low]},$ {arr[upp]})');
        break;
    }
    else if(curSum<pairNum){
        low++
    }
    else if(curSum>pairNum){
        upp--
    }
}
if(flag==0){
    console.log("no pairs found");
}