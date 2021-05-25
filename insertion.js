let a = [5, 4, 10, 1, 6, 2];
let temp, swaped = false, n = a.length, j;

for (let i =1; i< n; i++){
    temp = a[i];
    j = i-1;
    while (j>=0 && a[j]>temp) {  
        a[j+1] = a[j];
        j--;
    }
    a[j+1] = temp;
}
console.log(a);
