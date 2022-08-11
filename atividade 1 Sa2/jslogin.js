// ------ email para logar:admin
// ------ senha para logar:admin




function Validar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'admin' && senha == 'admin') {
        alert('Sucesso! obrigado por fazer o login')
    }else{
        alert('ops! Email ou Senha incorretos')
    }

}