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

    get thirdLarge(){ 
        let num = ThirdLargeAlgo.#thirdLargeAlgo.call(this);
        return num;
    }
    set array(array){
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
    console.log(thirdLargeAlgo.thirdLarge);
    
} catch (error) {
    console.log(error);
}
