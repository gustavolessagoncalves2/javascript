function verificar() {

let data = new Date()
let ano = data.getFullYear()
let fAno = document.getElementById('inputAnoDeNascimento')
let res = document.getElementById('res')
let resImg = document.querySelector('div#res-img')

if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    let fsex = document.getElementsByName('sexo')
    let idade = ano - Number(fAno.value)
    let gênero = ''
    if (fsex[0].checked) {
        gênero = 'Homem'
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.style.fontWeight = 'bold'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

    if (gênero == 'Homem' && idade < 18) {
        resImg.innerHTML = '<img src="images/man-teen.jpg">'
    } else if (gênero == 'Homem' && idade < 40) {
        resImg.innerHTML = '<img src="images/man-adult.jpg">'
    } else if (gênero == 'Homem' && idade >= 40) {
        resImg.innerHTML = '<img src="images/man-elder.jpg">'
    } else if (gênero == 'Mulher' && idade < 18) {
        resImg.innerHTML = '<img src="images/woman-teen.jpg">'
    } else if (gênero == 'Mulher' && idade < 40) {
        resImg.innerHTML = '<img src="images/woman-adult.jpg">'
    } else if (gênero == 'Mulher' && idade >= 40) {
        resImg.innerHTML = '<img src="images/woman-elder.jpg">'
    }
}


}