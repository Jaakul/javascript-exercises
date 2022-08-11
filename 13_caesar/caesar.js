const regex  = /[a-zA-Z]/
let newString = ''

const caesar = function(string,preNum) {
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

        }
        if (String.fromCharCode(letter.charCodeAt(0))=="z"){
            letter = "a"
        }
        else {letter = String.fromCharCode(letter.charCodeAt(0)+1)}
    }
    newString += letter;

    
    
    
    
}
    // (-) number
    else{

    for (let y=0;y>num+1;y--){
        if (String.fromCharCode(letter.charCodeAt(0))=="A"){
            letter = "Z"
            
        }
        if (String.fromCharCode(letter.charCodeAt(0))=="a"){
            letter = "z"
        }
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
