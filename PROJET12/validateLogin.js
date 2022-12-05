var seeSenha = document.getElementById('visiOff')
var dontseeSenha = document.getElementById('visible')
var insSenha = document.getElementById('senha')


function visibiliOff() {
    if (insSenha.type == 'password') {
        seeSenha.style.display = 'none';
        dontseeSenha.style.display = 'block';
        insSenha.setAttribute('type', 'text')
    }else{
        insSenha.setAttribute('type', 'password')
        seeSenha.style.display = 'block';
        dontseeSenha.style.display = 'none';
    }
}

