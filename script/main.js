let butNew = document.getElementById('buttonNew');
butNew.style.display = "none";

let newMessage = document.getElementById('changeMessage');
newMessage.style.display = "none";

function AparecerBotaoNew() {

}

function sorteio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sorteioNumero= sorteio(1,100)


let arrayNumeros = [];

function exibirNumeros() {
    let numeros = document.getElementById('numerosPalpite').value;
    let numero = parseInt(numeros)


    if(numero > 1 | numero < 100){
        arrayNumeros.push(numero);
        document.getElementById('numerosPalpite').value = ''
        if(numero > sorteioNumero | numero < sorteioNumero) {
            newMessage.style.display = "flex"
            newMessage.style.background = "red"
            document.getElementById('changeMessage').textContent = 'Palpite Errado !'
        }
    }    
    else {
        console.log('Número Inválido, Digite um número de 1 a 100')
        console.log(sorteioNumero)
    }
   
    console.log(arrayNumeros);
}

