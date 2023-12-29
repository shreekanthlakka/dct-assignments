/**
 *
 * giveMeSomething("something") ---> something something
 */

function giveMeSomething(str) {
    return `something ${str}`;
}

// console.log(giveMeSomething("is better than nothing"));

/**
 * 
 *function should convert true --> "true"
 *function should convert false --> "false"

 */

function boolToString(bool) {
    return bool ? "true" : "false";
}
// console.log(boolToString(true));
// console.log(boolToString(false));

/**
 *
 *
 * greetings("Matt") --> "Hello, Matt!"
 */

function greeting(str) {
    return `Hello, ${str}!`;
}
// console.log(greeting("Matt"));

/**
 *
 *
 * comp("AB" , "CD") ---> should return true if two arg lengths are same
 */

function comp(str1, str2) {
    return str1.length === str2.length;
}

// console.log(comp("SS", "AA"));
// console.log(comp("SSA", "AAB"));
// console.log(comp("hello", "dctacademy"));

/**
 *
 *
 * isEmpty("") ---> true
 */

function isEmpty(str) {
    return str.length === 0;
}

// console.log(isEmpty(" "));
// console.log(isEmpty("a"));

function stringInt(str) {
    return Number(str);
}
// console.log(stringInt("45"));

function concatName(str1, str2) {
    return `"${str1}, ${str2}"`;
}
// console.log(concatName("first", "last"));
// console.log(concatName("John", "Doe"));

function oddOrEven(str) {
    return str.length % 2 === 0;
}
// console.log(oddOrEven("apples"));

function newWord(str) {
    return str.slice(1);
}
// console.log(newWord("apple"));

function arrayToString(arr) {
    return `"${arr.toString()}"`;
}
// console.log(arrayToString([1, 2, 3, 4]));

/**
 *
 *
 * console.log("one")----> 1
 * console.log("two")---->2
 *
 */
function word(str) {
    const wordsOfNumbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
    };

    if (!Object.keys(wordsOfNumbers).includes(str))
        return `not a number string`;
    else return wordsOfNumbers[str];
}

// console.log(word("four"));

/**
 *
 *Spaces in strings
 */
function hasSpaces(str) {
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === " ") return true;
    }
    return false;
}

// console.log(hasSpaces("sreekanth"));
// console.log(hasSpaces("sreeka nth"));
// console.log(hasSpaces("sreekanth "));

function isLastCharacterN(str) {
    return str.charAt(str.length - 1) === "n" ||
        str.charAt(str.length - 1) === "N"
        ? true
        : false;
}

// console.log(isLastCharacterN("Hello"));

function frontThree(str) {
    return str.slice(0, 3).repeat(3);
}
// console.log(frontThree("Python"));
// console.log(frontThree("Cucumber"));

/**
 *
 *
 * console.log(firstLast("hello"))----> ho
 */

function firstLast(str) {
    return `${str.charAt(0)}${str.charAt(str.length - 1)}`;
}
// console.log(firstLast("hello"));
// console.log(firstLast("gopi"));

function stutter(str) {
    return `${str.slice(0, 2)}... ${str.slice(0, 2)}... ${str}?`;
}
// console.log(stutter("incredible"));
function moodToday(str) {
    return `"Today, I am feeling ${str}"`;
}
// console.log(moodToday("happy"));

function countSyllables(str) {
    const syllable = str.slice(0, 2);
    let count = 0;
    for (let i = 0; i <= str.length - 1; i = i + 2) {
        if (`${str[i]}${str[i + 1]}`.toLowerCase() === syllable.toLowerCase())
            count++;
    }
    return count;
}

console.log(countSyllables("Heheheh"));
