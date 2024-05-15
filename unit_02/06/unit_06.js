// Task 1 ============================================
/*  Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой
          строки*/
let str = 'dfgdfg6dfgr8dfg2sdsfd9er7';
function t1() {
  let arr = str.split('');
  let arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrAllIndex = [];
  for (let item in arr) {
    for (let i = 0; i < arrNumber.length; i++) {
      if (arr[item] == arrNumber[i]) {
        arrAllIndex.push(item);
      }
    }
  }
  document.querySelector('.out-1').innerHTML = arrAllIndex;
  console.log(arrAllIndex);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*   Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код,
          который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]*/
let arr2 = [123, 456, 789];
function t2() {
  let arrnew = [];
  for (let item of arr2) {
    arrnew.push(String(item).split('').reverse().join(''));
  }
  document.querySelector('.out-2').innerHTML = arrnew;
  console.log(arrnew);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/*  Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца
          числа. В нашем случае должно получится следующее: '1 234 567'*/
let str3 = '1234567';
function t3() {
  let arr = str3.split('').reverse();
  let arrnew = [];
  let str = '';
  for (let item in arr) {
    if ((item + 1) % 3 == 0) {
      arrnew.push(arr[item]);
      arrnew.push(' ');
    } else {
      arrnew.push(arr[item]);
    }
  }
  str = arrnew.reverse().join('');
  document.querySelector('.out-3').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4============================================
/*  Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный. В
 нашем случае должно получится следующее: 'aBcDe'*/

let a4 = 'AbCdE';
function t4() {
  let arr = a4.split('');
  let arrLittle = [];
  let arrFinal = [];
  let str = '';
  for (let item of arr) {
    arrLittle.push(item.toLowerCase());
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arrLittle[i]) {
      arrFinal.push(arr[i].toUpperCase());
    } else {
      arrFinal.push(arr[i].toLowerCase());
    }
  }
  str = arrFinal.join('');
  document.querySelector('.out-4').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-4').addEventListener('click', t4);

// Task 5============================================
/*  Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары
          элементов вместе: [12, 34, 56]*/

let arr5 = [1, 2, 3, 4, 5, 6];
function t5() {
  let arr2 = [];
  str = '';
  for (let i = 0; i < arr5.length; i += 2) {
    str += String(arr5[i]) + String(arr5[i + 1]) + ' ';
  }
  arr2 = str.split(' ');
  arr2.pop();
  document.querySelector('.out-5').innerHTML = arr2;
  console.log(arr2);
}
document.querySelector('.b-5').addEventListener('click', t5);

// Task 6============================================
/*  Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Сделайте заглавным первый символ  каждого 
второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb  ccc Eee fff'*/

let str6 = 'aaa bbb ccc eee fff';
function t6() {
  let arr = str6.split(' ');
  let arr2 = [];
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let arrSub = arr[i].split('');
    if ((i + 1) % 2 == 0) {
      arrSub[0] = arrSub[0].toUpperCase();
    }
    let strSub = arrSub.join('');
    arr2.push(strSub);
  }
  document.querySelector('.out-6').innerHTML = arr2;
  console.log(arr2);
}
document.querySelector('.b-6').addEventListener('click', t6);
