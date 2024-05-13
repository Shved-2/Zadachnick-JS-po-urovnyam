// Task 1 ============================================
/*  Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.*/
let a1 = [1, 2, 56, -6, 7, -2, -8, 12, -45, 78, -12, -45, -8, 41, 15, 18, -3];

function t1() {
  let num = 0;
  for (let item of a1) {
    num += item < 0;
  }
  document.querySelector('.out-1').innerHTML = num;
  console.log(num);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дан массив с числами. Оставьте в нем только положительные числа.*/
let a2 = [1, 2, 56, -6, 7, -2, -8, 12, -45, 78, -12, -45, -8, 41, 15, 18, -3];

function t2() {
  a2 = a2.filter((elem) => {
    return elem < 0;
  });

  document.querySelector('.out-2').innerHTML = a2;
  console.log(a2);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Дана строка. Удалите предпоследний символ из этой строки.*/

function t3() {
  let str = document.querySelector('.i-3').value;
  let num = str.length;
  let arr = str.split('');
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == num - 2) {
      continue;
    } else {
      newarr.push(arr[i]);
    }
  }
  let text = newarr.join('');
  document.querySelector('.out-3').innerHTML = text;
  console.log(text);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*   Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой
          половины элементов этого массива на сумму второй половины элементов*/
let a4 = [1, 2, 3, 4, 5, 6];

function t4() {
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < a4.length; i++) {
    if (i < a4.length / 2) {
      num1 += a4[i];
    } else {
      num2 += a4[i];
    }
  }
  document.querySelector('.out-4').innerHTML = num1 / num2;
  console.log(num1 / num2);
}
document.querySelector('.b-4').addEventListener('click', t4);
