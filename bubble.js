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


function swapWord(arr, i, k){
    if(arr[i+1] && k<sortLen && i<arr.length-1){
        sortLen = b[i].length > b[i+1].length?  b[i+1].length : b[i].length;
        if(arr[i].charCodeAt(k) == arr[i+1].charCodeAt(k)){
            // console.log("equal check next letters",i,k, arr[i], arr[i+1]);
            k++;
        }
        else if(arr[i].charCodeAt(k) > arr[i+1].charCodeAt(k)){
            // console.log("swap need ",i,k, arr[i], arr[i+1]); 
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            k=0; i++;
        }
        else{
            // console.log("no swap need",i,k, arr[i], arr[i+1]); 
            k=0; i++;
        };
        swapWord(arr,i,k);
    }   
}

let b = ["Emily","Hannah","Madison","Ashley","Sarah","Alexis","Emily","Hannah","Madison","Samantha","Jessica","Elizabeth","Taylor"]
let sortLen=0;
for (let j =0; j< b.length-1; j++){
    let  i =0, k = 0;
    swapWord(b,k,i);
}

console.log(b);