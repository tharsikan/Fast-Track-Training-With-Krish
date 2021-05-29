function bubbleSort(array){
    let n = array.length, temp, swaped = false;
    for (let i =0; i< n-1; i++){
        swaped = false;
        for (let j = 0; j < n-1-i ; j++) {      // i'th pass no need last i comparitions
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swaped = true;
            }
        }
        if(!swaped) break;      // if there's no swap array is sorted, no need more pass
    }
    return array;
}

let sortLen=3, temp, swaped = false;
function swapWord(arr, i, k){
    if(arr[i+1] && k<sortLen && i<arr.length-1){
        sortLen = arr[i].length > arr[i+1].length?  arr[i+1].length : arr[i].length;
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

// let b = ["Emily","Hannah","Abcdzccaa","Abcdxbb","Abcdya","Madison","Ashley","Sarah","Alexis","Emily","Hannah","Madison","Samantha","Jessica","Elizabeth","Taylor"]
// console.log(bubbleSortString(b));
function bubbleSortString(array){
    for (let j =0; j< array.length-1; j++){
        let  i =0, k = 0;
        swapWord(array,i,k);
    }
    return array;
}
export {bubbleSort, bubbleSortString};