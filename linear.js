const a = [7, 6, 10, 5, 9, 2,  1, 15, 7];
function linearSearch(arr, data){ 
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == data){
            found = true;
            console.log('element is found at '+ i);
            break;
        }
    }
    if(!found) console.log('element is not found !!');
}
linearSearch(a, 15);