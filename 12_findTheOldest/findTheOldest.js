
const findTheOldest = function(people){
    let oldest = people.reduce(reducer);
    return oldest.name;
}


const todayDate = new Date();
const year = todayDate.getFullYear();

function ageMaker(array){
    if (array.yearOfDeath == undefined){
return year - array.yearOfBirth
    }
    else {
        return array.yearOfDeath - array.yearOfBirth
    }
}


reducer = function (currentValue,nextValue) {
return ageMaker(currentValue)>ageMaker(nextValue) ? currentValue : nextValue
}










// Do not edit below this line
module.exports = findTheOldest;
