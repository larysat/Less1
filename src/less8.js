console.log("**********Task 1************");
///1. Написать функцию, которая будет записывать в массив ряд фибоначчи начиная с N члена с длинной массива M.
//В функцию надо передать номер числа фибоначчи с которого начинается массив (N) и длину, которой должен быть массив (M).

function fibonachi(n, m) {
  let a = 1;
  let b = 2;
  let arr = [a, b];
  let c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  return arr.slice(m);
}
console.log(fibonachi(7, 2));

console.log("**********Task 2************");

//2. Напишите функцию, которая вставит данные в массив с заданного места в массиве.
//Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c']
//получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function AA(n) {
  let arr1 = [1, 0, 5, 3, 9, 8, 7];
  let arr2 = ["a", "b", "c"];
  //n = 3;
  let result = [...arr1.slice(0, n), ...arr2, ...arr1.slice(n, arr1.length)];
  console.log(result.length);
  console.log(result);
  return result;
}
AA(3);
