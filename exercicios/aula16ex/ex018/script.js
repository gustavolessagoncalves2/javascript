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

    } else {
        //Pegando e esvaziando o campo de resultado
        txtRes = document.querySelector('div#analise')
        txtRes.innerHTML = ''

        //Adicionando os valores ao array aNumber
        aNumber.push(number)

        //Adicionando os valores ao select tabNum
        var option = document.createElement('option')
        option.text = `Valor ${number} adicionado.`
        option.value = `n${number}`
        txtTab.appendChild(option)
    }
    //Esvaziando input e colocando o foco de volta nele
    txtNumber.value = ''
    txtNumber.focus()
}

function finalizar() {

    //Pegando o campo de resultado
    txtRes = document.querySelector('div#analise')

    //Condicional para select tabNum vazio ou com apenas um número
    if (aNumber.length < 2) {
        alert("Por favor, insira mais de 1 número antes finalizar a análise.")

    } else {
        //Classificando em ordem crescente
        aNumber.sort(function(a, b){return a - b})

        //Maior valor
        let maiorValor = aNumber[aNumber.length - 1]

        //Menor valor
        var menorValor = aNumber[0]
        
        //Soma dos valores
        var somaValores = 0
        for (i = 0; i < aNumber.length; i++) {
            somaValores += aNumber[i]
        }

        //Média dos valores
        var mediaValores = somaValores/aNumber.length

        //Mostrando na tela a análise dos números
        txtRes.innerHTML = 
        `<ul>
        <li>${aNumber.length} números foram adicionados.</li>
        <li>O maior valor adicionado foi ${maiorValor}.</li>
        <li>O menor valor adicionado foi ${menorValor}.</li>
        <li>A soma dos valores adicionados é ${somaValores}.</li>
        <li>A média dos valores adicionados é ${mediaValores}.</li>
        </ul>`
    }
}