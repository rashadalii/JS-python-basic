// task01
// //Create an array of the names of the three teammates
// let teammates = ['Ali', 'Bob', 'Charlie'];

// // Add another teammate's name to the end of the array
// teammates.push('David');

// // Delete the first name
// teammates.shift();

// // Output the modified array to the console
// console.log(teammates);

// task02


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Destructure the first two numbers and create a new array from the rest
// let [firstNumber, secondNumber, ...restOfNumbers] = numbers;

// // Output the variables and the new array to the console
// console.log("First number:", firstNumber);
// console.log("Second number:", secondNumber);
// console.log("Rest of the numbers:", restOfNumbers);

// task03

// // Create an array of 10 numbers
// let numbers = [14, 25, 7, 36, 19, 42, 8, 50, 23, 11];

// // Find the maximum value using the spread operator with Math.max
// let maxNumber = Math.max(...numbers);

// // Output the maximum value to the console
// console.log("The maximum value is:", maxNumber);

// task04


// let originalArray = [3, 7, 12, 5, 9];

// let newArray = originalArray.map(num => num * 2);


// console.log("Original array:", originalArray);
// console.log("New array with doubled elements:", newArray);



// task05

// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];
  
//   let developmentArray = employees.filter(employee => employee[1] === 'development');
  
 
//   console.log("Employees of the programming department:", developmentArray);
  
// task06


// let queue = [];

// // Function to add a customer to the end of the queue
// function addCustomer(firstName, lastName) {
//   queue.push({ firstName, lastName });
//   console.log(`Customer ${firstName} ${lastName} has been added to the queue.`);
// }

// // Function to display and remove the first customer in the queue
// function processNextCustomer() {
//   if (queue.length > 0) {
//     let customer = queue.shift();
//     console.log(`Next customer in the queue: ${customer.firstName} ${customer.lastName}`);
//   } else {
//     console.log("The queue is empty.");
//   }
// }

// // Request input from the user and update the queue
// while (true) {
//   let input = prompt("Enter the first and last name of the new customer :");
//   if (input === "=") {
//     console.log("Final queue:", queue);
//     break;
//   } else if (input === "") {
//     processNextCustomer();
//   } else {
//     let [firstName, lastName] = input.split(" ");
//     addCustomer(firstName, lastName);
//   }
// }


// task07

// Function to sort an array of integers in ascending order
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
//   }
  
  
//   let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
//   let sortedArray = sortArray(array);
//   console.log("Sorted array:", sortedArray);


// task08

// function outputNegativeNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//         console.log(arr[i]);
//       }
//     }
//   }
  
//   let numbers = [1, -2, 3, -4, 5, -6, 7, 8, -9];
//   outputNegativeNumbers(numbers);

// task09

// let outputPositiveNumbers = (arr) => {
//     arr.forEach(number => {
//       if (number > 0) {
//         console.log(number);
//       }
//     });
//   }
  

//   let numbers = [1, -2, 3, -4, 5, -6, 7, 8, -9];
//   outputPositiveNumbers(numbers);
  


// task10


// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// // Callback function: printWithDashes
// let printWithDashes = (name) => {
//   console.log("-------------");
//   console.log(name);
//   console.log("-------------");
// }

// // Callback function: printWithHearts
// let printWithHearts = (name) => {
//   console.log("<3<3<3 " + name + " <3<3<3<3 <3");
// }

// // Callback function: printWithIndex
// let printWithIndex = (name, index) => {
//   console.log(index + " - " + name);
// }

// // Test the callback functions with the array using forEach
// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);


// task11

// function kebabToUpper(text) {
//     return text.split('-').map(word => word.toUpperCase()).join('_');
//   }
  

//   console.log(kebabToUpper('first-user')); 


// task12

// Given array of numbers
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// // Create a new array with modified elements
// let modifiedArray = numbers.map(number => {
//   if (number < 0) {
//     return Math.abs(number); // Change negative numbers to positive
//   } else {
//     return number * 2; // Double positive numbers
//   }
// });


// console.log("Modified array:", modifiedArray);



// task13

// Function to return the first three-character element of an array
// function firstThreeCharElement(arr) {
//     return arr.find(text => text.length === 3);
//   }
  

//   let texts = ["cat", "dog", "bat", "lion", "tiger"];
//   let result = firstThreeCharElement(texts);
//   console.log("First three-character element:", result);




// task14

// let names = ["Alice", "Bob", "Anna", "Alex", "David", "Amy", "Andrew"];

// // Create a new array containing the elements from the original array starting with A
// let namesStartingWithA = names.filter(name => name.charAt(0).toUpperCase() === 'A');


// console.log("Names starting with A:", namesStartingWithA);

  

// task15

// function addTax(prices) {
//     const EDV_RATE = 0.20; // 20% EDV rate
//     return prices.map(price => price * (1 + EDV_RATE));
//   }
  
//   // Test the function with an array of prices excluding EDV
//   let pricesExcludingEDV = [100, 50, 75, 120, 200];
//   let pricesIncludingEDV = addTax(pricesExcludingEDV);
//   console.log("Prices including EDV:", pricesIncludingEDV);
  


// task16

// Function to count the odd and even numbers in an array
// function countEvensAndOdds(numbers) {
//     let evenCount = numbers.filter(num => num % 2 === 0).length;
//     let oddCount = numbers.length - evenCount;
//     return `There are ${evenCount} even and ${oddCount} odd numbers in the array.`;
//   }
  

//   let numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let result = countEvensAndOdds(numbers);
//   console.log(result);
  
  

// binary-search example

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         return mid; // Element found
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Continue searching to the right
//       } else {
//         right = mid - 1; // Continue searching to the left
//       }
//     }
  
//     return -1; // Element not found
//   }
  
//   // Create an array from 1 to 100
//   let arr = [];
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i);
//   }
  
//   let targetNumber = 76; // Number to search for
//   let resultIndex = binarySearch(arr, targetNumber);
//   if (resultIndex !== -1) {
//     console.log(`The number ${targetNumber} is found at index ${resultIndex}.`);
//   } else {
//     console.log(`The number ${targetNumber} is not found.`);
//   }
  
  

