import {mergeSort} from './merge2';
function binarySearch(arr, length, data){
    let l =0; 
    let r = length-1; 
    let mid   = Math.floor((l + r) / 2);
    if(data == arr[mid]) return mid;
    else if(data < arr[mid]) r = mid - 1;
    else l = mid + 1;
    return -1;
}
var arr = [ 12, 11, 13, 5, 6, 7 ];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
console.log(binarySearch(arr, arr.length, 11));