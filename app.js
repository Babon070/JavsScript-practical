// 1. 3 ta input va tugma berilgan.
// Tugmani bosish orqali ushbu inputlarda turgan raqamlarni oling
// va ularning yig'indisini to'rtinchi Inputga yozing.

// const input = document.getElementsByClassName('input');
// const btn = document.getElementById('btn');
// const res = document.getElementById('res');

// btn.addEventListener('click', add)

// function add(){
//     let sum = 0;
//     for(let i = 0; i < input.length; i++){
//         sum += +input[i].value
//     }

//     res.value = sum
// }

// ==========================

// 2. 3ta Input berilgan ularning qiymatlarini yigindisini oling
// va yigindini ekranga chiqaring

// const input = document.getElementsByClassName('input');
// const btn = document.getElementById('btn');
// const elem = document.getElementById('elem');

// btn.addEventListener('click', add)

// function add(){
//     let sum = 0;
//     for(let i = 0; i < input.length; i++){
//         sum += +input[i].value
//     }
//     elem.innerHTML = sum
// }

// ==========================

// 3. inputga son kiriting va inputdan focus yoqolishi bilan
// ekranga sonlar yigindisi chiqsin

// const input = document.getElementById('input');
// const elem = document.getElementById('elem');

// input.addEventListener('blur', add)

// function add(){
//     let sum = 0;
//     let str = input.value;
//     let arr = str.split('')
//     for(let i = 0; i < arr.length; i++){
//         sum += +arr[i]
//     }
//     elem.innerHTML = sum
// }

// ==========================
// 4. Input berilgan va inputga vergul bilan son yozganimizda

// const input = document.getElementById('input');
// const elem = document.getElementById('elem')

// input.addEventListener('blur', add)

// function add(){
//     let sum = 0;
//     let str = input.value;
//     let arr = str.split(',');
//     for(let i = 0; i < arr.length; i++){
//         sum += +arr[i]
//     }
//     elem.innerHTML = sum/arr.length
// }

// ==========================

// 5. Asosiy Inputga FIO probel bilan yozilsin va
// inputdan focus yoqolishi bilan
// FIO qoshimcha ochilgan 3 ta inputlarga tushib qosin

// const input = document.getElementById('input');
// const inp = document.getElementsByClassName('name');

// input.addEventListener('focus', add)
// input.addEventListener('blur', add2)

// function add(){
//     input.placeholder = '';
// }

// function add2(){
//     if(input.value !== 0){
//         let str = input.value;
//         let arr = str.split(' ');
//         for(let i = 0; i < arr.length; i++){
//             inp[i].value = arr[i]

//         }
//     }

//     if(input.value == 0){
//         input.placeholder = 'Введите Ваши ФИО';
//         for(let i = 0; i < inp.length; i++){
//             inp[i].value = ''
//         }
//     }

// }

// ================

// 6. Inputga FIO kichik xarflarda kiritilsin
// va inputdan focus yoqolishi bilan
// bosh xarflari kattaga ozgarsin

// const input = document.getElementById('input');
// const inp = document.getElementsByClassName('name');

// input.addEventListener('blur', upperCase)

// function upWords(str){
//     let arr = str.split(' ');
//     for(let i = 0; i < arr.length; i++){
//        arr[i] = arr[i].split('');
//        arr[i][0] = arr[i][0].toUpperCase();
//        arr[i] = arr[i].join('');
//     }

//     str = arr.join(' ');
//     return str
// }

// function upperCase(){
//     input.value = upWords(input.value)
// }

// let importanceSkills = 'React,TypeScript,CSS,HTML,JavaScript'
//     importanceSkills = importanceSkills.split(',').reverse().join(', ')
//     console.log(importanceSkills);

// ==================
// umumiy yigindi
// let numForSum = '1,2,5,10,392,19,3,10'
//     numForSum = numForSum.split(',')
//     let sum = 0;
//     for(let i = 0; i < numForSum.length; i++){
//         sum += +(numForSum[i])
//     }
//     console.log(numForSum);
//     console.log(sum);

// 7. Inputga so'z yozamiz va p tagi orqali nechta spzdan iborat
// ekanligi koesatamiz

