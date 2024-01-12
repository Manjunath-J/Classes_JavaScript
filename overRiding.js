// Method Overriding

/** child class modifying the properties that is derived from Parent class */

class Animal{
    eat(){
        console.log("Animal Eats..");
    }
    sleep(){
        console.log("Animal Sleeps..");
    }
}

class Tiger extends Animal{
    // method overriding
    eat(){
        console.log("Tiger eats Meat..");
    }
}

class Cow extends Animal{
    // method overriding
    eat(){
        console.log("Cow eats plants..");
    }
}

const tiger= new Tiger();
const cow= new Cow();

tiger.sleep();
tiger.eat();

cow.sleep();
cow.eat();