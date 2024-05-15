// Task 1 ============================================
/*   Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.*/
let a1 = 'asfdf58r7bn9';

function t1() {
  let arrnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr = a1.split('');
  let arrIndex = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arrnum.length; k++) {
      if (arr[i] == arrnum[k]) {
        arrIndex.push(i);
      }
    }
  }
  num = arrIndex[0];

  document.querySelector('.out-1').innerHTML = num;
  console.log(num);

  console.log('0' == 0);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*   Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.*/
let arr2 = {
  name: 'Joan',
  year: 1956,
  month: 'March',
  day: 12,
};
function t2() {
  let key = [];
  let name = [];
  for (let item in arr2) {
    console.log(item);
    key.push(item);
    name.push(arr2[item]);
  }
  document.querySelector('.out-2-1').innerHTML = key;
  document.querySelector('.out-2-2').innerHTML = name;
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/* Дано число. Выведите в консоль количество четных цифр в этом числе.*/
let num3 = 32459866721;
function t3() {
  let arr = String(num3).split('');
  let num = 0;
  for (let item in arr) {
    if (arr[item] % 2 == 0) {
      num++;
    }
  }
  document.querySelector('.out-3').innerHTML = num;
  console.log(num);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой
          строки. В нашем случае должно получится следующее: 'AbCdE'*/
let str4 = 'abcde';
function t4() {
  let arr = str4.split('');
  let arr2 = [];
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arr2.push(arr[i].toUpperCase());
    } else {
      arr2.push(arr[i]);
    }
  }

  str = arr2.join('');

  document.querySelector('.out-4').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*   Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого
          слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'*/
let str5 = 'aaa bbb ccc';
function t5() {
  let arr = str5.split(' ');
  let finarr = [];
  let finstr = '';
  for (let item in arr) {
    let arr2 = arr[item].split('');
    let arrnew = [];
    for (let i = 0; i < arr2.length; i++) {
      if (i == 0) {
        arrnew.push(arr2[i].toUpperCase());
      } else {
        arrnew.push(arr2[i]);
      }
    }
    let str = arrnew.join('');
    finarr.push(str);
  }
  finstr = finarr.join(' ');
  document.querySelector('.out-5').innerHTML = finstr;
  console.log(finstr);
}
document.querySelector('.b-5').addEventListener('click', t5);
