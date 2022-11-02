const palindromes = function (sentence) {
    let array = sentence.split('');

    function isCharacterALetter(char) { 
        return (/[a-zA-Z]/).test(char);
    }
    
    const aLength = array.length - 1;
    
    let endCounter = aLength;
    
    for (let i = 0; i < aLength; i++) {
        while (isCharacterALetter(array[endCounter]) === false) {
            // console.log(`${array[endCounter]} is not a letter`);
            endCounter--;
        }

        while (isCharacterALetter(array[i]) === false) {
            console.log(`${array[i]} is not a character so we skip it`);
            i++;
            console.log(`${array[i]} is the next character`);
        }   

        
        if (array[i].toLowerCase() != array[endCounter].toLowerCase()) {
            return false;
        }
        else {
            endCounter--;
        }
        }

    return true;

}


palindromes('Animal loots foliated detail of stool lamina.');

// Do not edit below this line
module.exports = palindromes;
