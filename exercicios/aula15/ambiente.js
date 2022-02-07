let num = [5 ,8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`O Array tem ${num.length} elementos`)
console.log(`O primeiro elemento dele é ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor pesquisado está na posição ${pos}`)
}

