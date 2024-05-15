// Task 1 ============================================
/*  Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех
          нулей в этой в строке.*/
let str = '023m0df0dfg0';
function t1() {
  let arr = str.split('');
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr2.push(i);
    }
  }
  document.querySelector('.out-1').innerHTML = arr2;
  console.log(arr2);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем
          случае должно получится следующее: 'abdeg'*/
let str2 = 'abcdefg';

function t2() {
  let arr = str2.split('');
  let arr2 = [];
  for (let item in arr) {
    if ((item + 1) % 3 == 0) {
      continue;
    } else {
      arr2.push(arr[item]);
    }
  }
  let str = arr2.join('');
  document.querySelector('.out-2').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов,
          стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.*/

let arr3 = [1, 2, 3, 4, 5, 6];
function t3() {
  let summOdd = 0;
  let summEven = 0;
  for (let item in arr3) {
    if (item % 2 == 0) {
      summEven += arr3[item];
    } else {
      summOdd += arr3[item];
    }
  }
  document.querySelector('.out-3').innerHTML = summEven / summOdd;
  console.log(summEven / summOdd);
}
document.querySelector('.b-3').addEventListener('click', t3);
