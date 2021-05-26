let a = [15, 16, 6, 8, 5];
let temp, swaped = false, n = a.length;

for (let i =0; i< n-1; i++){
    swaped = false;
    for (let j = 0; j < n-1-i ; j++) {      // i'th pass no need last i comparitions
        if(a[j]>a[j+1]){
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
            swaped = true;
        }
    }
    if(!swaped) break;      // if there's no swap array is sorted, no need more pass
}
console.log(a);

let b = ["tharsi", "thulasi"];
let stTemp;
let len;
for (let i =0; i< n-1; i++){
    for (let j = 0; j < n-1-i ; j++) {
        // if(a[j]>a[j+1]){
        //     temp = a[j];
        //     a[j] = a[j+1];
        //     a[j+1] = temp;
        //     swaped = true;
        // }
        // if(typeof b[j] ==="string"){
        len = (b[j].length > b[j+1].length)?  b[j+1].length : b[j].length;
        for(let k=0; k<n; k++){  
            if(b[j].charCodeAt(k)>b[j+1].charCodeAt(k)){
                stTemp = b[j];
                b[j] = b[j+1];
                b[j+1] = stTemp;
            }else if(b[j].charCodeAt(k)=b[j+1].charCodeAt(k)){
                if(b[j].charCodeAt(1)=b[j+1].charCodeAt(1)){

                }
            }
        }
    }
}