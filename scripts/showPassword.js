const password = document.querySelector('#password')
const showPassword = document.querySelector('#showPassword')

showPassword.addEventListener('click', () => {
    if (password.type == 'password') {
        password.type = 'text'
    }
    else {
        password.type = 'password'
    }
})