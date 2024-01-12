/** In JavaScript Classes can be defined in Two ways */

//Class Declaration
class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    area() {
        return this.length*this.breadth;
    }
}

const R=new Rectangle(10,20);
console.log("Using Class Decalaration: ",R.area());


//Class Expression --> assign class to variable
const Rectangle1= class{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    area() {
        return this.length*this.breadth;
    }
}

const R1=new Rectangle(10,20);
console.log("Using Class Expression: ",R1.area());