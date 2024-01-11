/**
 *
 * toArray({a:1,b:2}) ---> [['a',1],['b',2]]
 */

function toArray(obj) {
    const res = [];
    for (let keys in obj) {
        res.push([keys, obj[keys]]);
    }
    return res;
}

// console.log(Object.entries({ a: 1, b: 2, c: 3 }));
// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));

/**
 *
 * indexMultiplier([1,2,3,4,5]) ---> 40
 * 1*0 + 2*1 + 3*2 + 4*3 + 5*4
 */

function indexMultiplier(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + i * arr[i];
    }
    return sum;
}

// console.log([1, 2, 3, 4, 5].reduce((acc, val, i) => (acc = acc + val * i), 0));

// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// console.log(indexMultiplier([-3, 0, 8, -6]));

/**
 *
 *isSpecialArray([2,7,4,9,6,1,6,3]) ----> true
 * Even indices: [2,3,6,6] ; odd indices: [7,9,1,3]
 */

// function isSpecialArray(arr) {
//     const evenIndices = [];
//     const oddIndices = [];
//     for (let i = 0; i < arr.length; i = i + 2) {
//         evenIndices.push(arr[i]);
//         if (arr[i] % 2 !== 0) return false;
//     }
//     for (let i = 1; i < arr.length; i = i + 2) {
//         oddIndices.push(arr[i]);
//         if (arr[i] % 2 === 0) return false;
//     }
//     console.log("even", evenIndices);
//     console.log("odd", oddIndices);

//     return true;
// }
// function isSpecialArray(arr) {
//     const evenIndices = [];
//     const oddIndices = [];
//     let sumOfEven = 0;
//     let sumOfOdd = 0;
//     for (let i = 0; i < arr.length; i = i + 2) {
//         evenIndices.push(arr[i]);
//         oddIndices.push(arr[i + 1]);
//         sumOfEven = sumOfEven + arr[i];
//         sumOfOdd = sumOfOdd + arr[i + 1];
//     }

//     console.log("even", evenIndices, sumOfEven);
//     console.log("odd", oddIndices, sumOfOdd);
//     if (sumOfEven % 2 === 0 && sumOfOdd % 2 === 0) return true;
//     return false;
// }

// function isSpecialArray(arr) {
//     for (let i = 0; i < arr.length; i = i + 2) {
//         if (arr[i] % 2 !== 0 && arr[i + 1] % 2 === 0) return false;
//     }
//     return true;
// }

function isSpecialArray(arr) {
    function isEven(num) {
        return num % 2 === 0 ? true : false;
    }

    const evenSum = arr
        .filter((ele, i) => i % 2 === 0)
        .reduce((acc, val) => acc + val, 0);
    const oddSum = arr
        .filter((ele, i) => i % 2 !== 0)
        .reduce((acc, val) => acc + val, 0);
    const oddLength = arr.filter((ele, i) => i % 2 !== 0).length;

    // console.log("evenSum", evenSum, "oddSum", oddSum, "ODD LENGTH", oddLength);
    // if (oddLength % 2 !== 0 && oddSum % 2 !== 0 && evenSum % 2 === 0) {
    //     return true;
    // }
    if (isEven(oddLength) && isEven(oddSum) && isEven(evenSum)) return true;
    if (!isEven(oddLength) && !isEven(oddSum) && isEven(evenSum)) return true;
    else return false;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6]));
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));

/**
 *
 * numbersSum(1,2,'13','4','64') ---> 3
 * numbersSum(true,false,'13','4','64') ---> 0
 * numbersSum(true,1,2,3,4,5) ---> 0
 *
 *
 */

function numbersSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") result += arr[i];
    }
    return result;
}

// console.log(
//     "numbersSum ",
//     [1, 2, "13", "4", true, 0, 9].reduce((acc, val) => {
//         if (val + 0 === val) return (acc += val);
//         else return acc;
//     }, 0)
// );

// console.log(
//     "numbersSum",
//     [1, 2, "13", "4", true, 0, 9]
//         .filter((ele) => ele + 0 === ele)
//         .reduce((acc, val) => acc + val, 0)
// );

