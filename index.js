// Task-1
const reverseString = (str) => {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
};
// console.log(reverseString("Hello World"));

// Task-2
const num = [2, -5, 10, -3, 7];
const sumOfPositiveNumbers = (numArr) => {
  const positiveNumber = numArr.filter((num) => num > 0);
  const sum = positiveNumber.reduce((prev, current) => prev + current, 0);
  return sum;
};

// console.log(sumOfPositiveNumbers(num));

// Task-3
const mostFrequentElementFinder = (arr) => {
  let frequencyMap = {};
  let maxElement = arr[0];
  let maxCount = 1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
    if (frequencyMap[element] > maxCount) {
      maxElement = element;
      maxCount = frequencyMap[element];
    }
  }
  return maxElement;
};
// console.log(mostFrequentElementFinder([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// Task-4
const sortedSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      return [left, right];
    } else if (target > sum) {
      left++;
    } else {
      right--;
    }
  }
  return `There are no numbers which sum is equal to ${target}`;
};

console.log(sortedSum([1, 3, 6, 8, 11, 15], 9));

// Task-5
const calculator = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
};
// console.log(calculator(1, 2, "/"));

// Task-6
const passwordGenerator = (lengthOfPassword) => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "1234567890";
  const symbol = "!@#$%&*()_+?><,.}{~`";
  const allChars = upperCase + lowerCase + number + symbol;
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (lengthOfPassword > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;
};

// console.log(passwordGenerator(10));

// Task-7
const romanToInteger = (roman) => {
  const numToRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = numToRoman[roman[i]];
    const next = numToRoman[roman[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};
// console.log(romanToInteger("V"));

// Task - 8
const secondSmallestElement = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
};
// console.log(secondSmallestElement([34, 10, 50, 20, 60]));
