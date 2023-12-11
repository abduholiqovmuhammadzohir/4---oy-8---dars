
// IIFE ======================================
// (function(){
//     let name = "Muhammadzohir"
//     console.log(name);
// })()


// Arry =======================================
// let arr = [1,2,3,4]

// arr.push("xayr")  // arreydi oxiriga malumot qo'shadi
// arr.unshift("hi")  // arreydi boshiga malumot qo'shadi
// arr.pop()  // arreydi oxiridan bitta malumot olib tashlaydi 
// arr.shift()   // arreydi boshidan bitta malumot olib tashlaydi 

// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// function sum (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){

//     }
//     return sum;
// }
// console.log(sum([1,2,3]));


// const arr = [1,2,3,4,5]

// sum = 0;
// for (const item of arr){
//     sum += item
// }
// console.log(sum);


// obyekt

// let user = {
//     name:"John",
//     age: 25,
//     email:"john@gmail.com"
// };
// console.log(user.name);
// user.name = "Done";
// user.phone = "+9981234567";
// delete user.age;
// console.log(user);


// 4 - oy 8 - dars  homework 

// 1 - misol

// function sum(arr) {
//     let sum = 1
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
//             sum *= arr[i]
//         }       
//     }
//     return sum;
// }
// console.log(sum([1,2,3,5]));


// 2 - misol

let arr = ["salom","muhammadzohir","abduholiqov","asd","fgh"]
 
let arr1 = arr.filter((value,index,arr) => {
    return value.length = 1;
});

console.log(arr1);



// 3 - misol

// function sum(arr) {
//        let sum1 = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 1) {
//             sum1.push(arr[i])
//         }       
//     }
//     return sum1;
// }
// console.log(sum([1,2,3,5,7]));


// 4 - misol

// function sum(arr) {
//        let sum1 = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 1) {
//             sum1++
//         }       
//     }
//     return sum1;
// }
// console.log(sum([1,2,3,5,7]));


// 5 - misol

// let arr = ["salom","muhammadzohir","abduholiqov","asd","fgh"]
 
// let arr1 = arr.filter((value,index,arr) => {
//     return value.length > 5;
// });

// console.log(arr1);


// 6 - misol

// function sum(arr){
//     let res = 0;
//     for (const item of arr) {
//         let counter = 0;
//         for(let i = 1; i <= item; i++){
//             if(item % i == 0){
//                 counter++
//             }
//         }
//         if(counter == 2){
//             res++
//         }
//     }
//     return res
// }
// console.log(sum([1,2,3,5]));


// 7 - misol

// function sum(arr) {
//     let sum = 1
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 7 == 0 && arr[i] % 3 == 0) {
//             sum *= arr[i]
//         }
//     }
//     return sum;
// }
// console.log(sum([1,2,3,5,21]));
