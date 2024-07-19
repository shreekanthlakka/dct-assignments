/**
 *
 * squareDigits(9119) ---> 811181
 * squareDigits(2483) ---> 416649
 */

// try using reduce function

console.log(
    "9119"
        .split("")
        .reduce((acc, val) => "" + acc + val * val, 0)
        .slice(1)
);
console.log(
    "2483"
        .split("")
        .reduce((acc, val) => "" + acc + val * val, 0)
        .slice(1)
);

function squareDigits(num) {
    return `${num}`
        .split("")
        .map((ele) => ele * ele)
        .join("");
}

// console.log(+squareDigits(9119));
// console.log(+squareDigits(2483));
// console.log(+squareDigits(3212));

/**
 *
 * reverse the word
 * revrseWords("the sky is blue")
 * reverseWords("hello world!")
 */

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("hello world!"));
// console.log(reverseWords("a good example"));

/**
 *
 * totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])
 *
 */

function totalVolume(arr) {
    return arr.reduce((acc, arr) => acc + arr.reduce((a, v) => a * v), 0);
}
// console.log(
//     totalVolume([
//         [4, 2, 4],
//         [3, 3, 3],
//         [1, 1, 2],
//         [2, 1, 1],
//     ])
// );
// console.log(
//     totalVolume([
//         [2, 3, 2],
//         [6, 6, 7],
//         [1, 2, 1],
//     ])
// );

// console.log(
//     totalVolume([
//         [2, 2, 2],
//         [2, 1, 1],
//     ])
// );
// console.log(totalVolume([[1, 1, 1]]));

/**
 * rev(5121) --->1215
 * rev(69)   --->96
 */

function rev(num) {
    return `${Math.abs(num)}`.split("").reverse().join("");
}

// console.log(rev(5121));
// console.log(rev(96));
// console.log(rev(-122157));

/**
 * matchLastItem(["res", "6hi", "g", "res6hig"])
 */

function matchLastItem(arr) {
    return (
        arr[arr.length - 1] ===
        arr.slice(0, arr.length - 1).reduce((acc, val) => "" + acc + val)
    );
}

// console.log(matchLastItem(["req", "6hi", "g", "req6hig"]));
// console.log(matchLastItem([1, 1, 1, "11"]));
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

/**
 * reverseAndNot(123) ---> 321123
 */

function reverseAndNot(num) {
    return `${num}`.split("").reverse().join("") + num;
}

// console.log(reverseAndNot(123));
// console.log(reverseAndNot(152));
// console.log(reverseAndNot(123456789));

/**
 * multiplyNums('2,3') ---> 6
 * multiplyNums('1,2,3,4') ---> 6
 *
 */

function multiplyNums(str) {
    return str.split(",").reduce((acc, val) => acc * val);
}

// console.log(multiplyNums("2,3"));
// console.log(multiplyNums("1,2,3,4"));
// console.log(multiplyNums("54,75,453,0"));
// console.log(multiplyNums("10,-2"));

/**
 * progressDays([3,4,1,2])  ---> 2
 * progressDays([10,11,12,9,10])  ---> 3
 *
 */

function progressDays(arr) {
    return arr.reduce((acc, val, i, arr) => {
        return arr[i] < arr[i + 1] ? acc + 1 : acc + 0;
    }, 0);
}

// console.log(progressDays([10, 11, 12, 9, 10]));
// console.log(progressDays([3, 4, 1, 2]));
// console.log(progressDays([9, 9]));
// console.log(progressDays([6, 5, 4, 3, 2, 9]));

/**
 * allTruthy(true,true,true) ---> true
 *
 */

function allTruthy(arr) {
    return arr.every((ele) => ele);
}

// console.log(allTruthy([true, true, true]));
// console.log(allTruthy([true, false, true]));
// console.log(allTruthy([5, 4, 3, 2, 1, 0]));

/**
 * reverseArr(1485979) ---> [9,7,9,5,8,4,1]
 * reverseArr(623478) -----> [8,7,4,3,2,6]
 *
 */

function reverseArr(num) {
    return `${num}`.split("").reverse();
}

// console.log(reverseArr(1485979));
// console.log(reverseArr(623478));
// console.log(reverseArr(12345));
