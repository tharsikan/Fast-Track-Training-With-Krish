let a = [15, 16, 6, 8, 5];
let temp;
// modified bubble sort
// bubbleUp three times... get a[a.length-3]
class ThirdLargeAlgo{
    #array = [];
    constructor(array){
        if(array.length>3 && typeof array === 'object') 
        {
            this.#array = array;
        }
        else{
            throw 'array should have at least 3 numbers';            // _array like private variable (encapsulation)
        }                                   // can only accessed by get/ set (thirdLarge.array is not here to access it :)
    }
    static #thirdLarge(){           // static private common to all instance & not access to outside
        let n = ThirdLargeAlgo.#array.length;
        for (let i =0; i< 3; i++){  
            for (let j = 0; j < n-1-i ; j++) {    
                if(array[j]>array[j+1]){
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    swaped = true;
                }
            }
        }
    }

    get array(){                            // thirdLargeAlgo.array
        ThirdLargeAlgo.#thirdLarge();
        return this.#array;
    }
    set array(array){                            // thirdLargeAlgo.array = [4, 14, 4]
        if(array.length>3 && typeof array === 'object') {
            this.#array = array;
        }
        else{
            throw 'array should have at least 3 numbers';         
        } 
    }
}

try {
    let thirdLargeAlgo = new ThirdLargeAlgo([2,5,6,4]);
    console.log(thirdLargeAlgo.array);
    // thirdLargeAlgo.array=[34,65];
    // console.log(thirdLargeAlgo.#array);
} catch (error) {
    console.log(error);
}

// console.log(a[a.length-3]);