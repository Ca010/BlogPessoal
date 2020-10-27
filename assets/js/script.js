let email = document.querySelector('#email')
let assunto = document.querySelector('#senha')

let emailOk = false
let senhaOk = false

nome.style.width = '100%'
email.style.width = '100%'


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaSenha() {
    let txtSenha = document.querySelector('#txtSenha')
    if (senha.value.legth >= 6) {
        txtSenha.innerHTML = 'Senha inválida! Digite até 6 caracteres'
        txtSenha.style.color = 'red'
        txtSenha.style.display = 'block'
    } else {
        txtSenha.style.display = 'none'
        senhaOk = true
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulario enviado com sucesso')
    } else {
        alert('Preencha o furmálrio corretamente!')
    }
}


/*var: escopo(tudo que esta dentro de {}) global, pode ser acessado em qualquer lugar
let: e esse so pode ser usado uma vez
const: constante igual java, pouco usado */

/* Case Sensitive = reconehce letras maiusculas e minisculas
por tag: get elementByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementsByClassNAme()
por seletor: querySelector() */

/*declaracao de variaveis */
/*declaracao de variaveis */