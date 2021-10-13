// let sum = 0;
// for (let i = 1; i < 6; i++) {
//   sum += i;
// }
// console.log(sum);

// sum = 0;
// for (let i = 1; sum <= 20; i++) {
//   sum += i;
// }

// console.log(sum);
//----------------------------------------
// function test(first) {
//   return (second) => {
//     return (first + second);
//   };
// }
// console.log(test(1)(2));

// function testFn(a,b){
//   console.log(a,b);
// }
//----------------------------------------
// function min(x, y){
//   if(typeof x !== 'number' || typeof y !== 'number'){
//     return '请输入两个数字';
//   }
//   return x > y? y : x;
// }
// console.log(min(88,56));
//----------------------------------------
// const myObj = {
//   x: 1,
//   y: '2',
//   c: true,
//   d: null,
//   e: function(p){
//     return p;
//   },
//   f: {},
//   g: [],
// }
// const keys = Object.keys(myObj);
// for( let i = 0; i < keys.length; i++){
//   const key = keys[i];
//   console.log(myObj[key]);
// }
// const {
//   d,
//   c,
// } = myObj;

// console.log(c)
//----------------------------------------
//实现一个函数，第一个参数为数组，第二个是数值n函数返回数值的序号
//需要进行参数取值的安全判断

// function findNumIndex(arr,num){
//   if( !Array.isArray(arr) || typeof num !== 'number'){
//     return 'Error!';
//   }
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === num){
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findNumIndex([1,2,3],4));
//----------------------------------------

// const arr = [9,7]
// arr.forEach((item,index) =>{
//   console.log(item,index);
// })

// let newArrMap = arr.map((item,index) => {
//   return item + 1;
// })

// console.log(newArrMap);

// let newArrFilter = newArrMap.filter((item,index)=>{
//   return item > 8;
// })
// console.log(newArrFilter);
//----------------------------------------

// const arr = [
//   {
//     id: 1,
//     code: 'PS001',
//     org: '华北配送中心',
//     opearator: '操作人001',
//     operateTime: '2020/09/08 16:32',
//   },
//   {
//     id: 2,
//     code: 'PS002',
//     org: '华北配送中心',
//     opearator: '操作人002',
//     operateTime: '2020/09/08 16:32',
//   },
//   {
//     id: 3,
//     code: 'PS003',
//     org: '华北配送中心',
//     opearator: '操作人003',
//     operateTime: '2020/09/08 16:32',
//   },
// ];

// //1
// const arrFilterId = arr.filter((item, index) => {
//   return item.id >= 2;
// });
// console.log(arrFilterId);

// //2
// function indexOfObject(arr, key, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(arr[indexOfObject(arr, 'code', 'PS002')]);

// //3
// console.log(indexOfObject(arr, 'opearator', '操作人003'));

// //4
// const arrMapId = arr.map((item, index) => {
//   const newObj = ({ id, code, org, opearator, operateTime } = item);
//   newObj.id++;
//   return newObj;
// });
// console.log(arrMapId);

// //5
// const newArr = arr.slice(0, 2);
// newArr.push({
//   id: 4,
//   code: 'PS004',
//   org: '华北配送中心',
//   opearator: '操作人004',
//   operateTime: '2020/09/08 16:32',
// });
// console.log(newArr);
//----------------------------------------

// class Test{
//   constructor(num){
//     this.num = num;
//   }
//   add(arg){
//     if(typeof arg !== 'number'){
//       console.log("请输入数字")
//       return;
//     }
//     this.num += arg;
//   }
//   log(){
//     console.log(this.num);
//   }
// }

// const test = new Test(1);
// test.add(2);
// test.log();

//----------------------------------------
// const createArray = (n) => {
//   if (typeof n !== 'number' || n < 0) {
//     console.log('请输入正确的值！');
//     return;
//   }
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     const item = {
//       id: i,
//       code: `PS${i}`,
//       // org: i < 3? '华北配送中心':'华南配送中心',
//       org: `华${i < 3 ? '北' : '南'}配送中心`,
//       operator: `操作人${i}`,
//       operateTime: '2020/09/08 16:32',
//     };
//     arr.push(item);
//   }
//   return arr;
// };
// console.log(createArray(6));

//去除嵌套数组
/*
const arr = [[1,2],[3,4],[5,[6,7]]];
const newArr = arr.flat();
console.log(newArr);*/

const arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    newArr.push(arr[i][j]);
  }
}
console.log(newArr);

// console.log([].concat(...arr));
