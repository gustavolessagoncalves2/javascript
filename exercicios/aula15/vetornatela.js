let valores = [5 ,4, 8, 2, 9, 3, 1]

valores.sort()

//Versão menos simplificada
for (let pos = 0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

//Versão mais simplificada
for (let pos in valores) {
    console.log(valores[pos])
}