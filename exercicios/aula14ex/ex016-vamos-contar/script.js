var buttonContar = document.querySelector("input#btContar")
buttonContar.addEventListener('click', contar)

function contar() {

    var inicio = document.querySelector("input#inicio").value
    
    var fim = document.querySelector("input#fim").value
    
    var passo = document.querySelector("input#passo").value
    
    var txtRes = document.querySelector("div#res")

    if (inicio == null) {
        alert("Preencha todos os campos")
    } else {
        
        /*
        for (num = inicio; num <= fim ; num = num + passo) {
            num = num + num

            //criar span
        }
        */
        alert(inicio)
        alert(fim)
        alert(passo)
    }
    
}







