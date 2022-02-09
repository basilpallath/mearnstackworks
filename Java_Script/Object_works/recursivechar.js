var pattern="ABABBC"
var wc={}
for(let char of pattern){
        if(char in wc){
            
    console.log(`${char} is first recrusive character`);
    break
        }
        else{
           wc[char]=1
        }
    }