const a = [7, 6, 10, 5, 9, 2,  1, 15, 7];
Array.prototype.swap = function (x,y) {
    var b = this[x];       
    this[x] = this[y];
    this[y] = b;
    return this;
}
function partition(a, lb, ub) {
    let start = lb, end = ub;
    let pivot = a[lb];
    // let pivot   = a[Math.floor((lb + ub) / 2)];
    while(start <= end){
        while(a[start] < pivot){
            start++;
        }
        while(a[end] > pivot){
            end--;
        }
        if(start <= end){
            a.swap(start, end);
            start++; end--;
        }
    }
    return start;
}

function quickSort(a, lb, ub) {
    var loc;
    if(a.length > 1){
        loc = partition(a,lb,ub);
        if (lb < loc - 1) quickSort(a, lb, loc-1);
        if (loc < ub) quickSort(a, loc+1, ub);
    }
}
quickSort(a, 0, a.length-1);
console.log(a);