// const input = document.getElementById('input');
// const p = document.getElementById('elem');

// input.addEventListener('blur', add)

// function add(){
//     let num = 0;
//     let str = input.value;
//     let arr = str.split(' ');
//     for(let i = 0; i < arr.length; i++){
//         num += 1;
//     }
//     p.innerHTML = num
// }

// ===================
// stringni ichida nechta so'z borligini biluvchi funcsia yozing
// let words = 'hello world sdfsdf sdfdsfdsf';

// function word(str){
//     let sum = 0;
//     let arr = str.split(' ');
//     for(let i = 0; i < arr.length; i++){
//         sum += 1;
//     }
//     console.log(sum);
// }
// word(words)

// ==========================

// 8. Inputga yozilgan sozlar ichida eng uzunini olish

// const input = document.getElementById("input");
// const p = document.getElementById("elem");

// input.addEventListener("blur", add);

// function add() {
//   let max = 0;
//   let arr2 = [];
//   let str = input.value;
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let num = 0;
//     arr2 = arr[i].split("");
//     console.log(arr2);

//     for (let j = 0; j < arr2.length; j++) {
//       num += 1;
//       if (num > max) {
//         max = num;
//       }
//     }
//   }
//   p.innerHTML = max;
// }

// =================================

// 10. Inputga Tug'ilgan yilingizni kiriting
// yoshingizni chiqarib bersin

// const input = document.getElementById("input");
// const btn = document.getElementById('btn');
// const p = document.getElementById('elem');

// btn.addEventListener('click', add)

// function add(){
//     let year = input.value;
//     let date = new Date();
//     let yearNow = date.getFullYear();
//     p.innerHTML = year - yearNow;
// }
// console.log(new Date());
// new Date() bu xozirgi vaqt:
// new Date().getFullYear() -> xozirgi yil (2023)
// new Date().getMonth() -> xozirgi oy
// new Date().getDay() -> bugungi kun

// 11. Inputga 31.12.2016. sana yozilganda
// bugungi kunni soz bilan oling

// const input = document.getElementById("input");
// const p = document.getElementById('elem');
// input.addEventListener('click', add)

// function add(){
//     let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let str = input.value;
//     let arr = str.split(',');
//     let arr2 = arr.reverse();
//     let str1 = arr2.join(',');
//     let date = new Date(str1)
//     let day = date.getDay();

//     p.innerHTML = dayWeak[day]
//     console.log(str1);
// }

// 12. Inputga soz kiritiladi va sozning bosh va oxirgi
//     xarflari bir xil bolsa "XA" degan yozuv chiqsin yoki "YOQ"

// const input = document.getElementById("input");
// const p = document.getElementById('elem');
// const btn =document.getElementById('btn');

// btn.addEventListener('click', add)

