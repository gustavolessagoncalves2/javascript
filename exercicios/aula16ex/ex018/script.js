//Adicionando os Ouvidores
var inputAdicionar = document.querySelector('input#btAdicionar')
inputAdicionar.addEventListener('click', adicionar)
var inputFinalizar = document.querySelector('input#btFinalizar')
inputFinalizar.addEventListener('click', finalizar)

//Criando array para receber os valores
var aNumber = []

function adicionar() {

    //Pegando os valores dos Inputs e tratando-os
    var txtNumber = document.querySelector('input#txtNumber')
    var number = Number(txtNumber.value)
    var txtTab = document.querySelector('select#tabNum')

    //Condicional para input txtNumber vazio
    if (txtNumber.value.length == 0) {
        alert("Por favor, insira um número")

    } else if (aNumber.includes(number) == true) {
        //Condicional para valor já adicionado no array aNumber
        alert("Valor já adicionado. Por favor, insira outro número.") 
        //esvaziar input
        txtNumber.value = ''

    } else {
        //esvaziar input
        txtNumber.value = ''

        //Adicionando os valores ao array aNumber
        aNumber.push(number)

        //Adicionando os valores ao select tabNum
        var option = document.createElement('option')
        option.text = `Valor ${number} adicionado.`
        option.value = `n${number}`
        txtTab.appendChild(option)
    }
}

function finalizar() {

    //Pegando o campo de resultado
    txtRes = document.querySelector('div#analise')

    //Condicional para select tabNum vazio ou com apenas um número
    if (aNumber.length < 2) {
        alert("Por favor, insira mais de 1 número antes finalizar a análise.")

    } else {
        //Maior valor
        aNumber.sort()
        alert(aNumber)

        var maiorValor = aNumber[aNumber.length - 1]

        //Menor valor

        
        //Soma dos valores


        //Média dos valores


        //Mostrando na tela a análise dos números
        txtRes.innerHTML = `<p>Ao todo, temos ${aNumber.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maiorValor}.</p>
        <p>O menor valor informado foi ${aNumber.length}.</p>
        <p>Somando todos os valores, temos o total ${aNumber.length}.</p>
        <p>A média dos valores informados é ${aNumber.length}.</p>`
    }
}