"strict use"
//1
// function sumUp(...numbers) {
//   let sum = 0;
//   for (let items of numbers) sum += items;
//   return sum;
// }
// let result = sumUp(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);
//2
// let user = {
//   firstname: "giorgi",
//   lastname: "saakadze",
//   age: 32,
//   isloggedin: true,
// };

// function data(first, last){
//   if(user.isloggedin){
// console.log("my name is " + first + " my last name is " + last);} else{
//     console.log("No Such User here");
// }
// }
// data(user.firstname, user.lastname);
//3
// function maxNumber(...numbers){
// for (let items of numbers)
// return items;
// }
// let result = maxNumber (Math.max(5, 10, 25, 100, 3, 0, -5));
// console.log(result);
//4
// function checkNumber(a) {
//   if (a % 2 == 0) {
//     return "this number is even";
//   } return "this number is odd";
// }

// let result = checkNumber(5);
// let check = checkNumber(6);
// console.log(result);
// console.log(check);

//5მოცემულია მასივი:
// let array = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
// let array = [1,2,3,4,5];
// array.reverse();
// console.log(array);
// let array = [1, 2, 3, 4, 5];
// function reverseNum() {
//   for (let i = array.length; i >= 0; i--) console.log(array[i]);
// }
// reverseNum();
//6

// let checkAge = (birthYear, today = 2024) => {
//   let age = today - birthYear;
//   if( age >= 18) {
//     return "სრულწლოვანი"
// }else {
//     return "არასრულწლოვანი"
// };
// };
// let asaki = checkAge(1993);
// let tslovaneba = checkAge(2015);
// console.log(asaki);
// console.log(tslovaneba);



