//////////////////Task 1/////
const time = function () {
  return Math.floor(Math.random() * 5000 - 1) + 1000;
};

const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1");
  }, time());
}).then((value) => {
  return value;
});

const prom2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2");
  }, time());
}).then((value) => {
  return value;
});

const prom3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3");
  }, time());
}).then((value) => {
  return value;
});

Promise.race([prom1, prom2, prom3]).then((result) => {
  console.log("the fist was ", result);
});

//////////////////Task 2/////
function getNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const getNumX = new Promise((res, rej) => {
  setTimeout(() => {
    const randomX = getNum(1, 5);
    res(randomX);
  }, 3000);
}).then((value) => {
  console.log(value);
  return value;
});
async function startX() {
  let x = await getNumX;
  console.log(x * x);
}
startX();

//////////////////Task 3/////
const getNumA = new Promise((res, rej) => {
  setTimeout(() => {
    const randomA = getNum(1, 5);
    res(randomA);
  }, 3000);
}).then((value) => {
  console.log(value);
  return value;
});

const getNumB = new Promise((res, rej) => {
  setTimeout(() => {
    const randomB = getNum(6, 10);
    res(randomB);
  }, 5000);
}).then((value) => {
  console.log(value);
  return value;
});
async function startAB() {
  let a = await getNumA;
  let b = await getNumB;
  console.log(a + b);
}
startAB();
