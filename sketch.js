var a=prompt("Enter a 1st no : ");
var b=prompt("ENter a 2nd  no :");

function setup() {
  createCanvas(400, 400);
  var b2=createButton("Swap");
b2.mousePressed(swap);
}

function draw() {
  background("yellow");
}
function swap(){
console.log("value of a before swapping",+a);
console.log("value of b before+ swapping",+b);
  [a,b] = [b,a];
console.log("value of a after swapping",+a);
console.log("value of b after swapping",+b);

}