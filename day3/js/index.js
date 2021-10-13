const dataLength = 15;
const perPage = 10;
const state = {
  org: '',
  operator: '',
  currentPage: 1,
};

const initDate = createArray(dataLength);

//创建数组
function createArray(n) {
  if (typeof n !== 'number' || n < 0) {
    console.log('请输入正确的值！');
    return;
  }

  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push('');
  }

  const result = arr.map((item, index) => {
    let i = index + 1;
    return {
      id: i,
      code: `PS${i}`,
      // org: i < 3? '华北配送中心':'华南配送中心',
      org: `华${i < 3 ? '北' : '南'}配送中心`,
      operator: `操作人${i}`,
      operateTime: '2020/09/08 16:32',
    };
  });
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
  return result;
}

function renderTable(dataList) {
  if (!Array.isArray(dataList)) {
    console.log('请传入一个数组!');
    return;
  }
  const tbody = document.querySelector('tbody');
  const domList = dataList.map((item, index) => {
    return `
        <tr>
            <td>${index + 1}</td>
            <td>${item.code}</td>
            <td>${item.org}</td>
            <td>${item.operator}</td>
            <td>${item.operateTime}</td>
        </tr>
    `;
  });
  tbody.innerHTML = domList.join('\n');
}

function filterDate() {
  const { org, operator, currentPage } = state;
  const list = initDate.filter((item, index) => {
    return item.org.indexOf(org) > -1 && item.operator.indexOf(operator) > -1;
  });
  return list.slice((currentPage - 1) * perPage, currentPage * perPage);
}

function render() {
  const currentData = filterDate();
  renderTable(currentData);
}

render();

const searchBtn = document.querySelector('.filter-search-btn');
searchBtn.addEventListener('click', handleSearch);

function handleSearch() {
  const org = document.querySelector('.org');
  const operator = document.querySelector('.operator');
  state.org = org.value;
  state.operator = operator.value;
  render();
}

const resetBtn = document.querySelector('.filter-reset-btn');
resetBtn.addEventListener('click', handlerReset);

function handlerReset() {
  const org = document.querySelector('.org');
  const operator = document.querySelector('.operator');
  org.value = '';
  operator.value = '';
  state.org = '';
  state.operator = '';
  render();
}

const pages = document.querySelectorAll('.pagination button');
pages[state.currentPage - 1].className = 'page page-choose';
for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener('click', (e) => {
    pages[state.currentPage - 1].className = 'page';
    state.currentPage = e.target.textContent;
    pages[state.currentPage - 1].className = 'page page-choose';
    render();
  });
}

//--------------------------------
// const getInputValue = (e) => {
//   const input = document.querySelectorAll('.filter-input');
//   console.log(`机构：${input[0].value}`);
//   console.log(`操作人：${input[1].value}`);
// };

// const InitInputValue = (e) => {
//   const input = document.querySelectorAll('.filter-input');
//   input[0].value = '';
//   input[1].value = '';
// };

// const getContent = (e) => {
//   console.log(`Page:${e.target.textContent}`);
// };

// const searchBtn = document.querySelector(' .filter-search-btn');
// const resetBtn = document.querySelector(' .filter-reset-btn');
// const PageBtn = document.querySelector('.pagination');

// searchBtn.addEventListener('click', getInputValue);
// resetBtn.addEventListener('click', InitInputValue);
// PageBtn.addEventListener('click', getContent);

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
