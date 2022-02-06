buttonGerarTabuada = document.querySelector("input#gerarTabuada")
buttonGerarTabuada.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    var txtNum = document.querySelector("input#num")
    var txtTab = document.querySelector("select#tabelaTabuada")
    
    var num = Number(txtNum.value)
    
    if (txtNum.value.length == 0) {
        alert("insira um número")
    } else {
        txtTab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            txtTab.appendChild(item)
        }
    }
}