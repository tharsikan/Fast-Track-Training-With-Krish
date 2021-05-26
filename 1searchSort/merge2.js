function merge(arr, lb, mid, ub)
{
	var n1 = mid - lb + 1;
	var n2 = ub - mid;

	var L = new Array(n1);
	var R = new Array(n2);  // create 2 arrays

	for (var i = 0; i < n1; i++)
		L[i] = arr[lb + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[mid + 1 + j];  // copy values to arrays

	var i = 0;
	var j = 0;
	var k = lb;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {     // compare L,R and copy smaller ements into arr
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	while (i < n1) {    // put remaining elements 
		arr[k] = L[i];
		i++;
		k++;
	}
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

export function mergeSort(arr,lb, ub){
	if(lb>=ub){
		return;
	}
    var m =lb+ parseInt((ub-lb)/2);
	// var m =Math.flboor((ub + lb) / 2);
	mergeSort(arr,lb,m);
	mergeSort(arr,m+1,ub);
	merge(arr,lb,m,ub);
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);