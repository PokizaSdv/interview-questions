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
