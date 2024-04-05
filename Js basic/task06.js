// // task01,task02

// // let user = {
// //     firstname: 'Rashad',
// //     gender: 'Male',
// //     birthday: '28-5-2000'
// // };

// // user.age='23'
// // delete user.birthday

// // console.log(user);


// // task03
// // let user = {
// //     name: "Alice",
// //     age: 30,
// //     setAge: function(newAge) {
// //       this.age = newAge;
// //     },
// //     getYearsBeforeRetirement: function() {
// //       let remainingYears = 65 - this.age;
// //       if (remainingYears > 0) {
// //         return remainingYears;
// //       } else {
// //         return 0;
// //       }
// //     }
// //   };
  
// //   console.log(user.getYearsBeforeRetirement());  // Output: 35
  
// //   user.setAge(40);
// //   console.log(user.getYearsBeforeRetirement());  // Output: 25
  



// task04
// let client = {
//     fullName: 'Rashad Aliyev',
//     creditLimit: 5000,
//     balance: 3000,
//     presentOfMinPayment: 5, // 5% of the balance for minimum payment

//     getBalance: function() {
//         if (this.balance >= 0) {
//             return `Your balance is ${this.balance}`;
//         } else {
//             return `You owe ${-this.balance}`;
//         }
//     },

//     getMinPayment: function() {
//         if (this.balance > 0) {
//             const minPayment = (this.balance * this.presentOfMinPayment) / 100;
//             return `Your minimum payment is ${minPayment}`;
//         } else {
//             return `You have already ${-this.balance} debt.`;
//         }
//     },

//     withdraw: function(amount) {
//         if (this.balance + this.creditLimit >= amount) {
//             this.balance -= amount;
//             console.log(`Withdrawal of ${amount} successful. Current balance: ${this.balance}`);
//         } else {
//             console.log('Insufficient funds for withdrawal.');
//         }
//     },

//     refill: function(amount) {
//         this.balance += amount;
//         console.log(`Refill of ${amount} successful. Current balance: ${this.balance}`);
//     }
// };

// console.log(client.getBalance());
// console.log(client.getMinPayment());
// client.withdraw(900);
// client.refill(500);


 
// task05

// let calculator = {
//     memory: 0,
//     add: function(a, b) {
//       return a + b;
//     },
//     subtract: function(a, b) {
//       return a - b;
//     },
//     multiply: function(a, b) {
//       return a * b;
//     },
//     divide: function(a, b) {
//       if (b !== 0) {
//         return a / b;
//       } else {
//         return "Cannot divide by zero!";
//       }
//     },
//     storeInMemory: function(value) {
//       this.memory = value;
//     },
//     clearMemory: function() {
//       this.memory = 0;
//     },
//     recallMemory: function() {
//       return this.memory;
//     }
//   };
  

//   console.log(calculator.add(5, 3));  // Output: 8
//   console.log(calculator.multiply(4, 6));  // Output: 24
  
//   calculator.storeInMemory(10);
//   console.log(calculator.recallMemory());  // Output: 10
  
//   calculator.clearMemory();
//   console.log(calculator.recallMemory());  // Output: 0
  
