let butNew = document.getElementById('buttonNew');
butNew.style.display = "none";

let newMessage = document.getElementById('changeMessage');
newMessage.style.display = "none";

function sorteio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sorteioNumero= sorteio(1,100)
let arrayNumeros = [];



function exibirNumeros() {
    let numeros = document.getElementById('numerosPalpite').value;
    let numero = parseInt(numeros)



    if(numero >= 1 & numero <= 100) {
        arrayNumeros.push(numero);
        document.getElementById('numerosPalpite').value = ''
    } else {
        document.getElementById('changeMessage').textContent = 'Digite um número Válido !'
        newMessage.style.display = "flex"
        newMessage.style.background = "yellow"
        newMessage.style.color = "black"
        console.log('Número Inválido, Digite um número de 1 a 100')
        document.getElementById('numerosPalpite').value = ''
				console.log(sorteioNumero);

    }

    if(numero > sorteioNumero | numero < sorteioNumero) {
        newMessage.style.display = "flex"
        newMessage.style.background = "red"
        document.getElementById('changeMessage').textContent = 'Palpite Errado !'
    }  if(numero > sorteioNumero) {
        document.getElementById('changeDica').textContent = 'Palpite Maior do que o número Sorteado !'
    } if (numero < sorteioNumero) {
        document.getElementById('changeDica').textContent = 'Palpite Menor do que o número Sorteado !'
    }
        if(numero < 1 | numero > 100) {
        document.getElementById('changeMessage').textContent = 'Digite um número Válido !'
        newMessage.style.display = "flex"
        newMessage.style.background = "yellow"
        newMessage.style.color = "black"
    }  if(numero == sorteioNumero) {
        document.getElementById('changeMessage').textContent = 'Você Acertou !'
        newMessage.style.display = "flex"
        newMessage.style.background = "green"
        newMessage.style.color = "white"
        document.getElementById('changeDica').textContent = 'Palpite CORRETO !'
				document.getElementById('enviarPalpite').disabled = true
				document.getElementById('changeDica').textContent = ''
				butNew.style.display = "flex";


    } if(arrayNumeros.length > 9 & arrayNumeros[9] != sorteioNumero) {
        console.log('FIm de Jogo')
				newMessage.style.display = "flex"
        newMessage.style.background = "black"
        newMessage.style.color = "white"
				document.getElementById('changeMessage').textContent = 'Não foi dessa vez ! Inicie um novo Jogo para tentar novamente.'
				document.getElementById('enviarPalpite').disabled = true
				butNew.style.display = "flex";
				document.getElementById('changeDica').textContent = ''


    }


    document.getElementById('changeArray').textContent = arrayNumeros.join(', ');
    console.log(arrayNumeros);

}

function novoJogo() {

	butNew.style.display = "none";
	newMessage.style.display = "none";
	document.getElementById('enviarPalpite').disabled = false
	arrayNumeros = [];
	document.getElementById('changeArray').textContent = arrayNumeros;
	sorteioNumero = sorteio(1, 100);

}



