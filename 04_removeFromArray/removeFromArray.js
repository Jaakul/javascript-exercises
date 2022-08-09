const removeFromArray = function(...args) {
const array = args[0]
return array.filter(
    function (x){
 
    return !args.includes(x)}
    
    )
}
// Do not edit below this line
module.exports = removeFromArray;
