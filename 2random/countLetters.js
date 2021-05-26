let sent = "ata tajd ddma kama";
// for (const c of sent) {
//     console.log(c);
// }
let ar = [...sent];
let obj = {};
let key;
let count;
    
    
function counter(ar){
    key = ar[0];
    count = 1;
    for (let j = 1; j < ar.length; j++) {
        if(key == ar[j]){
            count++;
            ar.splice(j,1);
        }
    }
    ar.shift();
    // console.log(key + " appears " + count);
    obj[key] = count;
}
while(ar.length>0){
    counter(ar);
}

console.log(obj);