function validar_dados() {

    var test = 0
    var senha = document.getElementById('senha').value
    var csenha = document.getElementById('csenha').value

    if (document.getElementById('nome').value == "") {
        alert('Campo nome está vazio')
        document.getElementById('nome').focus()

        test = 1

    }

    if (senha != csenha) {

        alert('As senhas não batem!')
        document.getElementById('senha').focus()
        test = 1
    }
    if (document.getElementById('email').value.indexOf('@') == -1) {

        if (document.getElementById('email').value != "") {

            document.getElementById('email').focus()
            alert('Deve acrescentar o @ no email')

            test = 1
        }
    }
    if (test == 0) {

        document.getElementById('forma').submit()
    }
}