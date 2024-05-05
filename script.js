const login = document.getElementById('login')
const botao = document.getElementById('botao')

botao.addEventListener('click', function(event) {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos')
        event.preventDefault()
    } else {
        alert('Login efetuado com sucesso!')
    }

    login.submit()
})
