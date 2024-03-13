class complexNumber{
    // private valiable
    #real;
    #img;
    // constructor 
    constructor(r,i){
        this.#real = r;
        this.#img = i;
    }
    get real(){
        return this.#real;
    }
    get img(){
        return this.#img;
    }
// take direct value using # or using [getter method]
    // addComplexNumber(c2){
    //     this.#real += c2.#real;
    //     this.#img += c2.#img;
    // }
    addComplexNumber(c2){
        this.#real += c2.real;
        this.#img += c2.img;
    }

    display(){
        console.log("result",this.#real,"+ i",this.#img);
    }
}

 const c1 = new complexNumber(2,3);
 c1.display();
 const c2 = new complexNumber(3,4);
 c1.addComplexNumber(c2);
 c1.display()
//  console.log(c1);



