// Task 1 ============================================
/*  Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.*/
let a1 = 565;

function t1() {
  let str = String(a1);
  document.querySelector('.out-1').innerHTML = str[0];
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.*/
let a2 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.*/
let a3 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);
