// Task 1 ============================================
/*  Дана некоторая строка. Найдите позицию первого нуля в строке.*/
let a1 = 'на дворе трава, на  траве дрова';

function t1() {
  let num = a1.indexOf('н');

  document.querySelector('.out-1').innerHTML = num;
  console.log(num);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры
          которых равна пяти.*/

function t2() {
  for (let i = 1; i < 1000; i++) {
    let str = String(i);
    if (str.length > 1) {
      if (Number(str[0]) + Number(str[1]) == 5) {
        console.log(i);
      }
    }
  }
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Дан массив. Удалите из него элементы с заданным значением.*/
let a3 = [3, 12, 4, 2, 1, 0, 6, 5, 4, 7, 9, 56, 45, 78, 98, 12, 13, 14, 15, 56, 18, 19];

function t3() {
  let i = +document.querySelector('.i-3').value;
  let arr = [];
  // for (let item in a3) {
  //   if (a3[item] != i) {
  //     arr.push(a3[item]);
  //   }
  // }

  arr = a3.filter((elem) => {
    return elem != i;
  });
  a3 = arr;
  console.log(a3);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*   Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой
          половины элементов этого массива.*/
let a4 = [1, 2, 3, 4, 5, 6];

function t4() {
  let summ = 0;
  for (let i = 0; i < a4.length / 2; i++) {
    summ += a4[i];
  }
  document.querySelector('.out-4').innerHTML = summ;
  console.log(summ);
}
document.querySelector('.b-4').addEventListener('click', t4);
