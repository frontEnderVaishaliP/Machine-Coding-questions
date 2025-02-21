// Question 1: Write a JavaScript function that takes two numbers as arguments and returns their sum.
const sumOfTwo = (a, b) => a + b;
console.log(sumOfTwo(2, 3)); //5
console.log(sumOfTwo(-5, 10)); //5
console.log(sumOfTwo(0, 0)); //0
console.log(sumOfTwo(2.5, 1.5)); //4
console.log(sumOfTwo(Number.MAX_SAFE_INTEGER, 1)); //9007199254740992
//learn about the concept of Number.MAX_SAFE_INTEGER

//------------------------------------------------------------------------------------------------
// Question 2: Create a function to check if a given number is odd or even.
const checkEvenOrOdd = (num) => (num % 2 === 0 ? "Even Number" : "Odd Number");
console.log(checkEvenOrOdd(14)); //even
console.log(checkEvenOrOdd(23)); //odd
console.log(checkEvenOrOdd(-7)); //odd
console.log(checkEvenOrOdd(0)); //even

//------------------------------------------------------------------------------------------------
//Question 3: Write a function to reverse a given string.
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello")); //ohheH
console.log(reverseString("")); //""
console.log(reverseString("racecar")); //"racecar"
console.log(reverseString("12345")); //54321
console.log(reverseString("A")); //A

//------------------------------------------------------------------------------------------------
// Question 4 : Implement a function that takes an array of numbers and returns the largest number in the array.
const returnLargestNum = (arr) => {
  // sort the array in ascending and then pick the greatest element (lst element)
  // not efficient for larger databases
  // return arr[arr.sort((a,b) => a-b).length - 1];
  // using Math.max()
  // efficient for larger databases
  return arr.length === 0 ? "Your array is Empty" : Math.max(...arr);
};
console.log(returnLargestNum([65, 98, 23, 54, 12, 33])); //98
console.log(returnLargestNum([-1, -50, -3, -4])); //-1
console.log(returnLargestNum([1])); //1
console.log(returnLargestNum([])); //"Your array is Empty"
console.log(returnLargestNum([0, 0, 0])); //0

//------------------------------------------------------------------------------------------------
// Question 5 : Write a function to find the factorial of a given number.
const findFactorial = (num) => {
  let factorial = 1;
  if (num < 0) return "Error: Invalid number Entered";
  else if (num === 0 || num === 1) return factorial;
  else {
    for (let i = num; i > 0; i--) {
      factorial *= i;
    }
  }
  return factorial;
};
console.log(findFactorial(1)); //1
console.log(findFactorial(0)); //1
console.log(findFactorial(5)); // 120
console.log(findFactorial(10)); //3628800
console.log(findFactorial(-5)); //"Error : Invalid number entered"

//------------------------------------------------------------------------------------------------
// Question 6 : Create a function that removes all occurrences of a specific value from an array.
const checkAllOccurances = (arr, num) =>
  arr.filter((currentNum) => currentNum !== num);

console.log(checkAllOccurances([45, 7, 9, 4, 45, 6, 1, 34, 8], 45)); //[7,9,4,6,1,34,8]);
console.log(checkAllOccurances([1, 2, 3, 4, 5, 2], 2)); // [1,3,4,5]
console.log(checkAllOccurances([1, 1, 1], 1)); //[]
console.log(checkAllOccurances([1, 2, 3], 4)); // [1,2,3]
console.log(checkAllOccurances([1, "Hello", 5, "World", ""], 2)); //

//------------------------------------------------------------------------------------------------
// Question 7 : Write a function that counts the number of vowels in a given string.
const checkVowels = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    // Using basic logic
    // if(str[i] === `a` || str[i] === `e` || str[i] === `i` || str[i] === `o` || str[i] === `u`){
    //     counter++;
    // }

    // Using RegEx
    if (str[i].match(/[aeiou]/gi)) counter++; //g flag matchs all occurances and i flag is for case-insensitive matching
  }
  //   return counter;

  //Matching the regex pattern within loop is inefficient. hence, we are using the below approach insted of it
  return str.match(/[aeiou]/gi)?.length || 0;
  //Explaination :
  // str.match(/[aeiou]/gi) => Finds all vowels in the string.
  // ?.length => Checks if the result of str.match() is not null.
  // || 0 => Provides a fallback value of 0 if str.match(/[aeiou]/gi) is null.
};
console.log(checkVowels("Hello")); // 2
console.log(checkVowels("HElloooOOOiiIIIuyy")); //13
console.log(checkVowels("AEIOU")); //5
console.log(checkVowels("xyz")); //0
console.log(checkVowels("")); //0
console.log(checkVowels("JavaScript")); //3

//------------------------------------------------------------------------------------------------
// Question 8 : Create a program to check if a string is a palindrome (reads the same backward as forward).
const checkPalindrome = (str) => str === str.split("").reverse("").join("");

console.log(checkPalindrome("civic")); // true
console.log(checkPalindrome("hello")); // flase
console.log(checkPalindrome("")); //true
console.log(checkPalindrome("12321")); // true
console.log(checkPalindrome("A man, a plan, a canal, Panama")); // true
//make it work for this test case

//------------------------------------------------------------------------------------------------
// Question 9 : Write a function to merge two arrays and remove duplicate values from the merged array.
const mergeArrayAndRemoveDuplicates = (arr1, arr2) => {
  // Solution => make a new array by merging the input arrays and then find the duplicates to remove them
  let arr3 = [...arr1, ...arr2];
  arr3.sort((a, b) => a - b);
  //   Method 1 : Using Traditional for loop
  // for(let i = 0; i < arr3.length; i++){
  // if(arr3[i] === arr3[i+1]) arr3.splice(i+1, 1);
  // }
  //   Method 2 : Using forEach()
  arr3.forEach((i) => (arr3[i] === arr3[i + 1] ? arr3.splice(i + 1, 1) : arr3));
  return arr3;
};
console.log(mergeArrayAndRemoveDuplicates([1, 2, 3], [2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrayAndRemoveDuplicates([], [])); //[]
console.log(mergeArrayAndRemoveDuplicates([1, 2, 3], [])); //[1,2,3]
console.log(mergeArrayAndRemoveDuplicates([1, 1, 1], [1, 1])); //[1]
console.log(mergeArrayAndRemoveDuplicates(["a", "b"], ["b", "c"])); //["a", "b", "c"]
// the last one is giving output ["b", "c"]. Find out why ?

//------------------------------------------------------------------------------------------------
// Question 10 : Implement a program to generate a random number between two given values.
const generateRandomBetweenRange = (min, max) => {
  // min Included , max Excluded
  return Math.floor(Math.random() * (max - min)) + min;
  // min and max both Included
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(generateRandomBetweenRange(1, 10));
console.log(generateRandomBetweenRange(0, 1));
console.log(generateRandomBetweenRange(5, 5)); //5 (always)
console.log(generateRandomBetweenRange(-10, 10));
console.log(generateRandomBetweenRange(0.5, 5.5));
