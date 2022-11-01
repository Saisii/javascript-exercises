const sumAll = function(first, last) {
    if (typeof first != 'number' || typeof last != 'number') {
        console.log(typeof first);
        console.log(typeof last);
        return 'ERROR';
    }
    
    else if (first < 0 || last < 0) {
        console.log('2');
        return 'ERROR';
    }
    
    else if (first < last) {
        let sum = first;
        while (first < last) {
            first++;
            sum += first;
        }
        return sum;
    }

    else if (first > last) {
        let sum = last;
        while (last < first) {
            last++;
            sum += last;
        }
        return sum;
    }


};

// Do not edit below this line
module.exports = sumAll;
