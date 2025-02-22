// Question 1 : Write a function to calculate the greatest common divisor (GCD) of two numbers.

// Solution 1=> make two seperate arrays for common divisors of both numbers and make another array for the common divisors and then extracting the greatest common divisor
// const findGreatestCommonDivisor = (num1, num2) => {
//     const commonDivisor = [], divisorNum1 = [], divisorNum2 =  [];
//     for(let i = 1; i < num1; i++) {
//         if(num1 % i === 0) divisorNum1.push(i);
//     }
//     for(let i = 1; i < num2; i++) {
//         if(num1 % i === 0) divisorNum2.push(i);
//     }
//     divisorNum1.map(
//         (a) => divisorNum2.indexOf(a) !== -1 ? commonDivisor.push(a) : commonDivisor 
//     );

//     return commonDivisor[commonDivisor.length - 1];
// }
// console.log(findGreatestCommonDivisor(24,36)); // 12


// Solution 2=> make one array for common divisors of both numbers , then remove the numbers which are not appearing twice in the array (as they are not common divisors for both the numbers), sort in ascending order and extract greatest number
// const findGreatestCommonDivisor = (num1, num2) => {
//     const commonDivisor = [];
//     for(let i = 1; i < num1; i++) {
//         (num1 % i === 0) ? commonDivisor.push(i) : commonDivisor;
//     }
//     for(let i = 1; i < num2; i++) {
//         (num1 % i === 0) ? commonDivisor.push(i) : commonDivisor;
//     } 
//     commonDivisor.map(
//         (a) => commonDivisor.indexOf(a) === commonDivisor.lastIndexOf(a) ? commonDivisor.pop(a) : commonDivisor
//     )
//     return commonDivisor.sort((a,b) => a-b)[commonDivisor.length - 1] ;  
// }
// console.log(findGreatestCommonDivisor(24,36)); // 12


// Solution 3 => using Eucledia's algorithm  (INCOMPLETE)
// const findGreatestCommonDivisor = (num1, num2) => {
//     let larger,smaller,q;
//     if(num1 === 0) return b;
//     if(num2 === 0) return a;

//     if(num1 > num2){
//         larger = num1;
//         smaller = num2; 
//     }
//     if(num2 > num1){
//         larger  = num2;
//         smaller = num1;
//     }

//     console.log(`larger is ${larger} and smaller is ${smaller}`);

//     const euclid = () => {
//         q = Math.floor (larger / smaller);
//         console.log(`q is ${q}`);

//         r = larger - (smaller * q)
//         console.log(`r is ${r}`);

//         larger = smaller;
//         smaller = r;
//     }

//     return `larger ${larger} and smaller ${smaller}`;
// }
// console.log(findGreatestCommonDivisor(36,24));




//--------------------------------------------------------------------------------------------
// Question 2 : Create a function to find the sum of digits of a given number (e.g., 123 => 1 + 2 + 3 = 6).
const findSumOfDigits = num => {
  // if num is 0  then return 0 and if number is not 0 calculate the sum of digits
  return num === 0 ? 
  num : 
  Math.abs(num) // to handle negative numbers
  .toString()
  .split('')
  .map((currVal) =>  parseInt(currVal))
  .reduce((acc, currVal) => acc + currVal)
  ;
}

console.log(findSumOfDigits(123));          //6
console.log(findSumOfDigits(0));            //0
console.log(findSumOfDigits(987654321));    //45
console.log(findSumOfDigits(1001));         //2
console.log(findSumOfDigits(-123));         //6



//--------------------------------------------------------------------------------------------
// Question 3 : Implement a function to check if a given string is an anagram of another string.
const checkAnagram = (str1, str2) => {
  // converting the strings to lowerCases 
  // And 
  // removing white spaces and punctuations from them
  str1 = str1.toLowerCase().replace(/[^\w]|_/g, ''); 
  str2 = str2.toLowerCase().replace(/[^\w]|_/g, '');

  const sortedStr1 = str1.split('').sort(), sortedStr2 = str2.split('').sort();

  if(sortedStr1.length === sortedStr2.length){
      for(let i = 0; i < str1.length; i++){
          if(sortedStr1[i] !== sortedStr2[i]){
              return "Not an Anagram"
          }
      }
      return "Anagram";
  }
}
console.log(checkAnagram("listen" , "silent"));         //Anagram 
console.log(checkAnagram("Listen" , "Silent"));         //Anagram (case-insensitive)
console.log(checkAnagram("Astronomer", "Moon starer")); //Anagram
console.log(checkAnagram("hello", "world"));            //"Not an Anagram"
console.log(checkAnagram("aabbcc", "bbaacc"));          //Anagram
console.log(checkAnagram("Listen" , "Vilent"));         //Not an Anagram"


//--------------------------------------------------------------------------------------------
// Question 4 : Write a program to find the intersection of two arrays (common elements).
const findIntersection = (arr1, arr2) => {
  const inetrsectArray = []; 
  arr1.map(
      (e) => arr2.indexOf(e) !== -1 ? inetrsectArray.push(e) : inetrsectArray
  );
  return inetrsectArray;
}
console.log(findIntersection([1,2,4,5,6], [2,3,6,7,8,9]));  //[2,6]
console.log(findIntersection([1, 2, 3], [2, 3, 4]));        //[2,3]
console.log(findIntersection([], [1, 2]));                  //[]
console.log(findIntersection([1, 2], [3, 4]));              //[]
console.log(findIntersection([1, 2, 2], [2, 2, 3]));        //[2,2]
console.log(findIntersection(["a", "b"], ["b", "c"]));      //["b"]




