// Static 

/** static method and properties are accessed by class itself and not on instance of class */

class Example{
    // Static property
    static pi = 3.14159;
  
    // Static method
    static multiply(x, y) {
      return x * y;
    }
  
    // Static method using the static property
    static circleArea(radius) {
      return this.pi * Math.pow(radius, 2);
    }
  }
  
  // Accessing static property
  console.log(Example.pi); 
  
  // Calling static method
  console.log(Example.multiply(5, 10)); 
  
  // Calling static method using the static property
  console.log(Example.circleArea(3)); 
  