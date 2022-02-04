let txtVerificar = document.querySelector("input#inputVerificar")
txtVerificar.addEventListener('click', verificar)

function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('inputAnoDeNascimento')
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fAno.value)
        let img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        let gênero = ''
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade < 18) {
                //teen
                img.setAttribute('src', 'images/man-teen.jpg')
            } else if (idade <= 50) {
                //adult
                img.setAttribute('src', 'images/man-adult.jpg')
            } else {
                //elder
                img.setAttribute('src', 'images/man-elder.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade < 18) {
                //teen
                img.setAttribute('src', 'images/woman-teen.jpg')
            } else if (idade <= 50) {
                //adult
                img.setAttribute('src', 'images/woman-adult.jpg')
            } else {
                //elder
                img.setAttribute('src', 'images/woman-elder.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.style.fontWeight = 'bold'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}