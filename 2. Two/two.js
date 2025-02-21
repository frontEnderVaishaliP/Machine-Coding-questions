// Question 1 : Write a function to check if a given year is a leap year.
// const checkLeapYear = year => {
//     if (year === 0) return "Leap Year" // This is the convention used in astronomical year numbering and in the international standard date system, ISO 8601. In these systems, the year 0 is a leap year
//     if(year % 4 === 0){
//         if(year % 100 === 0){
//             if(year % 400 === 0) return "Leap year";
//             else return "Not a leap year";
//         }
//         return "Leap year";
//     }
//     else{
//         return "Not a leap year";
//     }
// }

const checkLeapYear = (year) => year === 0
    ? "Leap Year"
    : year % 4 !== 0
    ? "Not a leap year"
    : year % 100 !== 0
    ? "Leap year"
    : year % 400 !== 0
    ? "Not a leap year"
    : "Leap year"
;
console.log(checkLeapYear(2000)); //Leap year
console.log(checkLeapYear(1900)); //Not a Leap
console.log(checkLeapYear(2020)); //Leap year
console.log(checkLeapYear(2023)); ///Not a leap
console.log(checkLeapYear(0)); // leap year



// ----------------------------------------------------------------------------------------
// Question 2 : Create a program that returns the sum of all elements in an array.
const sumOfArrayElements = (arr) => arr.length > 0 
  ? arr.reduce((acc, currVal) => acc + currVal) 
  : 0
;
console.log(sumOfArrayElements([1, 2, 3, 4, 5]));             //15
console.log(sumOfArrayElements([]));                          //0
console.log(sumOfArrayElements([-1, -2, -3]));                //-6
console.log(sumOfArrayElements([1.5, 2.5, 3.5]));             //7.5
console.log(sumOfArrayElements([1000000000, 2000000000]));    //3000000000



// ----------------------------------------------------------------------------------------
// Question 3 : Write a function to find the second largest number in an array.
// Approach 1 : sort the array and access the second last element
const findSecondLargestNum_1 = (arr) => {
  if(arr.length === 0) return "Error: Array is empty";
  if(arr.length === 1){
    return "Error : You have only one element in your array";
  }
  if(arr.length > 1) return arr.sort((a, b) => a - b)[arr.length - 2];
};

console.log(findSecondLargestNum_1([10, 20, 30, 40, 50])); //40
console.log(findSecondLargestNum_1([1, 2, 3, 3])); //2
console.log(findSecondLargestNum_1([5])); //"Error : You have only one element in your array"
console.log(findSecondLargestNum_1([-1, -2, -3])); //-2
console.log(findSecondLargestNum_1([])); //"Error : Empty array"

// Approach 2 : assign largest value to a variable and minimum value to another varaiable. Then, iterate through the loop to find second largest
const findSecondLargestNum_2 = arr => {
  // If array has no elements in it
  if(arr.length === 0) return "Error : Empty array"

  // if array has only one element in it
  if(arr.length === 1){
    return "Error : You have only one element in your array";
  }

  if(arr.length > 1){
    // initializing largest and second largest
    let largest = Math.max(...arr), secondLargest = Math.min(...arr);
    // finding second largest
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < largest && arr[i] > secondLargest) secondLargest = arr[i];
    }
    return secondLargest;
  } 
}

console.log(findSecondLargestNum_2([10, 20, 30, 40, 50])); //40
console.log(findSecondLargestNum_2([1, 2, 3, 3])); //2
console.log(findSecondLargestNum_2([5])); //"Error : You have only one element in your array"
console.log(findSecondLargestNum_2([-1, -2, -3])); //-2
console.log(findSecondLargestNum_2([])); //"Error : Empty array"
// Note : Math.max() and Math.min() gives infinity if array has no elements to compare. So, to handle this edge case you have to check that condition 



// ----------------------------------------------------------------------------------------
//Question 4 : Implement a function to check if a string contains only unique characters.
const stringContainsUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return "Not unique";
  }
  return "Only unique characters";
};
console.log(stringContainsUnique("Hello"));   //Not unique
console.log(stringContainsUnique("Shweta"));  //Only unique characters
console.log(stringContainsUnique(""));        //Only unique characters
console.log(stringContainsUnique("AaBbCc"));  //Only unique characters
console.log(stringContainsUnique("112233"));  //Not unique



