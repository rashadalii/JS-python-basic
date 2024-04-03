// Examples using if else statement,loops,methods(function) and Array

// let count = 0;
// while (count<=10) {
//     count++
//     if (count==8) {
//         break;
       
//     }
    
//    console.log(count);
// }

// for (let i = 1; i <=10; i++) {
//     if (i%2==0) {
//         console.log("Rashad");
    
        
//     }else{
//         console.log("Salam");
//     }
//     // console.log(i);
    
// }


// nested loops example

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} x ${j} = ${i * j}`);

//     }
//     console.log("--------------------------------");
// }


// let num=Number(prompt("Bir eded daxil edin"))
// let result=true;
// for (let i = 2; i <=Math.floor(num/2) ; i++){
//     if (num%i==0) {
//         // sade deyil
//         result=false;
//         break;
        
//     }
// }
// if (result) {
//     alert(num + " sadedir")
    
// }else{
//     alert(num + " murekkebdir")
// }


// let num = Number(prompt("bir eded daxil edin"));
// let multiply=1;

// for(let i=1; i<=num;i++){
//     multiply*=i;
   
// }
// alert("Result :" + multiply)



// Armstrong ededin tapilmasi

// let num=prompt("Bir eded daxil edin");
// let sum=0;

// for(let i=0;i<num.length;i++){
//     let number =num.charAt(i);
//     sum+=number**3;
// }
// if(num==sum){
//     alert("Armstrong ededidir:");
// }else{
//     alert("Armstrong ededi deyil:")
// }


// let text = "Hal hazirda javascript dili oyrenirem ";
// let letter = prompt("herfi daxil edin");

// let result = find(letter);
// alert("herf sayisi : " + result)

// function find(letter){
//     let count =0
//     for(let i=0;i<text.length ; i++){
//         if(text.charAt(i).toLowerCase()===letter.toLowerCase()){
//             count+=1;
//         }
//     }
//     return count;
// }


// let num=+prompt("eded daxil edin")
// perfectNumber(num);

// function perfectNumber(number){
//     let sum = 0
//     for(let i=2 ; i<=number/2;i++){
//         if(number%i==0){
//            sum+=i;
//         }
//     }
//     sum+=1+number;

//     if(sum==number*2){
//         console.log("mohtesem ededdir....");
//     }else{
//         console.log("mohtesem eded deyil...");
//     }
// }




// convertDecimalToBinary(25)

// function convertDecimalToBinary(number){
//     let binary = "";
//     while (true) {
//         binary+=(number%2).toString();
//         number=Math.floor(number/2);
//         if(number==1){
//             // no need to divide anymore
//             binary+=1;
//             break;
//         }
        
//     }
//     let result = reverse(binary);
//         console.log("Netice: " + result );
        
// }

// function reverse(binary){
//     let reversedBinary ="";
//     for(let i = binary.length-1;i>=0;i--){
//         reversedBinary+=binary[i];
//     }
//     return reversedBinary;
// }



// let binary = "1011001101";

// function convertBinaryToDecimal(binary){
//     let sum = 0;
//     let power =0;

//     for(let i=binary.length -1;i>=0 ;i--){
//         if(Number(binary.charAt(i))!=0){
//         sum+= Number(binary.charAt(i)) * Math.pow(2,power);
//         }
//         power++;
//     }

//     console.log("Result : " +sum);
// }

// // convertBinaryToDecimal(binary);

// let count =0;

// while (count<=10) {
//     count++;
//     if(count==8){
//         continue;
//     }
//     console.log(count);
    
// }


// let num = 10;
// let temp = num;
// let reverseNum = 0;

// while (temp > 0) {
//     let digit = temp % 10;
//     reverseNum = reverseNum * 10 + digit;
//     temp = Math.floor(temp / 10);
// }

// if (num === reverseNum) {
//     console.log(num + " is a palindrome.");
// } else {
//     console.log(num + " is not a palindrome.");
// }



// let name = "radar";

// function reversedString(str) {
//     return str.split('').reverse().join('');
// }

// let result = reversedString(name);
// console.log(result);

// if (result === name) {
//     console.log("name is a palindrome");
// }



// let name="radar"
// let result=reversedString(name)
// console.log(result);
// if(result===name){
//     console.log("name is palindrome");
// }
// function reversedString(str){
//     let newstring="";
//     for (let i = str.length -1;i>=0 ; i--){
//         newstring+=str[i];
     
//     }
//     return newstring
// }



// Arrays examples

// let fruits =["apple","pineapple","apricot","banana","pear","grape"]

// // with forEach
// fruits.forEach(function (fruit) {
//     console.log(fruit);
// })

// // with for
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// // with while
// let i=0;
// while (i<fruits.length) {
//     console.log(fruits[i]);
//     i++;
    
// }

// Closure example

// function outerFunction() {
//     let outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable); // innerFunction has access to outerVariable
//     }
  
//     return innerFunction; // return the inner function
//   }
  
//   let innerFunc = outerFunction();
//   innerFunc(); // this will log 'I am from the outer function' to the console
  



  // Callback example

  // function getName(callback) {
//     setTimeout(() => {
//         let name="Jake"; // web serverden aldi
//         callback(name);
//     }, 1000);
// }

// function getSurname(name) {
//     setTimeout(() => {
//         let surname = "Paul"; // web serverden aldi
//         console.log(name,surname);
//     }, 500);
// }

// getName(getSurname)


// function getQuarterSalary(salaries, quarterNumber) {
//     let startIndex = (quarterNumber - 1) * 3;
//     let endIndex = startIndex + 3;
//     let total = 0;
//     for (let i = 0; i < salaries.length; i++) {
//       for (let j = startIndex; j < endIndex; j++) {
//         total += salaries[i][j];
//       }
//     }
//     return total;
//   }
  
//   // Example usage
//   let salaries = [
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
//  ]
//   let quarterNumber = 1;
//   let totalForQuarter1 = getQuarterSalary(salaries, quarterNumber);
//   console.log("Total salary for quarter 1:", totalForQuarter1);
  

