const add = function(...y) {
	let sum= 0
  for (const argY of y){
    sum += argY;
  }
  return sum;
};

const subtract = function(x,...y) {
	let sum = x
  for (const argY of y){
    sum -= argY;
  }
  return sum;
};

const sum = function(arr) {
let total = 0
  for (let i = 0; i<arr.length;i++){
total += arr[i];
}
return total
};

const multiply = function(arr) {
  

    let total = 1
      for (let i = 0; i<arr.length;i++){
    total *= arr[i];
    
    }
    return total
};

const power = function(x,y) {
	let total
    total = x**y
    return total

};

const factorial = function(x) {
	let total = 1
  let arr = []
for (let i=1;i<=x;i++){
  arr.push(i);
}
for (let i=0;i<arr.length;i++){
  total *= arr[i]
}
return total;


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
