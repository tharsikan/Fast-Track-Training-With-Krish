// modified selection sort
// if next minimum number's diffeent is != 1
// assumed only one missing number
let a = [7, 4, 10, 8, 2, 1, 3, 5];
let minIndx, n = a.length;
Array.prototype.swap = function (x,y) {
    var b = this[x];        // this refers Array instant (a)
    this[x] = this[y];
    this[y] = b;
    return this;
}
for (let i =0; i< n-1; i++){
    minIndx = i;
    for (let j = i+1; j < n; j++) {
        if(a[j]<a[minIndx]) minIndx = j;
    } 
    if(minIndx != i){
        a.swap(minIndx, i);
    }
    if(a[i]-a[i-1] != 1 && i!=0) console.log("missing element "+(a[i-1]+1));
}
console.log(a);