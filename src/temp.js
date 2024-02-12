//Task 1
const d1 = new Date(2020, 0, 1);

function WW(d1) {
  let friday = 0;
  let currentDate = new Date();
  let someDate = new Date(d1);
  while (someDate <= currentDate) {
    if (someDate.getDay() === 5 && someDate.getDate() === 13) {
      friday++;
    }
    someDate.setDate(someDate.getDate() + 1);
  }
  return friday;
}
console.log(WW(d1));

///Task 2

function answer(numStr) {
  let Sum1 = 0;
  let Sum2 = 0;
  let arr = Array.from(String(numStr));
  console.log(arr);
  for (i = 0; i <= arr.length / 2 - 1; i++) {
    Sum1 = Sum1 + Number(arr[i]);
  }
  for (i = arr.length / 2; i < arr.length; i++) {
    Sum2 = Sum2 + Number(arr[i]);
  }
  console.log(Sum1);
  console.log(Sum2);
  if (Sum1 === Sum2) console.log("Yes");
  else console.log("No");
}
let temp = answer("117275");

////Task 3
const nums = [12, 15, 20, 25, 59, 79];
const Average = nums.reduce((prev, cur) => prev + cur) / nums.length;
console.log(Average);
