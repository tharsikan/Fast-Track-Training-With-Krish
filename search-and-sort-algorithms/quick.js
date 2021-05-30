const a = [7, 6, 10, 5, 9, 2,  1, 15, 7];
Array.prototype.swap = function (ind1,ind2) {
    var temp = this[ind1];       
    this[ind1] = this[ind2];
    this[ind2] = temp;
    return this;
}
function partition(array, lb, ub) {
    let start = lb, end = ub;
    let pivot = array[lb];
    // let pivot   = array[Math.floor((lb + ub) / 2)];
    while(start <= end){
        while(array[start] < pivot){
            start++;
        }
        while(array[end] > pivot){
            end--;
        }
        if(start <= end){
            array.swap(start, end);
            start++; end--;
        }
    }
    return start;
}

function quickSort(array, lb, ub) {
    var loc;
    if(array.length > 1){
        loc = partition(array,lb,ub);
        if (lb < loc - 1) quickSort(array, lb, loc-1);
        if (loc < ub) quickSort(array, loc+1, ub);
    }
}
quickSort(a, 0, a.length-1);
export {quickSort};