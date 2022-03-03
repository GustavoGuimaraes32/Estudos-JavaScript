var num = [5, 8, 2, 9, 3]

num.push(1)  // Adicionar um item no vetor com valor '1'
num.sort() // Colocar vetor em ordem crescente

console.log(num)
console.log(`o vetor tem ${num.length} posições`) // Qual é o tamanho do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostrar valor do vetor na posição '0'
var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)