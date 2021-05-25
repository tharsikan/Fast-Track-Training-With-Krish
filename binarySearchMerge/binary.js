import {mergeSort} from './merge2';
// function binarySearch(arr, length, data){
//     let l =0; 
//     let r = length-1; 
//     let mid   = Math.floor((l + r) / 2);
//     if(data == arr[mid]) return mid;
//     else if(data < arr[mid]) r = mid - 1;
//     else l = mid + 1;
//     return -1;
// }
function binarySearch(sortedArray, data){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === data) {
            // found the data
            return middle;
        } else if (sortedArray[middle] < data) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// data wasn't found
    return -1;
}
var arr = [ 12, 11, 13, 5, 6, 7 ];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);
console.log(binarySearch(mergeSort(arr, 0, arr.length - 1), 11));
var movies = [
    "ACADEMY DINOSAUR",
    "ACE GOLDFINGER",
    "ADAPTATION HOLES",
    "AFFAIR PREJUDICE",
    "BENEATH RUSH",
    "BERETS AGENT",
    "BETRAYED REAR",
    "BEVERLY OUTLAW",
    "BIKINI BORROWERS",
    "YENTL IDAHO",
    "YOUNG LANGUAGE",
    "YOUTH KICK",
    "ZHIVAGO CORE",
    "ZOOLANDER FICTION",
    "ZORRO ARK"
];
console.log(binarySearch(movies, "BIKINI BORROWERS"));