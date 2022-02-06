var buttonContar = document.querySelector("input#btContar")
buttonContar.addEventListener('click', contar)

function contar() {

    var inicio = parseInt(document.querySelector("input#inicio").value)
    
    var fim = parseInt(document.querySelector("input#fim").value)
    
    var passo = parseInt(document.querySelector("input#passo").value)
    
    var txtRes = document.querySelector("div#res")

    if (inicio == "") {
        alert("Preencha todos os campos")
    } else if (passo == 0) {
        alert("Passo = 0 é invalido. Considerando Passo = 1")
        passo = 1
    } else {
        txtRes.innerHTML = `Contagem: <br>`
        for (num = inicio; num <= fim ; num = num + passo) {
            txtRes.innerHTML += `${num} &#x1F449;`
        }
        txtRes.innerHTML += `&#x1F3C1;`
    }
    
}







