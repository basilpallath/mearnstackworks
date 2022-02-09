 var Array=[10,10,20,20,30,30,30,40,40,40,50,50]
var out={}
Array.map(num=>num in out?out[num]+=1:out[num]=1)
console.log(out);