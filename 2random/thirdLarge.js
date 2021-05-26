let a = [15, 16, 6, 8, 5];
let temp;
// modified bubble sort
// bubbleUp three times... get a[a.length-3]

for (let i =0; i< 3; i++){  
    for (let j = 0; j < n-1-i ; j++) {    
        if(a[j]>a[j+1]){
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
            swaped = true;
        }
    }
}
console.log(a[a.length-3]);