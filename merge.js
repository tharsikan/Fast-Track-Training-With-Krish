let a = [15, 5, 24, 8, 1, 3, 16, 10, 20];
let b = [];
function mergeSort(a, lb, ub){
    if(lb < ub){
        let mid   = Math.floor((lb + ub) / 2);
        mergeSort(a, lb, mid);
        mergeSort(a, mid+1, ub);
        merge(a, lb, mid, ub);
    }
}
function merge(a, lb, mid, ub){
    let i = lb, j = mid+1, k=lb;
    while (i<=mid && j<= ub) {
        if (a[i]<=a[j]) {
            b[k] = a[i];
            i++;
        }
        else {
            b[k] = a[j];
            j++;
        }
        k++;
    }
    if(i>mid){
        while(j<=ub){
            b[k] = a[j];
            j++; k++;
        }
    }
    else{
        while(i<=mid){
            b[k] = a[i];
            i++; k++;
        }
    }
}

mergeSort(a, 0, a.length-1);
console.log(b);