var buttonContar = document.querySelector("input#btContar")
buttonContar.addEventListener('click', contar)

function contar() {
    var inicio = Number(document.querySelector("input#inicio").value)

    var fim = Number(document.querySelector("input#fim").value)

    var passo = Number(document.querySelector("input#passo").value)

    var txtRes = document.querySelector("div#res")

    //window.alert(passo)

    for (num = inicio; num <= fim ; num = num + passo) {
        txtRes.innerHTML = `${num} &#128073;`        
    }
}



