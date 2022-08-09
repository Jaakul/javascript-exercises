
const fibonacci = function(string) {

let num = Number(string);
let storage = 0
if(num === 1){
return 1
}
if(num === 2){
return 1
}
if(num === 3){
return 3
}
if(num>3){
const startArray = [1,1,2];
let array = startArray;
for (let i=2;i<=num+2;i++){
storage = array[i]+array[i-1]

//
array.push(storage);
//

}
return array[num-1];
}

else {
return "OOPS"
}
};
// Do not edit below this line
module.exports = fibonacci;

//1,1,2,3,5,8,13,21,34,55,89,144,
//1,2,3,4,5,6,07,08,09,10,11,012,13,14,15,
//0,1,2,3,4,5