// ----------------------------------------------------------------------------------------
// Question 5 : Write a function that flattens a nested array (e.g., [1, [2, [3]]] to [1, 2, 3]).
const flattenNestedArray = (arr) => arr.flat(Infinity);
//array.flat() method flatens the nested array upto a certain level you want
// if you pass 'Infinity' to it then it flatens the array upto any level (this one is useful when you do not know the size of nesting and in case of large databases that are supposed to be converted into a flat one)
console.log(flattenNestedArray([1, [2, [3]]]));
console.log(flattenNestedArray([]));
console.log(flattenNestedArray([1, [2], [3, [4, [5]]]]));
console.log(flattenNestedArray([[[1]]]));
console.log(flattenNestedArray([1, "a", [true, [null]]]));



// ----------------------------------------------------------------------------------------
// Question 6 : Create a function that capitalizes the first letter of each word in a string.
const capitalizeEachWord = (str) =>{
  return str.length > 0 
  ? 
  //execute if string is not empty
  str.trim()
  .split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ")
  
  :
  "" //if string is empty
  ;
}
console.log(capitalizeEachWord("sam said hello"));  //Sam Said Hello
console.log(capitalizeEachWord("123 hello"));       //"123 Hello"
console.log(capitalizeEachWord("oneWord"));         //"oneword"
console.log(capitalizeEachWord(""));                //""
console.log(capitalizeEachWord(" hello world "));   //" Hello World "






// ----------------------------------------------------------------------------------------
// Question 7 : Write a function to calculate the sum of all odd numbers from 1 to a given number.
const sumOfOddNums = (maxNum) => {
  let sum = 0;
  for (let i = 1; i <= maxNum; i++) {
    i % 2 !== 0 ? (sum += i) : sum;
  }
  return sum;
};
console.log(sumOfOddNums(10));  // 1 + 3 + 5 + 7 + 9 = 25
console.log(sumOfOddNums(1));   // 1 
console.log(sumOfOddNums(0));   // 0
console.log(sumOfOddNums(-10)); // 0







// ----------------------------------------------------------------------------------------
// Question 8 :  Implement a function that removes duplicate characters from a string.
const removeDuplicatesFromString = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr.indexOf(arr[i]) !== i ? arr.splice(i, 1) : arr;
  }
  return arr.join("");
};
console.log(removeDuplicatesFromString("Hello"));   //"Helo"
console.log(removeDuplicatesFromString("abcd"));    //"abcd"
console.log(removeDuplicatesFromString("112233"));  //"123"
console.log(removeDuplicatesFromString(""));        //""
console.log(removeDuplicatesFromString("AaBbCc"));  //AaBbCc





// ----------------------------------------------------------------------------------------
// Question 9 : Write a function that counts the occurrences of each element in an array and returns an object with the counts.
//consider following array for reference
let exampleArr = [
  "geeks",
  2,
  "geeks",
  2,
  "Javascript",
  4,
  "Javascript",
  5,
  "for",
  6,
  "Javascript",
  1,
  "for",
  5,
  7,
  8,
  "for",
];
//solution
const countOccurrences = (arr) => {
  const charCountObject = {};
  arr.map((e) =>
    !charCountObject[e] ? (charCountObject[e] = 1) : (charCountObject[e] += 1)
  );
  return charCountObject;
};
console.log(countOccurrences(exampleArr));
console.log(countOccurrences(["a", "b", "a", "c", "b"])); //{"a": 2, "b": 2, "c": 1}
console.log(countOccurrences([]));                        //{}
console.log(countOccurrences([1, 2, 1, 3]));              //{1: 2, 2: 1, 3: 1}
console.log(countOccurrences([true, false, true]));       //{true: 2, false: 1}
console.log(countOccurrences(["x", "X", "x"]));           //{"x": 2, "X": 1}




// ----------------------------------------------------------------------------------------
// Question 10 : Create a program that generates the Fibonacci sequence up to a given number of terms.
const generateFibbonacci = (n) => {
  const fibbo = [];
  if(n === 0) return fibbo;
  if(n === 1) fibbo.push(0);
  if(n > 1) {
    for(let i = 0; i < n; i++){
      if(i === 0) fibbo.push(i);
      if(i === 1) fibbo.push(i);
      if(i > 1) {
        fibbo.push(fibbo[fibbo.length - 1] + fibbo[fibbo.length - 2]);
      }
    }
  }
  return fibbo;
};
console.log(generateFibbonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibbonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibbonacci(2)); // [0, 1]
console.log(generateFibbonacci(1)); // [0]
console.log(generateFibbonacci(0)); // []


