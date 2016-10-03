/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'
for (var i = 0; i < 10; i++) {
  var digit = Math.round(Math.random()*100);
  arr1.push(digit);
}
console.log(arr1);

//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
var arr1Shifted = arr1.shift();
console.log('removed 1st element of arr1 is ' + arr1Shifted);
console.log('updated arr1 is ' + arr1);

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
var arr1Poped =  arr1.pop();
console.log('removed the last emelment of arr1 is ' + arr1Poped);
console.log('updated arr1 is '+ arr1);

//Question: how many elements does arr1 have at this moment?
console.log('arr1 has ' + arr1.length + ' elements' );

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2.unshift(arr1[i]);
}
console.log('arr2 is ' + arr2);

//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
    //your code here
    return el % 2 == 0;
});
console.log(arr3);
