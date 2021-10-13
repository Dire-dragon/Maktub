const userInput = document.querySelector('.login-content-user input');
const userError = document.querySelector('.login-user-info');
const passwordInput = document.querySelector('.login-content-password input');
const passwordError = document.querySelector('.login-password-info');
const loginBtn = document.querySelector('.login-btn button');

loginBtn.addEventListener('click',login);
// userInput.addEventListener('blur',isNull);
// passwordInput.addEventListener('blur',isNull);

//初始化
function initForm(){
  userInput.className = '';
  passwordInput.className = '';
  userError.textContent = '';
  passwordError.textContent = '';
}

// function isNull(e){
  
// }

function login(){
  initForm();
  const user = userInput.value;
  const password = passwordInput.value;
  if(!user || !password){
    if(!user){
      userInput.className = 'input-null';
      userError.textContent = '用户名不能为空';
    }
    if(!password){
      passwordInput.className = 'input-null';
      passwordError.textContent = '密码不能为空';
    }
    return;
  }
  if(user === 'test' && password === '123'){
    alert('登录成功!');
    return;
  }
  alert('用户名或密码错误!')
}

