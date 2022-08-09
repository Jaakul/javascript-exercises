const reverseString = function(string) {
    let splitString = string.split("");
    let newString = "";
for (let i=splitString.length-1;i>=0;i--){
newString += splitString[i];
}
return newString
};


// Do not edit below this line
module.exports = reverseString;
