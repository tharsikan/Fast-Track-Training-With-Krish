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