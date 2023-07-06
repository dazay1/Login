const switchers = [...document.querySelectorAll('.switcher')]
let usinp = document.getElementById('login-email');
let passinp = document.getElementById('login-password');
let login = document.getElementById('login');
let info = document.getElementById('info');
let signup = document.getElementById('signup');
let userUp = document.getElementById('signup-email');
let passUp = document.getElementById('signup-password');
let emailUp = document.getElementById('signup-password-confirm')

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


function infoF(text) {
  info.classList.add('active');
  info.firstElementChild.innerHTML = text 
  setTimeout(() => {
    info.classList.remove('active')
  }, 4000)
}
let users = [
  {
    userName: "Admin",
    password: "123",
    email: "admin@gmail.com",
  }, 
];
login.addEventListener('click', () => {
  if ( usinp.value.length === 0 || passinp.value.length === 0) {
    infoF('Please, enter your email, password and password confirmation for sign up.')
  } else {
    let user = users.find(user => user.userName === usinp.value);
    if (user === undefined) {
      infoF("User undefined");
    } else {
      if (user.password === passinp.value) {
        infoF("Welcome " + user.userName);
      } else {
        infoF("password error")
      }
    }
  }
})
signup.addEventListener('click', () => {
  if ( userUp.value.length === 0 || passUp.value.length === 0 || emailUp.value.length === 0 ) {
    infoF('Please, enter your email, password and password confirmation for sign up.')
  } else {
    let user = users.find(user => user.userName === userUp.value);
    if (user !== undefined) {
      infoF("User already exist")
    } else {
      users.push({
        userName: userUp,
        password: passUp,
        email: emailUp
      })
      infoF("Congratulation")
    }
  }
})