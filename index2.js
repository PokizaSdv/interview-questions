// Create a function that takes an array of numbers, and target number. Check if two numbers can be added and get the target sum. Do not use nested loops, arrays, includes, indexOf methods. Use objects.
// [1, 4, 5, 6], 8 => false
// [1,3,7,8,0,4], 7 => true;

function targetSum(nums, target) {
    const numObj = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const difference = target - currentNum;
        if (numObj[difference]) {
            return true;
        }
        numObj[currentNum] = true;
    }
    return false;
}

// console.log(targetSum([1, 3, 7, 8, 0, 4], 7));
// console.log(targetSum([1, 4, 5, 7], 8));
// console.log(targetSum([1, 4, 5, 6], 8));

function targetSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return true;
            }
        }
    }
    return false;
}
// console.log(targetSum1([1, 3, 7, 8, 0, 4], 7));
// console.log(targetSum1([1, 4, 5, 7], 8));
// console.log(targetSum1([1, 4, 5, 6], 8));

//  I was thinking about this approach as well, but it checks if ONLY  adjacent index numbers are can be added to get target:
function targetSum2(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return true;
        }
    }
    return false;
}
// console.log(targetSum2([1, 3, 7, 8, 0, 4], 7));
// console.log(targetSum2([1, 4, 5, 7], 8));
// console.log(targetSum2([1, 4, 5, 6], 8));
// console.log(targetSum2([1, 7, 5, 6], 8));

// Create a function, it takes a string. in Input first 4 characters should be letters, next 7 characters. It would consist only digits and letters, both, or one of them. They will in order, it means, you will not mixed ones:

// Input 123=> ZZZZ1230000
// Input A => ZZZA0000000
// Iput B12 => ZZZB1200000
// Input AB => ZZAB0000000
// Input AAB123 => ZAAB1230000
// Output XXXX1234567

// function elevenCharStr(str) {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     let result = "";

//     for (let i = 0; i < 4; i++) {
//         if (letters.includes(str[i])) {
//             result += str[i].toUpperCase();
//         } else {
//             result = result + "Z";
//         }
//         for (let i = 4; i <= 10; i++) {
//             if (numbers.includes(str[i])) {
//                 result += str[i];
//             } else {
//                 result += "0";
//             }
//         }
//     }

//     return result;
// }

function elevenCharStr(str) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers = "0123456789";

    let result1 = "";

    let result2 = "";

    for (let i = 0; i < 4; i++) {
        if (letters.includes(str[i])) {
            result1 += str[i].toUpperCase();
        } else {
            result1 += "Z";
        }
    }

    for (let i = 4; i < 11; i++) {
        if (numbers.includes(str[i])) {
            result2 += str[i];
        } else {
            result2 += "0";
        }
    }

    return result1 + result2;
}
console.log(elevenCharStr("123")); //ZZZZ1230000
console.log(elevenCharStr("A")); // AZZZ0000000
console.log(elevenCharStr("B1234")); //BZZZ1234000
console.log(elevenCharStr("AB")); //ABZZ0000000
console.log(elevenCharStr("AAB123")); //AABZ1230000

// Create a function that takes braces as string and returns true if braces are valid, otherwise false.
// Hint. Use Array, push, pop methods

function checkCurlyBracesValidity(braces) {
    let stack = [];

    let openingBrace = ["{"];

    let closingBrace = ["}"];

    for (let i = 0; i < braces.length; i++) {
        if (openingBrace.includes(braces[i])) {
            stack.push(braces[i]);
        } else if (closingBrace.includes(braces[i])) {
            let lastOpeningBrace = stack.pop();

            if (braces[i] === "}" && lastOpeningBrace !== "{") {
                return false;
            }
        }
    }

    return stack.length === 0;
}
// console.log(isValidCurlyBraces("{}{}{}{"));

// Create a function that takes an array of numbers. Return  two largest one in array [firstLargest, secondLargest];
// // Input [1, 6, 3, 9, 0, -10, 100]
// [100, 9]

