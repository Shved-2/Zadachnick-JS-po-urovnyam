// Task 1 ============================================
/*   Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.*/

function t1() {
  let a1 = document.querySelector('.i-1').value;
  let str = '';
  if (a1.length > 1) {
    str = a1[a1.length - 2];
  } else {
    str = a1;
  }
  document.querySelector('.out-1').innerHTML = str[0];
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Даны два целых числа. Проверьте, что первое число без остатка делится на второе.*/

function t2() {
  let a21 = +document.querySelector('.i-2-1').value;
  let a22 = +document.querySelector('.i-2-2').value;
  let str = '';

  if (a21 % a22 == 0) {
    str = true;
  } else {
    str = false;
  }
  document.querySelector('.out-2').innerHTML = str;
}
document.querySelector('.b-2').addEventListener('click', t2);
