buttonGerarTabuada = document.querySelector("input#gerarTabuada")
buttonGerarTabuada.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    var txtNum = document.querySelector("input#num")
    var txtRes = document.querySelector("div#res")
    var txtTab = document.querySelector("select#tabelaTabuada")
    
    var num = Number(txtNum.value)
    
    if (txtNum.value.length == 0) {
        alert("insira um número")
    } else {

        txtTab.innerHTML = ""
        for (multiplicando = 0; multiplicando <= 10; multiplicando++) {
            
            var produto = num * multiplicando

            txtTab.innerHTML += `<option value="${produto}">${num} x ${multiplicando} = ${produto} </option>`
        }
    }
}