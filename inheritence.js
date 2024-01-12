// Inheritence

/** Passing the properties of base class to a derived class */

// extend --> keyword

//Base class
class Animal{
    eat(){
        console.log("Eats..");
    }
    sleep(){
        console.log("Sleeps...");
    }
}

//Derived class
class Dog extends Animal{
    walk(){
        console.log("Dog walk");
    }
}

const dog= new Dog();
dog.eat();
dog.walk();