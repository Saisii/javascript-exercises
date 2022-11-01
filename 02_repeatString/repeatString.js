const repeatString = function(string, num) {
    let sentence = "";
    if (num < 0) {
        return "ERROR";
    }
    else {
        while (num >= 1) {
            sentence = sentence + string;
            num--;
            // console.log(sentence);
        }
        return sentence;
    }
};

// Do not edit below this line
module.exports = repeatString;
