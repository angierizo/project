let selectiveMap = function(array, cb1, cb2) {
    let newArray = [];
    for (let i = 0; i< array.length; i++) {
        let el= array[i];
        if(cb1(el)) {
            newArray.push(cb2(el));
          
        }else {
            newArray.push(el)

        }
    }


    return newArray;

};
function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]