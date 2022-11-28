let num = 360;
let lastDigit = num % 10;
let str = lastDigit.toString() + (num - lastDigit) / 10;
let newNum = 0;
if (lastDigit === 0) {
  newNum = num;
} else {
  newNum = +str;
}
console.log(newNum);

let num1 = -78;
let num2 = 0;
let num3 = 23;
let currentValue = 0;

if (num1 > num2) {
  currentValue = num1 + num2;
  num2 = currentValue - num2;
  num1 = currentValue - num2;
}

if (num2 > num3) {
  currentValue = num2 + num3;
  num2 = currentValue - num2;
  num3 = currentValue - num2;
}

if (num1 > num2) {
  currentValue = num1 + num2;
  num2 = currentValue - num2;
  num1 = currentValue - num2;
}
console.log(num1, num2, num3);

let n = +prompt();
let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i++;
}

if (n % 3 === 0 && n % 10 === 1) {
  j++;
}

const figureName = "rectangle";
const H = 6;
const B = 7;
let area = "Please enter positive H and B";

if (H > 0 && B > 0) {
  switch (figureName) {
    case "triangle":
      area = 0.5 * H * B;
      break;
    case "rectangle":
      area = H * B;
      break;
  }
}
console.log(area);
