// Task 1 ============================================
/*  Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.*/

function t1() {
  let str1 = document.querySelector('.i-1-1').value;
  let str2 = document.querySelector('.i-1-2').value;

  let str = '';
  console.log(str1.charAt(str1.length - 1));
  console.log(str2.charAt(0));
  if (str1.charAt(str1.length - 1) == str2.charAt(0)) {
    str = 'совпадает';
  } else {
    str = 'несовпадает';
  }

  document.querySelector('.out-1').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дана некоторая строка. Найдите позицию третьего нуля в строке.*/

function t2() {
  let a2 = document.querySelector('.i-2').value;
  let str = a2.split('');
  let num = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'р') {
      num++;
      if (num == 3) {
        index = i;
      }
    }
    if (num < 3) {
      index = -1;
    }
  }
  console.log(index);
  document.querySelector('.out-2').innerHTML = index;
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/*  Даны числа, разделенные запятыми:

'12,34,56'
Найдите сумму этих чисел.*/
let a3 = '12,34,56';
function t3() {
  let arr = a3.split(',');
  let summ = 0;
  for (let item of arr) {
    summ += Number(item);
  }
  document.querySelector('.out-3').innerHTML = summ;
  console.log(summ);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4============================================
/*  Дана дата в следующем формате:

'2025-12-31'
Преобразуйте эту дату в следующий объект:

{
	year: '2025',
	month: '12',
	day: '31',
}*/

let a4 = '2025-12-31';
function t4() {
  let arr = a4.split('-');
  let arr2 = ['year', 'moth', 'day'];
  let finArr = {};
  for (let i = 0; i < arr.length; i++) {
    finArr[arr2[i]] = arr[i];
  }

  let str = '';
  for (let item in finArr) {
    str += item + ' ' + finArr[item] + '<br>';
  }
  document.querySelector('.out-4').innerHTML = str;
  console.log(finArr);
}
document.querySelector('.b-4').addEventListener('click', t4);
