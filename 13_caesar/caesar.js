const regex  = /[a-zA-Z]/


const caesar = function(string,preNum) {
    let newString = ''
let num = preNum%26;
//reference-- String.fromCharCode(string.charCodeAt(i))


//this container "for" loop will go through each individual character
for (let i=0;i<string.length;i++){

    let letter = String.fromCharCode(string.charCodeAt(i))
//this check if char falls into my regexp **PRE** shift
if (regex.test(String.fromCharCode(string.charCodeAt(i)))==true){

    //shifter function
    // (+) number
    if(num>0){
  


    for (let z=0;z<num;z++){
        
        if (String.fromCharCode(letter.charCodeAt(0))=="Z"){
            letter = "A"
            letter = String.fromCharCode(letter.charCodeAt(0)-1)

        }
        if (String.fromCharCode(letter.charCodeAt(0))=="z"){
            letter = "a"
            letter = String.fromCharCode(letter.charCodeAt(0)-1)
        }
/* due to the nature of if/else ,, this would fail without
the following --placeholder if statement-- because the *if* 
statement before the last else statement must be false before 
it runs the final else statement, which we need
MUST FIND A WAY TO SOLVE THIS
*/

        if (letter == Number){}
        else {letter = String.fromCharCode(letter.charCodeAt(0)+1)}
    }
    newString += letter;

    
    
    
    
}
    // (-) number
    /* must find a way to consolidate whether the num is +/-*/
    
    else{

    for (let y=0;y>num;y--){
        if (String.fromCharCode(letter.charCodeAt(0))=="A"){
            letter = "Z"
            letter = String.fromCharCode(letter.charCodeAt(0)+1)
            
        }
        if (String.fromCharCode(letter.charCodeAt(0))=="a"){
            letter = "z"
            letter = String.fromCharCode(letter.charCodeAt(0)+1)
        }
        if (letter == Number){}
        else {letter = String.fromCharCode(letter.charCodeAt(0)-1)}
    }
    newString += letter;
 
    }



    





}














//this prints to newString if does not fall into my regexp
else {newString+=String.fromCharCode(string.charCodeAt(i))}
}








return newString
}


//caesar("XXX  ...",+3)

module.exports = caesar;
