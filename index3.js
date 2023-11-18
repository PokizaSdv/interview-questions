// Write a function that converts an array of strings into an array of objects with a property 'value' that contains the original string.

// [a, b, c], => [{value: a}, {value: b}, {value:c}];

const convertToObjArr = (strings) => {
    const arr = [];

    for (const str of strings) {
        arr.push({ value: str });
    }
    return arr;

    // return strings.reduce((acc, ele) => {
    //   acc.value = ele;
    //   return acc;
    // }, {})
};
console.log("_____________________________");
console.log(convertToObjArr([1, 2, 3, 4]));

// [1,2,3,4,5,6,7,8,9,10]
// Sum up array. but do not use loop
// 1, 2, 3 = 6; 3 * 4 / 2 = 6
// 1, 2, 3, 4 = 10; 4 * 5 / 2 = 10
// 1, 2, 3, 4, 5 = 15; 5 * 6  / 2 = 15;

// (n * (n +1) )/2

const sumUpArr = (arr) => {
    return (arr.length * (arr.length + 1)) / 2;
};
console.log("______________________________");
console.log(sumUpArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Write a JavaScript function that takes an array as input. This array can contain elements that are either numbers or arrays of numbers, but the arrays will not contain further nested arrays. The function should return a new array that is a flattened version of the input array, where all elements are at the root level.

function flattenArray(arr) {
    const flatten = [];
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            for (const num of ele) {
                flatten.push(num);
            }
        } else {
            flatten.push(ele);
        }
    }
    return flatten;
}
console.log("____________________________");
console.log(flattenArray([1, 2, 3, [4, 5]]));

function addTwoNumbers(l1, l2) {
    const result = [];
    let carry = 0;

    for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
        const digit1 = l1[i] || 0;
        const digit2 = l2[i] || 0;
        const sum = digit1 + digit2 + carry;

        result.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        result.unshift(carry);
    }

    return result;
}

console.log("____________________________");
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));