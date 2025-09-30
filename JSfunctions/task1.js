//function declaration
function rectangleArea1(width1, height1) {
  return width1 * height1;
}
console.log("Площа прямокутника:", rectangleArea1(5, 10));

//function expression
const rectangleArea2 = function (width2, height2) {
  return width2 * height2;
};
console.log("Площа прямокутника:", rectangleArea2(7, 12));

//arrow function
const rectangleArea3 = (width3, height3) => width3 * height3;
console.log("Площа прямокутника:", rectangleArea3(9, 14));
