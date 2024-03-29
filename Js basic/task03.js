// task-01
// let username = "Rashad";
// let username1 ="jake";
// let username2="Paul";

// function welcome(param) {
//     console.log(`${param} is active`);
// }

// welcome(username);
// welcome(username1);
// welcome( username2);

// task-02

// let a = 14;
// let b = 17;
// let c = 25;

// function getMax(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// let maxNumber = getMax(a, b, c);
// console.log(maxNumber); 



// // task-03

// function calculateTotalInRubles(rubles, dollars, exchangeRate) {
//     let totalInRubles = rubles + (dollars * exchangeRate);
//     return `Rubla cevrilmis butun balance: ${totalInRubles} rubles`;
//   }
  

//   let rublesAmount = 1200;
//   let dollarsAmount = 20;
//   let exchangeRate = 75;
//   console.log(calculateTotalInRubles(rublesAmount, dollarsAmount, exchangeRate));
  


// task-04
// function numberToText(number) {
//     const singleDigits = ["", "bir", "iki", "uch", "dord", "besh", "alti", "yeddi", "sekkiz", "doqquz"];
//     const tens = ["", "on", "iyirmi", "otuz", "qirx", "elli", "altmish", "yetmish", "seksen", "doxsan"];
  
//     if (number >= 1 && number <= 9) {
//       return singleDigits[number];
//     } else if (number >= 11 && number <= 19) {
//       return tens[Math.floor(number /10)] + " " + singleDigits[number%10];
//     } else if (number % 10 === 0) {
//       return tens[number / 10];
//     } else {
//       return tens[Math.floor(number / 10)] + " " + singleDigits[number % 10];
//     }
//   }
  
  
//   let userInput = +prompt("eded daxil edin"); 
//   console.log(numberToText(userInput));

// task-05
// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
  
 
//   console.log(min(5, 3));
//   console.log(min(-2, 10));



// task-06

// function calc(a, b, operation) {
//     switch (operation) {
//       case '+':
//         return a + b;
//       case '-':
//         return a - b;
//       case '*':
//         return a * b;
//       case '/':
//         return a / b;
//       default:
//         return "Invalid operation";
//     }
//   }
  
  
//   console.log(calc(4, 6, '+')); 
//   console.log(calc(8, 3, '-'));
//   console.log(calc(5, 2, '*')); 
//   console.log(calc(10, 2, '/')); 
//   console.log(calc(10, 2, '%')); 
  


// function calc(a, b, operation) {
//     if (operation === '+') {
//       return a + b;
//     } else if (operation === '-') {
//       return a - b;
//     } else if (operation === '*') {
//       return a * b;
//     } else if (operation === '/') {
//       return a / b;
//     } else {
//       return "Invalid operation";
//     }
//   }
  
//   console.log(calc(4, 6, '+')); 
//   console.log(calc(8, 3, '-')); 
//   console.log(calc(5, 2, '*')); 
//   console.log(calc(10, 2, '/')); 
//   console.log(calc(10, 2, '%')); 
  


// task-07

// function isLucky(ticketNumber) {
//     let ticketStr = ticketNumber.toString();
    
//     if (ticketStr.length !== 6) {
//       return false; 
//     }
  
//     let firstHalf = Number(ticketStr[0]) + Number(ticketStr[1]) + Number(ticketStr[2]);
//     let secondHalf = Number(ticketStr[3]) + Number(ticketStr[4]) + Number(ticketStr[5]);
  
//     return firstHalf === secondHalf;
//   }
  

//   console.log(isLucky(234801)); 
//   console.log(isLucky(123456)); 
  

  
  
// task-08

// function capitalizeWords(sentence) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     return words.join(" ");
//   }
  
  
//   console.log(capitalizeWords('hello my name is rashad')); 



// task-09

// function isEven(number) {
//     return number % 2 === 0;
//   }
  
//   console.log(isEven(4)); 
//   console.log(isEven(7)); 

// task-10

// function isValidNumber(phoneNumber) {
//     if (phoneNumber.length === 12 && phoneNumber.startsWith("+7")) {
//       for (let i = 2; i < phoneNumber.length; i++) {
//         if (isNaN(phoneNumber[i])) {
//           return false;
//         }
//       }
//       return true;
//     } else {
//       return false;
//     }
//   }
  
  
//   console.log(isValidNumber('+71234567890')); 
//   console.log(isValidNumber('+11234567890'));
//   console.log(isValidNumber('+712a4567890'));
//   console.log(isValidNumber('+751234567890'));

// task-11

// function numCounter(text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//       if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) {
//         count++;
//       }
//     }
//     return count;
//   }
  
  
//   console.log(numCounter("15263538479359486()-=':;!@#$%^&*()REGEX()")); 
  