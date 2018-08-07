/*Funçoes para cada operação aritmética*/ 

function soma() {
    var resultado = parseFloat(document.getElementById("v1").value) + parseFloat(document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = resultado

}

function subtracao() {
    var resultado = parseFloat(document.getElementById("v1").value) - parseFloat(document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = resultado

}

function divisao() {
    var resultado = parseFloat(document.getElementById("v1").value) / parseFloat(document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = resultado

}

function multiplicacao() {
    var resultado = parseFloat(document.getElementById("v1").value) * parseFloat(document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = resultado

}

