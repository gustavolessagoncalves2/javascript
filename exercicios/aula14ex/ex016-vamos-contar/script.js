
var buttonContar = document.querySelector("input#btContar")
buttonContar.addEventListener('click', contar)

function contar() {
    var inicio = parteInt(document.querySelector("input#inicio").value)

    var fim = parteInt(document.getElementById("fim"))

    var soma = inicio + fim

    windw.alert(soma)
}