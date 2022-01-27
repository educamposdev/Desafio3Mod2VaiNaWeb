//1 - Criar um loop que conte de 1 até 10 usando FOR


//2 - Criar um loop que conte de 10 até 1 usando WHILE


//3 - Criar um loop que conte todos os números ímpares de 1 até 100


//4- Criar um loop que conte todos os números pares de 0 a 100

for (let count = 1; count <= 10; count++) {
    console.log(count)
}

let count2 = 10
while (count2 >= 1) {
    console.log(count2)
    count2 -= 1
}

for (let impares = 1; impares <= 100; impares++ ) {
    if (impares%2 == 1 | impares == 1) {
        console.log(impares)
    } else {
        continue 
    }
} 

for (let pares = 0; pares <= 100; pares++) {
    if (pares%2 == 0) {
        console.log(pares)
    } else {
        continue
    }
}