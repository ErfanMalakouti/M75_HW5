function Circle(radius) {
  return {
    radius: radius,
    calculatePerimeter() {
      return this.radius * 2 * Math.PI;
    },
    calculateArea() {
      return Math.pow(this.radius, 2) * Math.PI;
    },
  };
}
//Test:
let circle = new Circle();
console.log(circle);
//////////////////////////////////////////////////////////////
let circleTest = new Circle(5);
console.log(circleTest.calculatePerimeter());
//31.41
console.log(circleTest.calculateArea());
//78.53
