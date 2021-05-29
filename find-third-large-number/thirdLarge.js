// modified bubble sort
// bubbleUp three times... get a[a.length-3]
class ThirdLargeAlgo{
    #array;
    constructor(array){
        if(array.length>3 && typeof array === 'object') 
        {
            this.#array = array;
        }
        else{
            throw 'array should have at least 3 numbers';            
        }                                   
    }
    // _array like private variable (encapsulation)
    // can only accessed by get/ set (thirdLarge.array is not here to access it :)
    // ... old way to private 


    // static private common to all instance & not access to outside
    // dont need to copy code to all instance, can't access outside class
    static #thirdLargeAlgo(){           
        let n = this.#array.length;
        let swaped = false;
        let temp;
        for (let i =0; i< 3; i++){  
            for (let j = 0; j < n-1-i ; j++) {    
                if(this.#array[j]>this.#array[j+1]){
                    temp = this.#array[j];
                    this.#array[j] = this.#array[j+1];
                    this.#array[j+1] = temp;
                    swaped = true;
                }
            }
        }
        return this.#array[this.#array.length-3];

    }

    get thirdLarge(){                            // thirdLargeAlgo.array
        // this.thirdLarge();
        let num = ThirdLargeAlgo.#thirdLargeAlgo.call(this);
        return num;
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
    // console.log(ThirdLargeAlgo.thirdLarge());
    console.log(thirdLargeAlgo.thirdLarge);
    //console.log(ThirdLargeAlgo.thirdLarge.call(thirdLargeAlgo)); 
    
} catch (error) {
    console.log(error);
}
