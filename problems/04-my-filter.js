/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/
//steps
//make two parameters array, and cb
//create a variable to filter(store) array
//iterate through the array
//make a conditional
//return the variable (array)
//      -make new array contain all true elements

//with for loop
let myFilter = function(array, cb) {
let newArray = [];
for(let i = 0; i< array.length; i ++) {
    let el = array[i]
    if(cb(el)) {
        newArray.push(el);
    }
}
return newArray;
}


//with forEach
// let myFilter = function(array, cb) {
// let newArray = [];
// array.forEach(function(el){
//     if (cb (el)){
//         newArray.push(el)
//     }
// });


// return newArray;
// };


let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