function twoLargest(arr) {
    let firstLargest = 0;
    let secondLargest = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
    }
    return [firstLargest, secondLargest];
}
console.log(twoLargest([1, 6, 3, 9, 0, -10, 100]));
console.log(twoLargest([110, 60, -3, 90, 98, 100]));

// Create a function, that takes an array of that tags. Return true if they have valid order and syntax, structure. Otherwise, return false
// Valid: [<section>, </section>, <div>, </div>]
// Invalid: [<a>, <div>, </a>, </div>]
const isOpeningTag = (tag) => {
    return tag[1] !== "/";
};

const convertToOpeningTag = (closingTag) => {
    return closingTag[0] + closingTag.slice(2);
};

const isHtmlValid = (tags) => {
    const holder = [];
    for (const tag of tags) {
        if (isOpeningTag(tag)) {
            holder.push(tag);
        } else {
            const lastTag = holder.pop();
            const openingTag = convertToOpeningTag(tag);

            if (lastTag !== openingTag) {
                return false;
            }
        }
    }

    return holder.length === 0;
};
console.log(isHtmlValid(["<section>", "</section>", "<div>", "</div>"])); // true

console.log(isHtmlValid(["<a>", "<div>", "</a>", "</div>"])); // false

// function checkValidity(tags) {
//     const stack = [];

//     for (let i = 0; i < tags.length; i++) {
//         const tag = tags[i];

//         if (tag.startsWith("</")) {
//             if (stack.length === 0) {
//                 return false; // Invalid: closing tag without corresponding opening tag
//             }

//             const openingTag = stack.pop();

//             if (openingTag !== tag.slice(2, -1)) {
//                 return false; // Invalid: mismatched opening and closing tags
//             }
//         } else if (tag.startsWith("<")) {
//             stack.push(tag.slice(1, -1));
//         }
//     }

//     return stack.length === 0; // Valid if all opening tags have corresponding closing tags
// }

// console.log(checkValidity(["<section>", "</section>", "<div>", "</div>"])); // true

// console.log(checkValidity(["<a>", "<div>", "</a>", "</div>"])); // false

// function checkTagValidity(tags) {
//     const stack = [];
//     const openingTags = new Set(["<section>", "<div>"]);
//     const closingTags = new Set(["</section>", "</div>"]);

//     for (let tag of tags) {
//         if (openingTags.has(tag)) {
//             stack.push(tag);
//         } else if (closingTags.has(tag)) {
//             const openingTag = stack.pop();

//             if (!openingTag || openingTag !== tag.replace("/", "")) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }

// const validTags = ["<section>", "</section>", "<div>", "</div>"];

// console.log(checkTagValidity(validTags)); // Output: true

// const invalidTags = ["<a>", "<div>", "</a>", "</div>"];

// console.log(checkTagValidity(invalidTags)); // Output: false

// Create a function, that takes a astring, each char of string is brace, <(){}[]>. You have to return true if bracescare valid, otherwise false.
// "{}[()]" => Valid
// "[}" => Not Valid
// "[{]}" => No Valid
// "{{}}[()](" => Not Valid

function areBracesValid(braces) {
    let holder = [];
    let openingBraces = "({[";
    // let closingBraces = ")}]";

    for (let i = 0; i < braces.length; i++) {
        if (openingBraces.includes(braces[i])) {
            holder.push(braces[i]);
        } else {
            let lastBrace = holder.pop();

            if (
                (braces[i] === ")" && lastBrace !== "(") ||
                (braces[i] === "]" && lastBrace !== "[") ||
                (braces[i] === "}" && lastBrace !== "{")
            ) {
                return false;
            }
        }
    }

    return holder.length === 0;
}

console.log("________________________");
console.log(areBracesValid("{}[()]"));
console.log(areBracesValid("[}"));
console.log(areBracesValid("[{]}"));
console.log(areBracesValid("{{}}[()]("));
