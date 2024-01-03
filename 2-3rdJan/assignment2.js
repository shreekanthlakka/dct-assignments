/**
 *
 * repeatString("Alex" , 2)  ---> "AlexAlex"
 *
 */

function repeatString(str, n) {
    let res = "";
    if (typeof str !== "string") return "Not a String !!";
    for (let i = 1; i <= n; i++) {
        res = res + str;
    }
    return res;
}

// console.log(repeatString(1990, 7));
// console.log(repeatString("Alex", 2));
// console.log(repeatString("Matt", 3));

/**
 *
 * ctoa("A") ---->65
 * ctoa("m") ---->109
 */

function ctoa(character, index = 0) {
    return character.charCodeAt(index);
}

// console.log(ctoa("A", 2));
// console.log(ctoa("m"));
// console.log(ctoa("["));
// console.log(ctoa("\\"));

/**
 * match function to compare two strings case InSensitive
 *
 * match ("hello" , "HellO") ----> true
 */

function match(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
// console.log(match("hello", "hELLo"));
// console.log(match("motive", "emotive"));
// console.log(match("venom", "VENOM"));
// console.log(match("mask", "mAsking"));

/**
 * int or string
 * intOrString(8) -> "int"
 * intOrString("Hello") ---> "str"
 */

function intOrString(str) {
    return typeof str === "string" ? "str" : "int";
}

// console.log(intOrString(8));
// console.log(intOrString("Hello"));
// console.log(intOrString(2222));

/**
 * multiple of 3 return "Hello"
 * helloWorld(3) ----> "Hello"
 * helloWorld(5) ---->"world" multiple of 5
 * helloWorld(15) ----> "Hello World" multiple of both 5 and 3
 *
 */

function helloWorld(num) {
    if (num % 3 === 0 && num % 5 === 0) return "Hello World";
    if (num % 3 === 0) return "Hello";
    if (num % 5 === 0) return "World";
}

// console.log(helloWorld(3));
// console.log(helloWorld(5));
// console.log(helloWorld(15));

/**
 * longBurp(3) ---> "Burrrp"
 * longBurp(5) ---> "Burrrrrp"
 *
 */

function longBurp(num = 1) {
    if (arguments.length === 0 || num === 0)
        return "Please provide how long r should be in Burp";
    return `Bu${"r".repeat(num)}p`;
}

// console.log(longBurp());
// console.log(longBurp(0));
// console.log(longBurp(9));

/**
 *
 * modifyLastChar("Hello" , 3) -----> Hellooo
 */

function modifyLastChar(str, num) {
    return str.replace(str[str.length - 1], str[str.length - 1].repeat(num));
}

// console.log(modifyLastChar("Hello", 5));
// console.log(modifyLastChar("Hey", 6));
// console.log(modifyLastChar("excuse me what?", 6));

/**
 *
 * count D's ---->
 */

function countDs(str) {
    // console.log(str.split("").filter((el) => el === "D" || el === "d").length);

    let counter = 0;
    for (let i = 0; i <= str.length - 1; i++)
        if (str[i] === "D" || str[i] === "d") counter++;

    return counter;
}

// console.log(countDs("My friend Dylan got distracted in school"));

/**
 * getCase("whisper...") ---> "lower"
 * getCase("SHOUT!") ----> "Upper"
 *
 * getCase("Indoor Voice") ---> "mixed"
 *
 */

function getCase(str) {
    if (str.toLowerCase() === str) return "lower";
    if (str.toUpperCase() === str) return "Upper";
    if (str.toLowerCase() !== str) return "mixed";
}

// console.log(getCase("whisper..."));
// console.log(getCase("SHOUT!"));
// console.log(getCase("Indoor Voice"));

/**
 * toScottishScreamin("hello world") ----> "HELLE WERLD"
 *
 */

// str.replace(/[a,e,i,o,e]/g, (el)=>'e').toUpperCase()

function toScottishScreaming(str) {
    let temp = "";
    let scottishScreaming = "";
    for (let i = 0; i < str.length; i++) {
        temp = "aeiou".includes(str[i]) ? "e" : str[i];

        scottishScreaming = scottishScreaming + temp;
    }
    return scottishScreaming.toUpperCase();
}
// console.log(toScottishScreaming("hello world"));
// console.log(toScottishScreaming("Mr. Fox was very naughty"));
// console.log(toScottishScreaming("Butterflies are beautiful!"));

/**
 *
 *
 */
function uploadCount(arr, str) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(" ")[0].toLowerCase() === str.toLowerCase()) count++;
    }
    return count;
}

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "oct"));

/**
 *
 *
 */

function forbiddenLetter(char, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) return false;
    }
    return true;
}
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
// console.log(forbiddenLetter("a", []));

/**
 *
 * word count
 */

function countWords(str) {
    return str.split(" ").length;
}
// console.log(countWords("just an example here move along"));
// console.log(countWords("this is a test"));

/**
 *
 * letters only
 */

function lettersOnly(str) {
    let result = "";
    const Char = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i)
    ).join("");
    for (let i = 0; i < str.length; i++) {
        if (Char.includes(str[i].toUpperCase())) result = result + str[i];
    }
    return result;
}

// console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));

/**
 *
 * isIdentical("aaaa") ---> true
 * isIdentical("aaca") ---> false
 *
 */

function isIdentical(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[0]) return false;
    }
    return true;
}

// console.log(isIdentical("aaaaaa"));
// console.log(isIdentical("aabaa"));
// console.log(isIdentical("kk"));

/**
 *
 *
 */

function getExtension(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].split(".")[1]);
    }
    return res;
}

// console.log(getExtension(["code.html", "code.css", "ruby.rb", "ex.py"]));

/**
 *
 *
 *
 */

// Bu${"r".repeat(num)}p

function googlify(num = 2) {
    if (arguments.length === 0 || num < 2) return "invalid googlifying";
    return `G${"o".repeat(num)}gle`;
}
// console.log(googlify(3));
// console.log(googlify(5));
// console.log(googlify(-1));
// console.log(googlify(1));

/**
 * Repeat("mice" , 5) ----> "mmmmmiiiiiccccceeeee"
 */

function Repeat(str, num) {
    let result = "";
    let len = str.length;
    for (let i = 0; i < len; i++) result = result + str[i].repeat(num);
    return result;
}

// console.log(Repeat("mice", 5));
// console.log(Repeat("stop", 1));

/**
 *
 * checkPalindrome('mom) -------> true
 */

function checkPalindrome(str) {
    return str.split("").reverse().join("") === str;
}
// console.log(checkPalindrome("dad"));
// console.log(checkPalindrome("hello"));
// console.log(checkPalindrome("madam"));

/**
 *
 * sameCase("Hello") ----> false
 * sameCase("hello OR HELLO") ----> true
 */

function sameCase(str) {
    return str.toLowerCase() === str || str.toUpperCase() === str
        ? true
        : false;
}

console.log(sameCase("HELLO"));
console.log(sameCase("hello"));
console.log(sameCase("Hello"));
console.log(sameCase("KetchUp"));
