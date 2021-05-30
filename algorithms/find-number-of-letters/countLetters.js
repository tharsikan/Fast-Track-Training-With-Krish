let sent = "I'm Studying These Days.";
let ar = [...sent];
let obj = {};
let key;
let count;
    
    
function counter(ar){
    key = ar[0].toLowerCase();
    count = 1;
    for (let j = 1; j < ar.length; j++) {
        if(key == ar[j].toLowerCase()){
            count++;
            ar.splice(j,1);
        }
    }
    ar.shift();
    obj[key] = count;
}
while(ar.length>0){
    counter(ar);
}

console.log(obj);