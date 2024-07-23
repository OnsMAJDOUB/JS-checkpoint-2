//Reverse a String:
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


//Count Characters:
function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("hello"));


//Capitalize Words:
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world")); 


//Array Functions:
//Find Maximum and Minimum:
function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}
const numbers = [1, 2, 3, 4, 5];
console.log(findMaximum(numbers)); 
console.log(findMinimum(numbers));


//Sum of Array:
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));


//Filter Array:
function filterArray(arr, condition) {
  return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2));

//Mathematical Functions
//Factorial:
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//Prime Number Check:
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(4));


//Fibonacci Sequence:
function fibonacci(n) {
  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }
  return fibSequence;
}
console.log(fibonacci(10));