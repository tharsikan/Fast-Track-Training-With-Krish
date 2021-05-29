let subject = 'apple Come';
let anagram = 'People cam';
// use letteters exactly once
// 1. letter count not mutch, sum of assci not mutch ==> not annagram
// 2. use the letter count .. then compare objects.


function counter(ar,obj){
    key = ar[0].toLowerCase();
    count = 1;
    for (let j = 1; j < ar.length; j++) {
        if(key == ar[j].toLowerCase()){
            count++;
            ar.splice(j,1);
        }
    }
    ar.shift();
    // console.log(key + " appears " + count);
    obj[key] = count;
}


function checkAnagram(str1, str2){
    let count1=0, count2=0;
    if(str1.length != str2.length) return false;
    // for (const key in str1) {
    //     if(str1.charCodeAt(key) >= 97 && str1.charCodeAt(key) <= 122){
    //         count1 += str1.charCodeAt(key)-32;
    //     }
    //     else{
    //         count1 += str1.charCodeAt(key);
    //     }
    //     if(str2.charCodeAt(key) >= 97 && str2.charCodeAt(key) <= 122){
    //         count2 += str2.charCodeAt(key)-32;
    //     }
    //     else{
    //         count2 += str2.charCodeAt(key);
    //     }
    // }   
    // console.log(count1, count2);
    // if(count1 != count2) return false;
    

    let arr1 = [...str1];
    let arr2 = [...str2];
    let obj1 = {};
    let obj2 = {};
    let key;
    let count;
    while(arr1.length>0){
        counter(arr1,obj1);
    }
    while(arr2.length>0){
        counter(arr2,obj2);
    }
    // console.log(obj1);
    // console.log(obj2);
    return shallowEqual(obj1, obj1); 
}
function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
}
console.log(checkAnagram(subject,anagram));