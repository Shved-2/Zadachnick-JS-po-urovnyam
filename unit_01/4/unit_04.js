// Task 1 ============================================
/*  Выведите в консоль все целые числа от 1 до 100.*/

function t1() {
  for (let i = 0; i < 100; i++) {
    console.log(i + 1);
  }
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Выведите в консоль все целые числа от -100 до 0*/
8;

function t2() {
  for (let i = -100; i <= 0; i++) {
    console.log(i);
  }
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/*  Bыведите в консоль все целые числа от 100 до 1..*/

function t3() {
  for (let i = 100; i > 0; i--) {
    console.log(i);
  }
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*   Выведите в консоль все четные числа из промежутка от 1 до 100.*/

function t4() {
  for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  Выведите в консоль все числа кратные трем в промежутке от 1 до 100.*/
let a5 = 565;

function t5() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
document.querySelector('.b-5').addEventListener('click', t5);
