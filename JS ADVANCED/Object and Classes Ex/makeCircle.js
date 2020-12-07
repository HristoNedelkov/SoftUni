class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    constructor(radius) {
        this.radius = radius
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(){
        return 2*Math.PI*this.radius;
    }
}

  
  
  // unquote and use run to test these cases:
  
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  