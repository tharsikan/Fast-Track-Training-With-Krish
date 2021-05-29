function insertionSort(array){
    let temp, swaped = false, n = array.length, j;
    for (let i =1; i< n; i++){
        temp = array[i];
        j = i-1;
        while (j>=0 && array[j]>temp) {  
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = temp;
    }
    return array;
}
export {insertionSort};