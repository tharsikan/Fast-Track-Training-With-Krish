Array.prototype.swap = function (x,y) {
    var b = this[x];        // this refers Array instant (a)
    this[x] = this[y];
    this[y] = b;
    return this;
}
function selectionSort(array){
    let minIndx, n = array.length;
    for (let i =0; i< n-1; i++){
        minIndx = i;
        for (let j = i+1; j < n; j++) {
            if(array[j]<array[minIndx]) minIndx = j;
        } 
        if(minIndx != i){
            array.swap(minIndx, i);
        }
    }
    return array;
}
export {selectionSort};
