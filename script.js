//1 - Criar um loop que conte de 1 até 10 usando FOR

console.log("De 1 a 10")

for(let i = 1; i <= 10; i++){
    console.log(i)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE

console.log("De 10 a 1")

let contador = 10

while(contador >= 1){
    console.log(contador)
    contador--
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

console.log("Ímpares")

let cont = 1

while (cont <= 100){
    console.log(cont)
    cont +=2
}

//4- Criar um loop que conte todos os números pares de 0 a 100

console.log("Pares")

for(i = 0; i <= 100; i += 2){
    console.log(i)
}