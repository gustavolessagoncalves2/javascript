var buttonContar = document.querySelector("input#btContar")
buttonContar.addEventListener('click', contar)

function contar() {

    var txtInicio = document.querySelector("input#inicio")
    var txtFim = document.querySelector("input#fim")
    var txtPasso = document.querySelector("input#passo")
    var txtRes = document.querySelector("div#res")

    var inicio = Number(txtInicio.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        txtRes.innerHTML = `Impossível contar. Preencha todos os campos.`
    } else {
        txtRes.innerHTML = `Contagem: <br>` 
        if (passo <= 0) {
            alert("Passo = 0 é invalido. Considerando Passo = 1")
            passo = 1
        }
        if (inicio < fim) { 
            //contagem crescente
            for (num = inicio; num <= fim ; num += passo) {
            txtRes.innerHTML += `${num} &#x1F449;`
            }
        } else {
            //contagem decrescente
            for (num = inicio; num <= fim ; num += passo) {
                txtRes.innerHTML += `${num} &#x1F449;`
            }
        } 
        txtRes.innerHTML += `&#x1F3C1;`
    }
    
    
    
}







