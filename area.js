/*
rectangle: length × width
triangle: base × height / 2
circle: π × radius2
*/


function calculateRectangleArea(length, width){
let undefined;
  if(length < 0 || width < 0){
    return undefined;
  }

let area = length * width;
return area;
}


function calculateTriangleArea(base, height){
let undefined;
  if(base < 0 || height < 0){
    return undefined;
  }

let area =  base * height / 2;
return area;

}

function calculateCircleArea(radius){
let undefined;
  if(radius < 0){
    return undefined;
    }

let pi = Math.PI;
let area = pi * radius * radius; 

 

return area;

}




console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));