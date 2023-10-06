// Problem-1: Check if we can form a  Palindrome from given string
/*
  Create a function, isPalindromePossible, that takes a string and returns true if it is possible to rearrange its characters to form a palindrome.
  Input and Output examples:
  isPalindromePossible("eraccar"); // true, as characters can be arranged to form "racecar"
  isPalindromePossible("abcabc"); // true, as characters can be arranged to form "abccba", or "baccab"
  isPalindromePossible("abcba"); // true, as characters can be arranged to form "abcba", or "bacab" 
  */

function isPalindromePossible(string) {
    const charCount = {};
    for (const char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}
console.log(isPalindromePossible("eraccar"));
console.log(isPalindromePossible("abcabc"));

// Problem-2: Create an Instance Method to Shift an Array
/*
  Create an instance method of Array, myShift, that takes a value and pushes it to the beginning of the array without using the unshift method.
  Input and Output examples:
  const arr = [1, 2, 3];
   arr = [1, 2, 3, 4], [1, 2, 4, 3] => [1, 4, 2, 3] => [4, 1, 2, 3]
  arr.myShift, (4); // [4, 1, 2, 3]
*/
function myShift(arr, value) {
    arr.push(value);

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr;
}
console.log(myShift([1, 2, 3], 4));

// Problem-3: Remove a Value from an Array
/*
  Create a function, myRemove, that takes an array and a  value and removes it from the array. Do not use splice, slice, indexOf, includes. You can use pop method only if required. You should do operation on given array and return the given array. DO NOT CREATE a new array
  Input and Output examples:
  const arr = [1, 2, 3];
  arr.myRemove(2); // [1, 3]
*/

function myRemove(arr, value) {
    let foundIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        for (let i = foundIndex; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    return arr;
}

const arr = [1, 2, 3];
myRemove(arr, 2); // [1, 3]
console.log(arr);

// Problem-4: Create a Function to Generate Fibonacci Sequence
/*
  Create a function that takes a number and generates a sequence of Fibonacci numbers, returning them in an array. The first 2 numbers of array would be 0 and 1. 
  Input and Output examples:
  generateFibonacci(5); // [0, 1, 1, 2, 3]
  generateFibonacci(8); // [0, 1, 1, 2, 3, 5, 8, 13]
*/
function generateFibonacci(n) {
    const fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return fibonacciArray;
}

console.log(generateFibonacci(5));
console.log(generateFibonacci(8));

// Problem-5: Create a Function to Find Least Common Multiple
/*
  Create a function, lcm, that returns the lowest number which is a multiple of both inputs.
  Input and Output examples:
  lcm(2, 3); // 6
  lcm(6, 10); // 30
  lcm(24, 26); // 312
*/

function lcm(num1, num2) {
    for (let i = num1; i <= num1 * num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}
console.log(lcm(2, 3));
console.log(lcm(6, 10));
console.log(lcm(24, 26));

// Problem-6: Create a Function to Generate N Prime Numbers
/*
  Create a function, generatePrimes, that takes a positive integer n and returns an array containing the first n prime numbers.
  Input and Output examples:
  generatePrimes(3); // [2, 3, 5]
  generatePrimes(5); // [2, 3, 5, 7, 11]
*/
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function generatePrimes(n) {
    const primes = [];
    let maybePrime = 2;
    while (primes.length < n) {
        if (isPrime(maybePrime)) {
            primes.push(maybePrime);
        }
        maybePrime++;
    }
    return primes;
}
console.log(generatePrimes(5));
console.log(generatePrimes(7));

// Problem-7: Create a Function to Determine if a Target String Can Be Formed
/*
  Create a function, canFormTarget, that takes three strings: string1, string2, and target. Return true if the target string can be formed by combining characters from string1 and string2 without considering their order, without using any character more than it appears in string1 and string2, and without leaving any extra characters.
  Input and Output examples:
  canFormTarget("ab", "cd", "abcd"); // true
  canFormTarget("cat", "dog", "actdog"); // true
  canFormTarget("a", "b", "aa"); // false
  canFormTarget("a", "b", "abx"); // false
*/
// function canFormTarget(string1, string2, target) {
//     let combinedStrings = string1 + string2;
//     if (target.length !== combinedStrings.length) {
//         return false;
//     }
//     let chars = combinedStrings.split("");
//     for (const char of chars) {
//         if (!target.includes(char)) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(canFormTarget("ab", "cd", "abcd"));
// console.log(canFormTarget("a", "b", "aa"));
// console.log(canFormTarget("cat", "dog", "actdog"));
// console.log(canFormTarget("aae", "aaa", "aeeeee"));
