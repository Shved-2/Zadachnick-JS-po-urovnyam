// Task 1 ============================================
/*  Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.*/
let a1 = [
  'http://code.mu/',
  'https://www.youtube.com/',
  'https://e.mail.ru/',
  'http://2books.su/tags/adapted/',
  'http://translate.google.com/',
  'https://tproger.ru/curriculum/php-beginner/',
];

function t1() {
  let arr = [];
  for (let item of a1) {
    if (item.includes('http://')) {
      arr.push(item);
    }
  }
  document.querySelector('.out-1').innerHTML = arr;
  console.log(arr);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.*/
let a2 = [
  'index.html',
  'index.php',
  'logo.svg',
  'yandex.com',
  'main.html',
  'list.js',
  'about.html',
  'name.js',
  'list.php',
  'cat.jpg',
];

function t2() {
  let arr = [];
  for (let item of a2) {
    if (item.endsWith('.html')) {
      arr.push(item);
    }
  }
  document.querySelector('.out-2').innerHTML = arr;
  console.log(arr);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.*/
let a3 = [1, 54, 32, 9, -9, 10, 33, 11, 10, -8, -7, 2, 7, 45];

function t3() {
  let arr = a3.map((elem) => {
    return ((elem / 100) * 110).toFixed(1);
  });
  document.querySelector('.out-3').innerHTML = arr;
  console.log(arr);
}
document.querySelector('.b-3').addEventListener('click', t3);
