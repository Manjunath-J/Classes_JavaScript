// Private Fields

/** There are no Access Modifiers in JavaScript
 *  We can decalre private properties and achieve Encapsulation using '#'
 */

class Rectangle{
    #length;
    #breadth;

    // //trying to initialize
    // constructor(length,breadth){
    //     this.#length=length;
    //     this.#breadth=this.#breadth;
    // }

    //initializing private length
    set length(length){
        if (length>0) {
            this.#length=length;
        }
    }

    //initializing private breadth
    set breadth(breadth){
        if (breadth>0) {
            this.#breadth=breadth;
        }
    }

    //accessing the private length
    get length(){
        return this.#length;
    }

    //accessing the private breadth
    get breadth(){
        return this.#breadth;
    }
    
    area(){
        return this.#length * this.#breadth;
    }
}

const rect= new Rectangle();
rect.length=10;
rect.breadth=20;
console.log(rect.area());