// console.log(numbersSum([1, 2, "13", "4", "64"]));
// console.log(numbersSum([true, false, "13", "4", "64"]));
// console.log(numbersSum([true, 1, 2, 3, 4, 5]));

/**
 *
 * matchLastItem(['res' , '6hi' , 'g' , 'res6hig']) ---> true
 */

function matchLastItem(arr) {
    if (arr.slice(0, arr.length - 1).join("") === arr[arr.length - 1])
        return true;
    // let res = "";
    // for (let i = 0; i < arr.length - 1; i++) res += arr[i];
    // if (arr[arr.length - 1] === res) return true;
    return false;
}

// console.log(matchLastItem(["res", "6hi", "g", "res6hig"]));
// console.log(matchLastItem([1, 1, 1, "11"]));

/**
 *
 * removeDups([1,0,1,0]) ---> [1,0]
 */

function removeDups(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) res.push(arr[i]);
    }
    return res;
}

console.log(
    "removeDuplicates",
    ["the", "the", "big", "cat"].reduce((acc, val) => {
        if (!acc.includes(val)) return [...acc, val];
        else return acc;
    }, [])
);

// console.log(removeDups([1, 0, 1, 0]));
// console.log(removeDups(["the", "the", "big", "cat"]));

/**
 *
 * addName({} , "brutus" , 300) ---> {"brutus" :300}
 * addName({'piano' : 500} , "Brutus" ,400) --> {'piano' : 500, Brutus:400}
 */

function addName(obj, str, val) {
    // const resObj = { ...obj };
    // resObj[str] = val;
    // return resObj;
    obj[str] = val;
    return obj;
}

// console.log(addName({}, "brutus", 300));
// console.log(addName({ piano: 500 }, "brutus", 400));
// console.log(addName({ piano: 500, stereo: 300 }, "brutus", 400));

/**
 *
 * keysAndValues({a:1,b:2,c:3}) --> [['a' , 'b' , 'c'] [1,2,3]]
 * keysAndValues({a:'apple',b:'microsoft',c:'google'}) --> [['a' , 'b' , 'c'] [apple,microsoft,google]]
 *
 */

function keysAndValues(obj) {
    return [Object.keys(obj), Object.values(obj)];
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// console.log(keysAndValues({ a: "apple", b: "microsoft", c: "google" }));

/**
 *
 * afterNYears({"Joel" :32,fred:44 } , 1)
 */

function afterNYears(obj, numYear) {
    const resObj = {};
    for (const key in obj) {
        resObj[key] = obj[key] + numYear;
    }
    return resObj;
}

// console.log(
//     afterNYears({ joel: 32, fred: 44, reginald: 65, susan: 33, julian: 13 }, 1)
// );
// console.log(
//     afterNYears({ baby: 2, child: 8, teenager: 15, adult: 25, elderly: 71 }, 19)
// );

/**
 *
 * nameScore()
 */

function nameScore(str) {
    const score = {
        A: 100,
        B: 14,
        C: 9,
        D: 28,
        E: 145,
        F: 12,
        G: 3,
        H: 10,
        I: 200,
        J: 100,
        K: 114,
        L: 100,
        M: 25,
        N: 450,
        O: 80,
        P: 2,
        Q: 80,
        R: 400,
        S: 113,
        T: 405,
        U: 11,
        V: 10,
        W: 10,
        X: 3,
        Y: 210,
        Z: 23,
    };
    let sum = 0;
    const totalScore = str
        .split("")
        .map((ele) => score[ele])
        .reduce((acc, val) => acc + val, 0);

    if (totalScore <= 60) return "NOT TOO GOOD";
    if (totalScore >= 61 && totalScore <= 300) return "PRETTY GOOD";
    if (totalScore >= 301 && totalScore <= 599) return "VETY GOOD";
    if (totalScore >= 600) return "THE BEST";
}

// console.log(nameScore("YOU"));
// console.log(nameScore("MATT"));
// console.log(nameScore("PUBG"));
