// Task 1 ============================================
/* Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.*/
let a1 = 654987321;

function t1() {
  let arr = String(a1).split('').sort();

  let num = Number(arr.join(''));
  let str = '';
  if (a1 == num) {
    str = true;
  } else {
    str = false;
  }
  document.querySelector('.out-1').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.*/

let a2 = [1, '', 2, 3, '', 5];
function t2() {
  a2 = a2.filter((elem) => {
    return elem != '';
  });
  document.querySelector('.out-2').innerHTML = a2;
  console.log(a2);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/* Дан массив: [ [2, 1, 4, 3, 5], [3, 5, 2, 4, 1], [4, 3, 1, 5, 2], ] Отсортируйте элементы в
          каждом подмассиве.*/
let a3 = [
  [2, 1, 4, 3, 5],
  [3, 5, 2, 4, 1],
  [4, 3, 1, 5, 2],
];
function t3() {
  let arr = [];
  arr = a3.map((elem) => {
    return elem.sort();
  });
  document.querySelector('.out-3').innerHTML = a3;
  console.log(arr);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*   Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.*/
let arr41 = [1, 2, 3];
let arr42 = [1, 2, 3, 4, 5];

function t4() {
  let arr = [];
  for (let i = 0; i < arr41.length; i++) {
    arr.push(arr42[i]);
  }
  arr42 = arr;
  document.querySelector('.out-4').innerHTML = arr41 + ' <br>' + arr42;
  console.log(arr41);
  console.log(arr42);
}
document.querySelector('.b-4').addEventListener('click', t4);
