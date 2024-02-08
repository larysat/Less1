//TASK NUMBER 1
let n = 3;
console.log("Number of attempts is " + n);

let arr1 = []; //заполняю массив N...6N -для первого игрока
for (let i = n; i <= 6 * n; i++) {
  arr1.push(i);
}
let Points1 = Math.floor(Math.random() * arr1.length); //  сумма очков первого игрока
let arr2 = []; //массив N...6N -для второго игрока
for (let k = n; k <= 6 * n; k++) {
  arr2.push(k);
}
//console.log(arr2); //массив сумм очков второго игрока
let Points2 = Math.floor(Math.random() * arr2.length); //  сумма очков второго игрока
//console.log("Sum of points for the second player is " + arr2[Points2]);

if (Points1 > Points2) {
  //Who did win?
  let Result = "First";
  console.log("****The first player wins!****");
}
if (Points1 < Points2) {
  let Result = "Second";
  console.log("****The second player wins!****");
}
if (Points1 === Points2) {
  let Result = "Game draw";
  console.log("****Frienship won!****");
}

//TASK NUMBER 2 whole numbers
let N = 14;
let Sum = 0;
let k = 4; //количесво слагаемых
let a = 0;
let b = 0;
for (let i = 0; i < k - 1; i++) {
  a = Math.floor(Math.random() * (N - Sum - (k - 1 - i)) + 1);
  Sum = Sum + a;
  console.log(a);
}
b = N - Sum;
console.log(b);

//TASK NUMBER 2 with fractions
let N1 = 14;
let Sum1 = 0;
let k1 = 3; //количесво слагаемых
let a1 = 0;
let b1 = 0;
for (let i = 0; i < k1 - 1; i++) {
  a1 = Number((Math.random() * (N1 - Sum1 - (k1 - 1)) + 1).toFixed(2));
  console.log(a1);
  Sum1 = Sum1 + a1;
}
b1 = Number((N1 - Sum1).toFixed(2));
console.log(b1);

//TASK NUMBER 3
let arrNumbers = [1, 3, 7, 10, 15, 21];
console.log("Sequence of an array: " + arrNumbers);
arrNumbers.reverse();
console.log("Reverse sequence of an array: " + arrNumbers);

//TASK NUMBER 4
let arrMax = [13, 3, 15, 25, 115, 0];
//console.log("Sequence of an array: " + arrMax);
let valueMax = Math.max.apply(null, arrMax);
console.log(" Max value of an array: " + valueMax);

//TASK NUMBER 5
let x1 = 3456;
let x2 = 1465;
let arrX1 = Array.from(String(x1));
let arrX2 = Array.from(String(x2));
console.log(arrX1);
console.log(arrX2);
let y = 0; //счетчик совпадений позиций & значений
let z = 0; //счетчик совпадений только значений

for (let i = 0; i < arrX1.length; i++) {
  for (let j = 0; j < arrX2.length; j++) {
    if (arrX1[i] === arrX2[j] && i === j) {
      y = y + 1;
    }
    if (arrX1[i] === arrX2[j]) {
      z = z + 1;
    }
  }
}
console.log("quantity match by position and value", y);
console.log("quantity match by value", z);
