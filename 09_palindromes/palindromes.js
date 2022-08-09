

const palindromes = function (myString) {
let arrFwd;
let arrBckwd = [];
let arrFwdFixed;
let arrBckwdFixed;

arrFwdUpper = myString.toUpperCase();
const regex = /[a-zA-Z]/g
arrFwd = arrFwdUpper.match(regex)
arrFwdFixed = arrFwd.toString('');

for (let i=arrFwd.length-1; i>=0;i--)
arrBckwd.push(arrFwd[i]);
arrBckwdFixed = arrBckwd.toString();


if ( arrFwdFixed===arrBckwdFixed){
    return true
}
else{
    return false
}

};

// Do not edit below this line
module.exports = palindromes;

