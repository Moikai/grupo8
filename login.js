const loginform = document.querySelector('#loginform')
loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)
    if(validUser){
        return alert('Usuario y/o contraseña incorrectos')
    }
    alert(`Bienvenido`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'
});