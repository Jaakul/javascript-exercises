const sumAll = function(x,y) {
    if (typeof y != 'number' || typeof x != 'number' || y<0 || x<0){
        return "ERROR";
    }
if (y>x){
let finalSum = 0
let newArray = [];
summarizer = function(){
    for (let i=y;i>=x;i--){
        newArray.push(i);
    }
}
adder = function (){
    for (let i = 0;i<newArray.length;i++){
finalSum += newArray[i];
    }
}
summarizer();
adder();

return finalSum;
}

if (x>y){
    let finalSum = 0
    let newArray = [];
    summarizer = function(){
        for (let i=x;i>=y;i--){
            newArray.push(i);
        }
    }
    adder = function (){
        for (let i = 0;i<newArray.length;i++){
    finalSum += newArray[i];
        }
    }
    summarizer();
    adder();
    
    return finalSum;
}




/*if (y>x){
    let finalSum = 0
    let newArray = [];
    (function summarizer(){
        for (let i=y;i>=x;i--){
            newArray.push(i);
        }
    })
    (function adder(){
        for (let i = 0;i<newArray.length;i++){
    finalSum += newArray[i];
        }
    })
*/
    
  












else {
    return "ERROR"
}

};

// Do not edit below this line
module.exports = sumAll;
