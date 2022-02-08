//Adicionando os Ouvidores
let inputAdicionar = document.querySelector('input#btAdicionar')
inputAdicionar.addEventListener('click', adicionar)
let inputFinalizar = document.querySelector('input#btFinalizar')
inputFinalizar.addEventListener('click', finalizar)



function adicionar(number) {
    //Pegando os valores dos Inputs e tratando-os
    var txtNumber = document.querySelector('input#txtNumber')
    var number = Number(txtNumber.value)
    
    var txtTab = document.querySelector('input#tabNum')


    //alert(number) //teste

    var option = document.createElement('option')
    option.text = "teste"
    txtTab.appendChild(option)
    
}

function finalizar() {
    alert('finalizou')
}