// function add(){
//     let str = input.value;
//     let arr = str.split('');
//     let arr2 = str.split('').reverse();
//     console.log(arr);
//     console.log(arr2);
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr2[i]){
//             p.innerHTML = 'Yoq'
// 			return;
//         }
//     }
//     p.innerHTML = 'Xa'
// 			return;
// }

// 13. Inputga kiritilgan sonlar ichida 3 raqami bolsa
//     p-ga 'xa' chiqarilsin yoki 'yoq';

// const input = document.getElementById('input');
// const p =document.getElementById('elem')

// input.addEventListener('blur', add)

// function add(){
//     let str = input.value;
//     let arr = str.split('');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 3){
//             alert('3-bor');
//             return;
//         }
//     }
//     alert ('3-yoq');
//     return;
// }

// 14. Button bosilganda Abzas dan kigin qator nomerlari chiqsin
//     poryodka bilan!

// const p = document.getElementsByTagName('p');
// const btn =document.getElementById('btn');

// btn.addEventListener('click', add)

// function add(e){
//     console.log(e.target.vlaue);
//     for(let i = 0; i < p.length; i++){
//         p[i].innerHTML = p[i].innerHTML+' '+(i + 1);
//     }
// }

// 15. ___

// const input = document.getElementById('input');
// const p = document.getElementsByTagName('p');
// const btn =document.getElementById('btn');

// btn.addEventListener('click', add)

// function add(){
//     let arr2 = [];
//     for (let i = 0; i < p.length; i++) {
//         arr2[i] = +p[i].innerHTML;
//     }
//     input.value = arr2.sort(sortArr)
// }

// function sortArr(a, b){
//     if (a > b) {
// 		return -1;
// 	}
// 	if (a < b) {
// 		return -1;
//  	}
// 	if (a == b) {
// 		return 0;
//  	}
// }

// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];

//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     return 0;
//   });
//   console.log(items);

// let arr = [1,4,3,2]

// const sort = arr.sort((a,b) => a-b).map(el => el * 10)
// console.log(sort);

// var elem = document.getElementsByTagName('p');
// for (var i = 0; i < elem.length; i++) {
// 	elem[i].addEventListener('click', func);
//     console.log(elem[i]);
// }

// function func() {
//     this.innerHTML = this.innerHTML * this.innerHTML;
//     console.log(this);
// }

// 19.  20 savollar kartinkaga bosilganda ikki barobar katta bolsin
//  va yana bosilganda ortga qaytsin

// const image = document.getElementsByTagName('img');

// for (let index = 0; index < image.length; index++) {
//     image[index].addEventListener('click', add)
//     console.log(image[index]);
// }
// function add(e){
//     console.log(e.target.value);
//     this.height = this.height * 2;
//     this.removeEventListener('click', add);
//     this.addEventListener('click', reback);
// }

// function reback(){
//     this.height = this.height / 2;
//     this.removeEventListener('click', reback);
//     this.addEventListener('click', add);
// }

// const input = document.querySelector('input');
// input.addEventListener('blur', add)

// function add(){
//     let str = input.value;
//     if(str > 0 && str < 101){
//         input.style.backgroundColor = 'green'
//     } else {
//         input.style.border = 'red'
//     }
// }

// function findUser(users, item){
//     const reverseItem = [...users];
//     const found = reverseItem.find(user => user === item)
//     console.log(found);
//     return
// }

// let users = ["Maria", "Sveta","Andrey"];
// let found = findUser(users, "Maria");

// const input = document.getElementById('name');
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');
// const p = document.getElementById('elem');

// btn.addEventListener('click', add)

// function add(){
//     let sum = 0;
//     for (let index = 0; index < input.length; index++) {
//         sum += +input[index].value;
//     }
//     p.innerHTML = sum
// }

// input.addEventListener('blur', add)

// function add(){
//     let sum = 0;
//     let str = input.value;
//     let arr = str.split('');
//     for (let i = 0; i < arr.length; i++) {
//         sum += +arr[i];
//     }
//     p.innerHTML = sum
// }

// const tvSerial = ['sss', 'dddd','ffff','gggg'];
// const tvFilm = ['qqqq', 'wwwww', 'eeeee','rrrrr'];

// const tvShow = [...tvFilm, ...tvSerial];
// const tvShow = [...tvFilm, 'ttttt' ,...tvSerial];

// netflix = [...tvShow]

// netflix = tvShow
// for (let i = 0; i < netflix.length; i++) {
//     const element = netflix[i];
//     const arr = element.split('')
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// const first = () => {
//     console.log(12);
// }
// const input = document.getElementById('name')
// input.addEventListener('blur', click)

// function click(e){
//     console.log(e.target.value);
// }

// netflix[0] = 'Friends'
// console.log(netflix);
// console.log(tvShow);

// function pissa(price, ...rest){
//       return rest.map(el =>
//             price * el
//             )
// }

// let res = pissa(500, 2, 10, 25)
// console.log(res);

// const doHomework = (subject, callback) => {
//     alert(`Starting my ${subject} homework.`);
//     callback();
//   };

//   const alertFinished = () => {
//     alert('Finished my homework');
//   };|

//   doHomework('math', alertFinished);

// const person = {name: 'coder'}
// const age = person.age || 35;
//
// console.log(`Age of ${person.name} is ${age}`);

// let ism = "Ali";
// console.log(ism.split('').reverse());

// let ism1 = 'Kamol'
// result = [...ism, ...ism1];

// for (let i = 0; i < ism.length; i++) {
//     ism1+=ism[i]

// }

// let ism2 = ism.split("")

// console.log(ism2.reverse())

// var input1 = document.querySelector("#val1");
// var input2 = document.querySelector("#val2");
// var input2 = document.querySelector("#val3");
// var button = document.querySelector("#btn");

// var sum;

// button.addEventListener("click", function() {
//   sum = input1.value;
//   input1.value = input2.value
//   input2.value = sum
// });

// var input1 = document.querySelector("#val1");
// var input2 = document.querySelector("#val2");
// var input2 = document.querySelector("#val3");
// var button = document.querySelector("#btn");

// =====================================================

// const value = Math.random()
// console.log(value);

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const evenOnly = nums.filter(function(n){
//     const remainder = n % 2

//     return remainder === 0
// })
// console.log(evenOnly);

// ============================================================

// function isMyFavoriteHobby(element, index, array){
//     const isMyFavoriteHobby = 'watching tv'

//     return element === isMyFavoriteHobby
// }

// const currentTodoList = [
//     'watching tv',
//     '123123',
//     '321321321'
// ]
// console.log(currentTodoList.find(isMyFavoriteHobby));

// ============================================================

// const isOdd = (element) => {
//     return element % 2 === 1;
// }

// const onlyEventElement = [2,4,6,8,,16,32]
// const withOddEventElement = [2,4,6,8,,16,17,19,21]

// console.log(onlyEventElement.find(isOdd));
// console.log(withOddEventElement.find(isOdd));

// ============================================================

// async function getData(){
//     return await Promise.resolve('I mode it');
// }

// const data = getData()
// console.log(data);

// ============================================================
// const outPut = `${[] && 'Im'}possible!
// You should${ "" && `n't` } see a`
// console.log(outPut);

//=============================================================

// const myPromise = () => Promise.resolve('I have resolved!')
// function firstFunction() {
//     myPromise().then(res => console.log(res))
//     console.log('second');
// }
// async function secondFunction() {
//     console.log(await myPromise());
//     console.log('second');
// }

// firstFunction()
// secondFunction()

//====================================================

// slice() metodi massiv elementlarini kesib olishda ishlatiladi
// slice() ozida 2 ta orgument qabul qilishi mumkin yani
// qaysi elementdan qaysi elementgacha kesishni korsatishimiz
// mumkin boladi

//===============================

// splice() metodi yordamida massivga element qoshishimiz mumkin
// splice(2, 1, 'payload') argument sifatida birinchi '2' index boyicha element qoshish
// va kigingi '1' w indexdan kigin nechta elementni ochirish
// va kigingi string 2 indexga orniga qoyish uchun

// var students = ["Jack", "James", "Robert", "John"];
// console.log(students);
// students.splice(2,1, 'Habib', 'Conor','Tyson')
// let newStudents = students.slice(2);

// console.log(newStudents);

// let str = 'sdlaksjdsaiudyajdhkajsdhakdasudhauisdhakdsjashdkjash'
// let = newStr = str.toUpperCase()
// console.log(newStr);

// ============================================================

// let a = 1;
// let b = {toString()
// {return '1'}};
// let c = 1;
// console.log(a+b+c);
// // console.log(a);
// // console.log(b);
// // console.log(c);

// ================================================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let firstEven = numbers.find(function (num) {
//   return num % 2 === 0;
// });

// console.log(firstEven);

// ======================================================

// let hasNegative = numbers.some(function (num){
//     return num < 0
// })
// console.log(hasNegative);

// =========================================================

// let allPositive = numbers.every(function (num) {
//     return num > 0
// })
// console.log(allPositive);

// ==========================================================

// obshiy yigindini xisoblash uchun
// reduce() metodidan foydalansa boladi

// ==============================================

// let sum = numbers.reduce(function (acc, curr){
//     return acc + curr;
// }, 0)
// console.log(sum);

// ==============================================

// filter metodi massiv qaytaradi

// let evevntNumbers = numbers.filter(function(num){
//     return num % 2 === 0;
// })
// console.log(evevntNumbers);

// ==============================================

// let doubled = numbers.map( function(num) {
//     return num * 2
// })
// console.log(doubled);

// numbers.forEach(function (num){
//     console.log(num);
// })




