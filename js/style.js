let sum = 1;
let sumNum = document.getElementById("num");
let sumItem = 30;

function plusBtn() {
  if (sum < 30) {
    sum++;
    sumNum.value = sum;
  }
}

function minusBtn() {
  if (sum > 1) {
    sum--;
    sumNum.value = sum;
  }

  return sum;
}
