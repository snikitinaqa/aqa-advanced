

//function declaration
function getRectangleArea(width , height) {
    if (width <= 0 || height <= 0) {
        return "Width and height must be positive numbers.";
    }
  return width * height;
}
console.log("Rectangle Area:", getRectangleArea(5, 10));

//function expression
const getRectangleAreaExpression = function(width , height) {
    if (width <= 0 || height <= 0) {
        return "Width and height must be positive numbers.";
    }
  return (width * height);
};
console.log("Rectangle Area (Expression):", getRectangleAreaExpression(5, 10));  

//arrow function
const getRectangleAreaArrow = (width , height) => {
    if (width <= 0 || height <= 0) {
        return "Width and height must be positive numbers.";
    }
  return width * height;
};
console.log("Rectangle Area (Arrow):", getRectangleAreaArrow (5, 10));    