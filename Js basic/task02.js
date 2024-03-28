// Task-01

// let number = +prompt("Enter a two-digit number:");


// while (number < 100) {
//   number += 7;
// }

// console.log("The final three-digit number is: " + number);

// task-02

// let N =prompt("eded daxil edin");

//  let i=0;

//  while(i<N){
//     console.log("I know how to use cycles");
//     i++;
//  }



// task-03

// let i=100;

// while(i<1000){
//     if(i%10==0)
//     console.log(i);
//     i++;
// }

// task-04

// let i = 10;
// let sum = 0;
// while (i < 100) {
//     if (i % 2 === 1) {
//         console.log(i);
//         sum += i;
//     }
//     i++;
// }
// console.log(sum);

// task-05

// let num=+prompt("please input number");
// let i=100;
// let sum =0;

// while (i<1000) {
//     if (i%num==0) {
//         console.log(i);
//         sum+=i;
        
//     }
//     i++;
// }
// console.log(sum);

// task-06

// let n =+prompt("eded daxil edin")
// while (n >= 1) {
//   let sadedir = true;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       sadedir = false;
//       break;
//     }
//   }
//   if (sadedir) {
//     console.log(n);
//   }
//   n--;
// }


// task-07

// let result=1
// for (let i = 1; i<=10; i++) {
//     console.log(i);
//     result*=i
    
// }
// console.log(result);

// task-08

// let text="i  try to learn javascript"
// let newstring=""

// for (let i = text.length-1; i>=0 ;i--) {
//     newstring+=text[i];
//     // console.log(newstring);

    
// }
// console.log(newstring);

// task-09

// let text="backend develeoper.frontend developer.fullstack developer"

// function findFirstPoint(text,letter) {
//     for(let i=0;i<=text.length;i++)
//     if(letter==text[i])
//    return i;
    
// }
// let result=findFirstPoint(text,".")
// console.log(result);


// task-10

// let text = "I know 2 essential programming language"; 
// let containsNumbers = false;

// for (let i = 0; i < text.length; i++) {
//   if (!isNaN(text[i])) {
//     containsNumbers = true;
//     break;
//   }
// }

// if (containsNumbers) {
//   console.log("The text contains numbers.");
// } else {
//   console.log("The text does not contain any numbers.");
// }

