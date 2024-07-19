/**
 *
 * find the mean if numbers
 * mean(42) ---> 3
 * mean(12345) --->3
 * mean(666) ----> 6
 */

function mean(num) {
    const length = `${num}`.split("").length;
    return `${num}`.split("").reduce((acc, val) => +acc + +val, 0) / length;
}

// console.log(mean(42));
// console.log(mean(12345));
// console.log(mean(666));

/**
 *
 * missingNum([1,2,3,4,6,7,8,9,10]) --> 5
 * missingNum([7,2,3,6,5,9,1,2,8]) --> 10
 * missingNum([10,5,1,2,4,6,8,3,9]) --> 7
 *
 *
 */

function missingNum(arr) {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const missingNumber = numbers.filter((ele) => !arr.includes(ele));
    return Number(missingNumber.join());
}

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));

/**
 *  \* inside the box
 *
 * [
 *  "###",
 *  "#*#",
 *  "###"
 * ]  astrick is present inside the box ---> true
 *
 * [
 *  "####",
 *  "#* #",
 *  "#  #*"
 *  "####"
 * ] not present inside the box
 *
 */

function inBox(arr) {
    isFirstRowContainStar = arr[0].split("").includes("*");
    isLastRowContainStar = arr[arr.length - 1].split("").includes("*");

    for (let i = 1; i < arr.length - 1; i++) {
        if (
            arr[i]
                .slice(1, arr[i].length - 1)
                .split("")
                .includes("*") &&
            !isFirstRowContainStar &&
            !isLastRowContainStar
        )
            return true;
    }
    return false;
}

// console.log(inBox(["###", "#*#", "###"]));
// console.log(inBox(["####", "#* #", "#  #", "####"]));
// console.log(inBox(["*####", "# #", "#  #*", "####"]));
// console.log(inBox(["#####", "#   #", "#   #", "#   #", "####"]));

/**
 *
 * makeTitle("This is a title") ---> This Is A Title
 * makeTitle("capitalize every word") --> Capitalize Every Word
 * makeTitle("PIZZA PIZZA") ---> PIZZA PIZZA
 *
 *
 */

function makeTitle(str) {
    return str
        .split(" ")
        .map((ele) => ele[0].toUpperCase() + ele.slice(1))
        .join(" ");
}

// console.log(makeTitle("This is a title"));
// console.log(makeTitle("capitalize every word"));
// console.log(makeTitle("PIZZA PIZZA"));
// console.log(makeTitle("I Like pizza"));

/**
 * reverse the string with the particular array
 *
 * specialReverse("word searches are supwe fun" , "s")
 */

function specialReverse(str, letter) {
    let outputStr = "";
    str.split(" ").forEach((word) => {
        let str = word;
        if (word[0] === letter) {
            const revStr = word.split("").reverse().join("");
            str = revStr;
        }
        outputStr = outputStr + " " + str;
    });
    return outputStr;
}
// console.log(specialReverse("word searches are super fun", "s"));
// console.log(specialReverse("first man to walk on the moon", "m"));
// console.log(specialReverse("peter piper picked pickled peppers", "p"));

/**
 *
 * hackerSpeak("javascript is cool") --> j4v45cr1pt 15 c00l
 *
 * replace a=4 , e=3 , i=1 , o=0 , s=5
 */

function hackerSpeak(str) {
    let result = [];
    const hackerCode = { a: 4, e: 3, i: 1, o: 0, s: 5 };
    const hackerCodeKeys = Object.keys(hackerCode);

    str.split("").forEach((ele) => {
        if (hackerCodeKeys.includes(ele)) {
            result.push(hackerCode[ele]);
        } else result.push(ele);
    });
    return result.join("");
}

// console.log(hackerSpeak("javascript is cool"));
// console.log(hackerSpeak("programming is fun"));
// console.log(hackerSpeak("become a coder"));

/**
 * capMe(["mavis" , "senaida" , "letty"]) ---> [Mavis, Senadida , Letty]
 * capMe(["samuel" , "MABELLE" , "letitia"]) ---> [Samuel, Mabelle , Letitia]
 *
 */

function capMe(arrOfNames) {
    return arrOfNames.map(
        (name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
    );
}

// console.log(capMe(["mavis", "senaida", "letty"]));
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));

/**
 * A ---> A char code is : 65
 * a ---> a char code is : 97
 *
 */

function counterpartCharCode(char) {
    return `"${char}" char code is : ${char.charCodeAt(0)}`;
}

// console.log(counterpartCharCode("A"));
// console.log(counterpartCharCode("a"));

/**
 * sumTwoSmallestNums([19,5,42,2,77])
 *
 */

function sumTwoSmallestNums(arr) {
    const min1 = Math.min(...arr.filter((ele) => ele > 0));
    const min2 = Math.min(...arr.filter((ele) => ele !== min1 && ele > 0));
    return min1 + min2;
}

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353]));
// console.log(sumTwoSmallestNums([2, 9, 6, -1]));
// console.log(
//     sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// );

/**
 *
 * equal(3,4,3) ---> 2
 * equal(1,1,1) ---> 3
 * equal(3,4,1) ---> 0
 */

function equal(a, b, c) {
    if (a === b && b === c) return 3;
    if (a === b || b === c || c === a) return 2;
    else return 0;
}
console.log(equal(3, 4, 3));
console.log(equal(1, 1, 1));
console.log(equal(2, 1, 4));
