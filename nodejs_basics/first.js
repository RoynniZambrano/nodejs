

var {add, add2} = require('./add.js');


function greet(name){
    console.log("hello there, " + name + "!");
}


greet("Roy");
console.log("add:"  + add(1,2));
console.log("add2:" + add2(1,2));
