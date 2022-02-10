//Adicionando os Ouvidores
let inputAdicionar = document.querySelector('input#btAdicionar')
inputAdicionar.addEventListener('click', adicionar)
let inputFinalizar = document.querySelector('input#btFinalizar')
inputFinalizar.addEventListener('click', finalizar)

//Pegando os Campos
var txtNumber = document.querySelector('input#txtNumber')
var txtTab = document.querySelector('select#tabNum')
var txtRes = document.querySelector('div#analise')

//Criando array para receber os valores
var aNumber = []

//Pegando e escondendo botão Reset
let txtBtReset = document.querySelector('input#btReset')
txtBtReset.style.display = 'none'

function adicionar() {

    //Condicional para input txtNumber vazio
    if (txtNumber.value.length == 0) {
        alert("Por favor, insira um número")

    } else if (aNumber.includes(Number(txtNumber.value)) == true) {
        //Condicional para valor já adicionado no array aNumber
        alert("Valor já adicionado. Por favor, insira outro número.") 

    } else {
        //Esvaziando o campo de resultado
        txtRes.innerHTML = ''

        //Adicionando os valores ao array aNumber
        aNumber.push(Number(txtNumber.value))

        //Adicionando os valores ao select tabNum
        var option = document.createElement('option')
        option.text = `Valor ${Number(txtNumber.value)} adicionado.`
        option.value = `n${Number(txtNumber.value)}`
        txtTab.appendChild(option)
    }
    //Esvaziando input e colocando o foco de volta nele
    txtNumber.value = ''
    txtNumber.focus()

    //Escondendo botão Reset
    txtBtReset.style.display = 'none'
}

function finalizar() {

    //Condicional para select tabNum vazio ou com apenas um número
    if (aNumber.length < 2) {
        alert("Por favor, insira mais de 1 número antes finalizar a análise.")

    } else {
        //Classificando em ordem crescente
        aNumber.sort(function(a, b){return a - b})

        //Maior valor
        let maiorValor = aNumber[aNumber.length - 1]

        //Menor valor
        let menorValor = aNumber[0]
        
        //Soma dos valores
        let somaValores = 0
        for (i = 0; i < aNumber.length; i++) {
            somaValores += aNumber[i]
        }

        //Média dos valores
        let mediaValores = somaValores/aNumber.length

        //Mostrando na tela a análise dos números
        txtRes.innerHTML = 
        `<ul>
        <li>${aNumber.length} números foram adicionados.</li>
        <li>O maior valor adicionado foi ${maiorValor}.</li>
        <li>O menor valor adicionado foi ${menorValor}.</li>
        <li>A soma dos valores adicionados é ${somaValores}.</li>
        <li>A média dos valores adicionados é ${mediaValores}.</li>
        </ul>`

        //Mostrando botão Reset
        txtBtReset.style.display = 'inline'
    }
}

//Criando função reset e adicionando ouvidor
txtBtReset.addEventListener('click', reset)

function reset() {
    aNumber = []
    txtTab.innerHTML = ''
    txtRes.innerHTML = ''
    txtBtReset.style.display = 'none'
}