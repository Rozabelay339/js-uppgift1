/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.
*/

/*while(true) { ... }

    This creates an infinite loop. It keeps prompting the user until they enter a valid shape. The loop is broken when a valid shape is entered using the break statement inside the loop.

let shape = prompt("Enter a shape")

    The prompt function asks the user to input a shape (circle, triangle, or rectangle). The input is stored in the variable shape.

if (shape == "circle") { ... }

    This checks if the entered shape is "circle". If true, the following code inside this block runs.

let radius = prompt("Enter radius of the circle")

    If the user entered "circle", they are prompted to enter the radius of the circle. The input is stored in the variable radius.

let result = Math.PI * radius ** 2 or let result = Math.pow(Math.PI * radius, 2)

    This calculates the area of the circle using the formula π * radius². You can either use the exponentiation operator ** or the Math.pow() function to raise the radius to the power of 2.

alert('The area of the ${shape} is ${result}')

    The alert function displays the area of the circle using the calculated result.

break;

    This stops the loop after a valid shape is processed.

else if (shape == "triangle") { ... }

    If the shape is "triangle", the code asks for the height and base of the triangle.

let result = (height * base) / 2

    The area of a triangle is calculated using the formula (height * base) / 2.

else if (shape == "rectangle") { ... }

    If the shape is "rectangle", the code asks for the height and base of the rectangle.

let result = height * base

    The area of a rectangle is calculated using the formula height * base.

else { alert("Please enter a valid shape") }

    If the user enters a shape that isn’t "circle", "triangle", or "rectangle", it prompts the user to enter a valid shape. */

/*
while (true){
   let shape = prompt("enter a shape").toLowerCase() 

   if(shape == "circle"){
    let radius = prompt("enter radius of the circle");
    let result = Math.PI * Math.pow(radius, 2);
    alert("the area of the" + shape + "is" + result +  ".");
    break;
   } else if (shape === "triangle") {
   let height = prompt("enter height of the triangle")
   let base = prompt("enter base of the triangle")
   let result = (height * base) / 2
   alert("The area of the" + shape + "is" + result + ".")
   break
   } else if (shape === "rectangle"){
    let height = prompt( "enter height of the rectangle")
    let width = prompt ("enter idth of the rectangle")
    let result = height * width
    alert("The area of the " + shape + "is" + result + ".")
    break
   } else {
    alert (" pleas enter a valid shape of circle, triangle and rectangle")
   }

}
*/



// Example 1: Calculate the Volume of a Sphere, Cylinder, or Cuboid

/*while(true) {
let shape = prompt("enter the shape").toLowerCase()
if( shape === "sphare"){
let radius = prompt("input the radius of the sphare");
let result = prompt(4 / 3) * Math.PI * Math.pow(radius, 3);
alert ("the volume of the" + shape + "is" + result + ".");
break;
}
}
*/


//Example 2: Calculate the Perimeter of Circle, Triangle, or Rectangle

while(true){
    let shape = prompt("enter the shape").toLowerCase()
    if(shape == "circle"){
        let radius = prompt("enter the radius of the circle");
        let result = 2 * Math.PI * radius;
        alert("perimeter of the "+ shape + "is" + result);
        break;
    }
    else if(shape == "triangle"){
        let side1 = prompt("Enter the first side of the triangle");
        let side2 = prompt("Enter the second side of the triangle");
        let side3 = prompt("Enter the third side of the triangle");
        let result = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
        alert("perimeter of the "+ shape + "is" + result);
        break;
    }
}












