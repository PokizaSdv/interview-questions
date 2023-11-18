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