//--------------------------------------------------------------------------------------------
// Question 5 : Create a function to rotate an array by a given number of positions.
const rotateArr = (arr, n) => [...arr.slice(n), ...arr.slice(0,n)];

console.log(rotateArr([0,1,2,3,4,5,6,7,8,9], 3)); //[3,4,5,6,7,8,9,0,1,2]
console.log(rotateArr([1,2,3], 0)); //[1,2,3]
console.log(rotateArr([1,2,3], 3)); //[1,2,3]
console.log(rotateArr([], 1)); //[]
console.log(rotateArr([0,1,2,3], -1)); //[3,0,1,2]




//--------------------------------------------------------------------------------------------
// Question 6 :Write a function to remove falsy values (false, 0, "", null, undefined, and NaN) from an array.
const removeFalsyValues = arr => arr.filter(e => Boolean(e));

console.log(removeFalsyValues([
  "hello", 0, true, "2", "0", "", false, null, "Jane", undefined, NaN
]));                                    // ["hello", true , "2", "0", "Jane"]
console.log(removeFalsyValues(["hello", 0, true, "", false]));          //["hello", true]
console.log(removeFalsyValues([null, undefined, NaN, 0, false]));       //[]
console.log(removeFalsyValues([1, "a", {}, []]));                       //[1, "a", {}, []]
console.log(removeFalsyValues([]));                                     //[]
console.log(removeFalsyValues(["", 1, false, 2]));                      //[1, 2]



console.log("----------------------------------------------------");
//--------------------------------------------------------------------------------------------
// Question 7 : Implement a function to convert a string to camel case (e.g., "hello world" => "helloWorld").
const camelCaseString = str => {
  let strArr = str
  .replace(/[^a-zA-Z0-9 ]/g, "")
  .trim()
  .split(' ');
  // console.log(strArr);

  let concatStr = strArr[0].toLowerCase();

  for(let i = 1; i < strArr.length; i++){
      if(strArr[i] !== ""){
          concatStr += (
              strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase()
          );
      }
  }
  return concatStr;
}


console.log(camelCaseString(" multiple spaces inCluded   "));  //multipleSpaces
console.log(camelCaseString(" multiple spaces    inCluded   "));  //multipleSpaces
console.log(camelCaseString("     multiple spaces included   "));       //multipleSpaces
console.log(camelCaseString("Hello World!"));                    //helloWorld
console.log(camelCaseString("Sam sa@@id hi!"));                  //samSaidHi
console.log(camelCaseString(""));                                //""
console.log(camelCaseString("hello"));                           //hello





//--------------------------------------------------------------------------------------------
// Question 8: Write a program to find the first non-repeating character in a string.
const findFirstNonRepeatingChar = (str) => {
  if(str.length === 1) return `There is Only one character in the entered string : ${str[0]}`;
  if(str === "") return `Empty String Entered`;
  // return str.toLowerCase();

  for(let i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
          return `First Non repeting char is ${str[i]}`;
      }
  }
  return `No non-repeating characters.`
}
console.log(findFirstNonRepeatingChar("abcab"));  //c
console.log(findFirstNonRepeatingChar("abcdef")); //a
console.log(findFirstNonRepeatingChar("aabbcc")); //No non-repeating characters.
console.log(findFirstNonRepeatingChar("x")); //There is Only one character in the entered string
console.log(findFirstNonRepeatingChar("")); //Empty String Entered
console.log(findFirstNonRepeatingChar("@a!a@"));  //!
console.log(findFirstNonRepeatingChar("AaBbCc")); //A (beacuse A and a  are different)
console.log(findFirstNonRepeatingChar("aabbc"));  //c
console.log(findFirstNonRepeatingChar("zxyzzxy"));



//--------------------------------------------------------------------------------------------
// Question 9 : Create a function that calculates the sum of all prime numbers up to a given number.
const sumOfPrimeNumber = num =>{
  const primeArray = [];
  for(let i = 1; i <= num ; i++){
      let checkPrime = [];
      for(let j = 1; j <= i; j++){
          if(i % j === 0) checkPrime.push(j);
      }
      if(checkPrime.length === 2) primeArray.push(i);
  }
  return primeArray.reduce(
      (acc, curr) => acc + curr , 0
  );
} 
console.log(sumOfPrimeNumber(10)) //17
console.log(sumOfPrimeNumber(0)) //0
console.log(sumOfPrimeNumber(1)) //0
console.log(sumOfPrimeNumber(20)) //77
console.log(sumOfPrimeNumber(50)) //328




// Question 10 : Implement a function to sort an array of objects by a specified property.
// Exmple : 
const people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 20 }
];
const property = "age";

// Output for this should be
// [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]

// Solution :

const sortArrayOfObjects = (arrObj , prop) => {
  // arrObj.map(
  //     (obj) => {
  //         for (const p in obj) {
  //             console.log(obj[p]);
  //             if(p === age){
  //                 console.log(obj[p]);
  //             }
  //         }
  //     }
  // )

  // return sortedArr;
}

console.log(sortArrayOfObjects(people, property))