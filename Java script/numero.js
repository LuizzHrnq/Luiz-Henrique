let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Número aleatório de 1 a 100
let tentativas = 0; // Contador de tentativas

function adivinhar() {
    const palpite = parseInt(document.getElementById("numero").value); // Obtém o palpite do usuário
    const resultado = document.getElementById("resultado");
    const tentativasTexto = document.getElementById("tentativas");
    
    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.innerText = "Por favor, insira um número entre 1 e 100.";
        return;
    }

    tentativas++; // Incrementa o contador de tentativas

    // Verifica se o palpite é o número correto
    if (palpite === numeroAleatorio) {
        resultado.innerText = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`;
        tentativas = 0; // Reinicia o contador de tentativas
        numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um novo número aleatório
    } else if (palpite < numeroAleatorio) {
        resultado.innerText = "Tente um número maior!";
    } else {
        resultado.innerText = "Tente um número menor!";
    }

    // Atualiza o número de tentativas
    tentativasTexto.innerText = `Tentativas: ${tentativas}`;
}