// Task 1 ============================================
/*  Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.*/
let a1 = 'на дворе Tрава на  тРаве дрова';
let a2 = 'на дворе Tрава на  тРаве Дрова';

function t1() {
  let arr = a1.split('');
  let count = 0;
  let str = '';
  for (let item of arr) {
    let s1 = item.toUpperCase();
    if (item === s1 && item != ' ') {
      count++;
    }
  }
  if (count <= 2) {
    str = 'колличкество в норме';
  } else {
    str = 'колличкество больше нормы';
  }

  document.querySelector('.out-1').innerHTML = count + ' ' + str;
  console.log(count + ' ' + str);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*   Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в
 которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'.*/
let str2 = '1 22 333 4444 22 5555 1';
function t2() {
  let arr = str2.split(' ');
  let arr2 = arr.filter((elem) => {
    if (elem.length > 3) {
      return false;
    } else {
      return elem;
    }
  });
  let str = arr2.join(' ');
  document.querySelector('.out-2').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в
          новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]*/
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

function t3() {
  let arr3 = [];
  for (let i = 0; i < arr1.length - 1; i++) {
    arr3.push(arr1[i]);
  }
  arr3 = arr3.concat(arr2);
  arr3.push(arr1[arr1.length - 1]);
  document.querySelector('.out-3').innerHTML = arr3;
  console.log(arr3);
}
document.querySelector('.b-3').addEventListener('click', t3);
