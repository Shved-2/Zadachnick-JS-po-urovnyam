// Task 1 ============================================
/*  Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.*/
let i = document.querySelector('.i-1');
function t1() {
  let arr = i.value.split('');
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arrNum.length; k++) {
      if (arr[i] == arrNum[k]) {
        count++;
      }
    }
  }
  let strLength = arr.length - count;
  document.querySelector('.out-1').innerHTML = strLength;
  console.log(strLength);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дано число. Получите первую четную цифру с конца этого числа*/

let num2 = document.querySelector('.i-2');
function t2() {
  let arr = num2.value.split('').reverse();
  console.log(arr);
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      str = arr[i];
      return str;
    }
  }
  console.log(str);
}
document.querySelector('.b-2').addEventListener('click', () => {
  document.querySelector('.out-2').innerHTML = t2();
});

// Task 3============================================
/*  Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на
   '!': '!bcde !bcde !bcde'*/
let a3 = 'abcde abcde abcde';
function t3() {
  let arr = a3.split(' ');
  let arr2 = arr.map((elem) => {
    return '!' + elem.slice(1);
  });
  document.querySelector('.out-3').innerHTML = arr2;
  console.log(arr2);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4============================================
/*  Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых
  элемента подряд*/

let a4 = [1, 2, 3, 3, 4, 5];
function t4() {
  let str = 'NO';
  for (let i = 0; i < a4.length - 1; i++) {
    if (a4[i] == a4[i + 1]) {
      str = 'Yes';
    }
  }
  document.querySelector('.out-4').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-4').addEventListener('click', t4);
