let newArray
let pushArray = []
let joinedArray = []

const caesar = function(string,num) {

const regex  = /[a-zA-Z]/
newArray = string.split('')
let fixedNum = num%26;

for (let i=0;i<newArray.length;i++){
    let letter = String.fromCharCode(newArray[i].charCodeAt(0))
    let letterPlusNum = String.fromCharCode(newArray[i].charCodeAt(0)+fixedNum)

//this checks if it's a punctuation
if (regex.test(letter) == true){


    //the letter with the number needs to be wrapped around the alphabet
    if (regex.test(letterPlusNum) == false){
            //shift function start//
            let shiftLetter = letter;
            console.log(shiftLetter);
            shifter = function(){
                shiftLetter = String.fromCharCode(shiftLetter.charCodeAt(0)+1)
                }
            for (let i = 0;i<fixedNum-1;i++){
                
                if (shiftLetter == "Z"){
                    shiftLetter = "A";
                    
                }

                shifter()    

            }
            
            pushArray.push(shiftLetter)





        
   





    }

    //this pushes the new letter into array because it
    //doesn't go out of range a-zA-Z
    else{
        pushArray.push(letterPlusNum)
    }  

}

//this pushes the punctuation
else {
pushArray.push(letter)
}

}
joinedArray= pushArray.join('')
//return joinedArray
console.log(joinedArray);
};


caesar("Z",51)
// Do not edit below this line
//module.exports = caesar;
