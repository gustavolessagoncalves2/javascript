//Selecionando a hora atual do navegador
var agora = new Date()
var hora = agora.getHours()
console.log(hora)

//Condicional para escolher a função com base na hora
if (hora < 12) {
    morning()  
} else if (hora < 18) {
    evening()
} else {
    night()
}

//Função para deixar o theme "morning"
function morning() {
    console.log("morning")
    var divHoras = document.getElementById("horas")
    divHoras.innerHTML = `Agora são ${hora} horas.`

    var divImgHoras = document.getElementById("img-horas")
    divImgHoras.innerHTML = `<img src="images/sunrise.jfif">`


    document.body.classList.toggle("morning") //muda a Class do Body para morning
}

//Função para deixar o theme "evening"
function evening() {
    console.log("evening")
    var divHoras = document.getElementById("horas")
    divHoras.innerHTML = `Agora são ${hora} horas.`

    var divImgHoras = document.getElementById("img-horas")
    divImgHoras.innerHTML = `<img src="images/sunset.jfif">`

    document.body.classList.toggle("evening") //muda a Class do Body para evening

}

//Função para deixar o theme "night"
function night() {
    console.log("night")
    var divHoras = document.getElementById("horas")
    divHoras.innerHTML = `Agora são ${hora} horas.`

    var divImgHoras = document.getElementById("img-horas")
    divImgHoras.innerHTML = `<img src="images/night.jfif">`

    document.body.classList.toggle("night") //muda a Class do Body para night

}

