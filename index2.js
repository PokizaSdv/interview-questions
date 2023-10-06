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

console.log(targetSum([1, 3, 7, 8, 0, 4], 7));
console.log(targetSum([1, 4, 5, 7], 8));
console.log(targetSum([1, 4, 5, 6], 8));

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
console.log(targetSum1([1, 3, 7, 8, 0, 4], 7));
console.log(targetSum1([1, 4, 5, 7], 8));
console.log(targetSum1([1, 4, 5, 6], 8));

//  I was thinking about this approach as well, but it checks if ONLY  adjacent index numbers are can be added to get target:
function targetSum2(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return true;
        }
    }
    return false;
}
console.log(targetSum2([1, 3, 7, 8, 0, 4], 7));
console.log(targetSum2([1, 4, 5, 7], 8));
console.log(targetSum2([1, 4, 5, 6], 8));
console.log(targetSum2([1, 7, 5, 6], 8));

// Create a function, it takes a string. in Input first 4 characters should be letters, next 7 characters. It would consist only digits and letters, both, or one of them. They will in order, it means, you will not mixed ones: X12X
// Output XXXX1234567

// Input 123=> ZZZZ1230000
// Input A => ZZZA0000000
// Iput B12 => ZZZB1200000
// Input AB => ZZAB0000000
// Input AAB123 => ZZAB1230000
// Output XXXX1234567

function elevenCharStr(str) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let result = "";

    for (let i = 0; i < 4; i++) {
        if (letters.includes(str[i])) {
            result += str[i].toUpperCase();
        } else {
            result = result + "Z";
        }
        for (let i = 4; i <= 10; i++) {
            if (numbers.includes(str[i])) {
                result += str[i];
            } else {
                result += "0";
            }
        }
    }

    return result;
}
console.log(elevenCharStr("123"));
console.log(elevenCharStr("A"));
console.log(elevenCharStr("B1234"));
console.log(elevenCharStr("AB"));
console.log(elevenCharStr("AAB123"));

// Create a function that takes braces as string and returns true if braces are valid, otherwise false.
// Hint. Use Array, push, pop methods

const isValidCurlyBraces = (braces) => {
    let result = [];
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "{") {
            result.push(braces[i]);
        } else {
            result.length === 0;
        }

        let lastElement = result.pop();
        if (lastElement === "{" && braces[i] !== "}") {
            return false;
        }
    }
};
console.log(isValidCurlyBraces("{}{}{}{"));
