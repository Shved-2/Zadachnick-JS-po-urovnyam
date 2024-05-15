// Task 1 ============================================
/* 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв
          меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'*/
let str = 'a bc def ghij';

function t1() {
  let arr = str.split(' ');
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      arr2.push(arr[i].toUpperCase());
    } else {
      arr2.push(arr[i]);
    }
  }
  str = arr2.join(' ');
  document.querySelector('.out-1').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.*/
let i2 = document.querySelector('.i-2');
function t2() {
  let str1 = i2.value;
  let str2 = str1.toUpperCase();
  let text = '';
  if (str1 == str2) {
    text = 'cимвол в верхнем регистре';
  } else {
    text = 'символ в нижнем регистре';
  }
  document.querySelector('.out-2').innerHTML = text;
  console.log(text);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/*   Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В
  нашем случае получится такой результат: 28*/
let a3 = 123789;
function t3() {
  let arr = String(a3).split('');
  let arr2 = arr.filter((elem) => {
    if (Number(elem) % 2 == 0) {
      return Number(elem);
    }
  });
  let str = arr2.join('');
  document.querySelector('.out-3').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-3').addEventListener('click', t3);
