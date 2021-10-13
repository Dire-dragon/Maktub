const createArray = (n) => {
  if (typeof n !== 'number' || n < 0) {
    console.log('请输入正确的值！');
    return;
  }
  const arr = [];
  for(let i = 0; i < n; i++){
    arr.push("");
  }
  const newArr = arr.map((item,index) =>{
    let i = index + 1;
    return {
      id: i,
      code: `PS${i}`,
      // org: i < 3? '华北配送中心':'华南配送中心',
      org: `华${i < 3 ? '北' : '南'}配送中心`,
      operator: `操作人${i}`,
      operateTime: '2020/09/08 16:32',
    };
  })
  // for (let i = 1; i <= n; i++) {
  //   const item = {
  //     id: i,
  //     code: `PS${i}`,
  //     // org: i < 3? '华北配送中心':'华南配送中心',
  //     org: `华${i < 3 ? '北' : '南'}配送中心`,
  //     operator: `操作人${i}`,
  //     operateTime: '2020/09/08 16:32',
  //   };
  //   arr.push(item);
  // }
  return newArr;
};

const insertData = (arr) => {
  if (!Array.isArray(arr)) {
    console.log('请传入一个数组!');
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    tbody.innerHTML += `
    <tr>
      <td>${arr[i].id}</td>
      <td>${arr[i].code}</td>
      <td>${arr[i].org}</td>
      <td>${arr[i].operator}</td>
      <td>${arr[i].operateTime}</td>
    </tr>`;
  }
};

const tbody = document.querySelector('tbody');
tbody.innerHTML = '';
const arr = createArray(5);
insertData(arr);

//-----------------------------------
// const btn = document.querySelector('.filter-search-btn');
// btn.className = 'btn blue';

//-----------------------------------
// const dom = document.querySelector('.filter-item');
// const domInput = document.querySelector('input');
// console.log(Array.isArray(dom));
// console.log(dom.innerHTML);
// console.log(dom.textContent);
// domInput.value = 1;
// console.log(domInput.value);
// console.log(dom.className);
