const reverseString = function(string) {
    let stringArray = string.split('');
    let reverse = '';
    let i = stringArray.length-1;
    while (i >= 0) {
        reverse = reverse + stringArray[i];
        i--;
        console.log(reverse);
    }

    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
