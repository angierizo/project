
let multiMap = function(value,n,cb) {
  // let newValue = 0
  for(let i = 0; i < n; i++) {
   let newValue = cb(value);
    
  }
  return newValue;

};
let result1 = multiMap(7, 2, function (n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function (n) {
  return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function (s) {
  return s + "!";
});
