const removeFromArray = function(arr, ...remove) {
    for (let i = 0; i < remove.length; i++) {
        for (let l = 0; l < arr.length; l++) {
            if (arr[l] === remove[i]) {
                arr.splice(l , 1);
            }
        }
    }

    return arr;


};

// Do not edit below this line
module.exports = removeFromArray;
