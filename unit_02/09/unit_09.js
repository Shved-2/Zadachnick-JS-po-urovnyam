// Task 1 ============================================
/*  Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется
  ввиду следующее: 12 + 34 + 56*/
let a1 = 123456;

function t1() {
  let arr = String(a1).split('');
  let arr2 = [];
  let str = 0;
  for (let i = 0; i < arr.length; i += 2) {
    arr2.push(arr[i] + arr[i + 1]);
  }
  for (let item of arr2) {
    str += Number(item);
  }
  document.querySelector('.out-1').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дан массив с числами:

[1, 2, 3, 4, 5]
Выведите в консоль элементы этого массива в обратном порядке.*/
let a2 = [1, 2, 3, 4, 5];

function t2() {
  let arr = a2.reverse();
  document.querySelector('.out-2').innerHTML = arr;
  console.log(arr);
}
document.querySelector('.b-2').addEventListener('click', t2);
