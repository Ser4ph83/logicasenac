// Codigos do Exercicio 5//
function btn1() {
    let nome = prompt("Diga seu nome:");
    alert("Bem vindo " + nome + ", fique a vontade.");
    window.open("https://lista.mercadolivre.com.br/roupas#D[A:roupas]")
}

function btn2() {
    let animal = prompt("Você possui Gato ou Cachorro?");
    alert("Você será redirecionado ao departamento " + animal + ", sinta-se a vontade!");
    window.open("https://lista.mercadolivre.com.br/petshop#D[A:petshop]");
}

function btn3() {
    let banheiro = prompt("Qual modelo do seu banheiro? Classico, Hi-Tech ou Normal?");
    alert("Você escolheu " + banheiro + ", será redirecionado ao setor de " + banheiro);
    window.open("https://lista.mercadolivre.com.br/toilet#D[A:toilet]");
}
//fim do codigo exercicio 5//

//inicio do codigo do exercicio 6//

function cnh() {
    let nomeUsuario;
    while (true) {
        nomeUsuario = prompt("Digite seu nome: ");

        if (nomeUsuario === "" || !/^[a-zA-Zá-úÁ-Ú\s]+$/.test(nomeUsuario)) {
            alert("Por favor, insira um nome valido (somente letras e espaços");
        } else {
            break;
        }
    }
    console.log("O nome do usuario é: " + nomeUsuario);
    //RegExp

    let idadeUsuario;

    while (true) {
        idadeUsuario = prompt("Digite sua idade: ");

        if (idadeUsuario === "" || isNaN(idadeUsuario) || idadeUsuario <= 0) {
            alert("Por favor, insira uma idade valida!");
        } else {
            idadeUsuario = parseInt(idadeUsuario);
            break;
        }
    }

    if (idadeUsuario >= 18) {
        alert(nomeUsuario + ", você esta apto a tirar a CNH!");
    } else {
        alert(nomeUsuario + ", você não esta apto a tirar a CNH!");
    }

}
//final exercicio 6

//inicio exercicio 7
function iniciarJogo() {

    let musica = document.getElementById('bc');
    musica.play();

    jogo();
}

function jogo() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto);
    let palpite = parseInt(prompt("Digite seu palpite entre 1 e 10"));

    if (numeroSecreto === palpite) {
        alert("Acertou Mizeravi!!");
    } else {
        alert("Errou feio amigo");
    }
}

function tablito() {

    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;
    let limiteTentativas = 10;

    do {
        numeroDigitado = parseInt(prompt("Adivinhe o número secreto entre 1 e 10:"));

        if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 10) {
            alert("Por favor, insira um número válido entre 1 e 10.");
            continue;
        }

        tentativas++;

        if (numeroDigitado < numeroSecreto) {
            alert("O número secreto é maior! Tente novamente.");
        } else if (numeroDigitado > numeroSecreto) {
            alert("O número secreto é menor! Tente novamente.");
        } else {
            alert(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
            break;
        }

        if (tentativas === limiteTentativas) {
            alert(`Você atingiu o limite de tentativas! O número secreto era ${numeroSecreto}.`);
            break;
        }

    } while (numeroDigitado !== numeroSecreto);
}
//final do exercicio 7

//inicio do exercicio 8

let numeroSecreto1 = Math.floor(Math.random() * 10) + 1;
console.log("Número secreto gerado: " + numeroSecreto1); 

function jogos1() {
    
    let inputPalpite = document.getElementById("palpite");
    let mensagem = document.getElementById("texto");

    let palpite = parseInt(inputPalpite.value);

    if (palpite === numeroSecreto1) {
        mensagem.textContent = "Parabéns! Acertou, Mizeravi!";
        
        numeroSecreto1 = Math.floor(Math.random() * 10) + 1;
        console.log("Novo número secreto gerado: " + numeroSecreto1); 
    } else if (palpite < numeroSecreto1) {
        mensagem.textContent = "Tente um número maior!";
    } else {
        mensagem.textContent = "Tente um número menor!";
    }

    inputPalpite.value = "";
    inputPalpite.focus();
}

document.getElementById("btn33").addEventListener("click", jogos1);

//calculadora IA
let currentInput = "0";  // Armazena o número atual no visor
let previousInput = null; // Armazena o número anterior (para operações)
let operator = null;      // Armazena o operador selecionado

// Atualiza o display da calculadora
function updateDisplay() {
    document.getElementById("display").textContent = currentInput;
}

// Função para adicionar números ao visor
function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number.toString(); // Substitui o "0" inicial pelo número
    } else {
        currentInput += number.toString(); // Adiciona o número à string atual
    }
    updateDisplay();
}

// Função para selecionar o operador (+, -, *, /)
function selectOperator(op) {
    if (previousInput === null) {
        previousInput = currentInput; // Armazena o número atual
        operator = op; // Define o operador
        currentInput = "0"; // Reseta o visor para o próximo número
    } else if (currentInput !== "0") {
        calculateResult(); // Se já houver uma operação, calcula o resultado
        previousInput = currentInput; // Armazena o resultado
        operator = op; // Atualiza o operador
        currentInput = "0"; // Reseta o visor para o próximo número
    }
    updateDisplay();
}

// Função para calcular o resultado
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Erro"; // Evita a divisão por zero
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString(); // Atualiza o visor com o resultado
    operator = null; // Reseta o operador
    previousInput = null; // Limpa o número anterior
    updateDisplay();
}

// Função para limpar o visor
function clearDisplay() {
    currentInput = "0"; // Reseta o número atual
    previousInput = null; // Limpa o número anterior
    operator = null; // Limpa o operador
    updateDisplay();
}

// Função para inicializar a calculadora
function initializeCalculator() {
    updateDisplay();
}

// Chama a função de inicialização assim que o script for carregado
initializeCalculator();
