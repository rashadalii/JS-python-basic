// task01

// let names = ["Submit", "Regect", "Sucsses"];

// names[1] = "Classified";
// console.log(names);



// task02

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`Episode ${i + 4}: ${arr[i]}`);
// }


// task03

// let  departmentSalaries= [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75], 
//     [150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65], 
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65], 
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65], 
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75] 
// ]


// function getAnnualSalary(departmentSalaries) {
//     let total = 0;
//     for (let i = 0; i < departmentSalaries.length; i++) {
//         for (let j = 0; j < departmentSalaries[i].length; j++) {
//       total += departmentSalaries[i][j];
//       }
 
//     }
//     return total;
//   }
  
//   console.log("Annual salary for the entire department:", getAnnualSalary(departmentSalaries));

  
//   function getMonthlySalary(departmentSalaries, monthNumber) {
//     let sum = 0;
//     for (let i = 0; i < departmentSalaries.length; i++) {
//       sum += departmentSalaries[i][monthNumber - 1];
//     }
//     return sum;
//   }

//   console.log("Monthly salaries for the entire department for month 3:", getMonthlySalary(departmentSalaries, 9));


//   function getQuarterlySalary(departmentSalaries, quarterNumber) {
//     const startMonth = (quarterNumber - 1) * 3;
//     const endMonth = startMonth + 3;
//     let total = 0;
//     for (let i = 0; i < departmentSalaries.length; i++) {
//       for (let j = startMonth; j < endMonth; j++) {
//         total += departmentSalaries[i][j];
//       }
//     }
//     return total;
//   }

//   console.log("Quarterly salary for the entire department for quarter 2:", getQuarterlySalary(departmentSalaries, 4));


// task04


// let numbers = prompt("Please enter five numbers separated by commas:");

// let numbers="76,35,67,89,34"

// let numberStrings = numbers.split(",");


// let smallestNumber = Number(numberStrings[0]);
// for (let i = 1; i < numberStrings.length; i++) {
//   let currentNumber = Number(numberStrings[i]);
//   if (currentNumber < smallestNumber) {
//     smallestNumber = currentNumber;
//   }
// }

// console.log("The smallest number is:", smallestNumber);

// task05

// let originalText = '32, 31, 34, 36, 31';

// // let modifiedText = originalText.replace(',', ';');

//  let modifiedText = originalText.split(',').join(';');

// console.log(modifiedText);


  