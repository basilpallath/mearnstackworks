var arr=[10,11,12,13,14,15,16,17]
var low=0, upp=arr.length-1,flag=0
var element=13
var count=1
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(element>arr[mid]){
        low=mid+1
    }
    if(element<arr[mid]){
        upp=mid-1
    }
    if(element==arr[mid]){
        flag=1
        break
    }
    count++
}
console.log(flag==0?"enf":"ef");
console.log(count);