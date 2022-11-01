const add = function(num1, num2) {
  return num1 + num2;

};

const subtract = function(num1, num2) {
	if (num1 >= num2) {
    return num1 - num2;
  }

  else {
    return num2 - num1;
  }

};

const sum = function(arr) {
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    numSum += arr[i];
    // console.log(numSum);
    
  }
	
  return numSum; 
};

const multiply = function(numbers) {
  let numMul = 1;
  for (let i = 0; i < numbers.length; i++) {
    numMul *= numbers[i];
  }

  return numMul;
};

const power = function(num, expon) {
  let numExp = 1;
  for (let i = 0; i < expon; i++) {
    numExp *= num;
  }

  return numExp;
	
};

const factorial = function(fact) {
  let numFact = 1;

  if (fact === 0) {
    return 1;
  }

  for (let i = 1; i <= fact; i++) {
    
    numFact *= i;
  }

    return numFact;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
