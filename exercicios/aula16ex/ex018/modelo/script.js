//Adicionando os Ouvidores
let inputAdicionar = document.querySelector('input#btAdicionar')
inputAdicionar.addEventListener('click', adicionar)
let inputFinalizar = document.querySelector('input#btFinalizar')
inputFinalizar.addEventListener('click', finalizar)

//Pegando os valores dos Inputs e tratando-os
var txtNumber = document.querySelector('input#txtNumber')
var number = parseInt(txtNumber.value)




function adicionar() {
    //alert('adicionou')
    alert(number)
}

function finalizar() {
    alert('finalizou')
}