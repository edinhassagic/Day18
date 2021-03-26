let myArr = [];

function* multiplication(x) {
    for(let i = 0; i < x; i++){
         x *= 2;
       myArr.push(x);
       yield x;
      }
      
} 
let num = multiplication(3);

for ( i = 0; i < 3; i++) {
    
    console.log(num.next().value);
}
module.exports = multiplication;