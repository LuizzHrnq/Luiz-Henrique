const perguntas = [
    { pergunta: "Quantos anos tem a Billie Eilish?", respostas: ["23", "21", "22", "24"], correta: 0 },
    { pergunta: "Qual é o nome dos 3 gatos da Taylor?", respostas: ["Gracie, Sabrina & Olivia", "Meredith, Olivia & Benjamin", "Raven, Olaf & Meredith", "Benjamin, Travis & Margaret"], correta: 1 },
    { pergunta: "Qual o nome do álbum que a Sabrina Carpenter lançou dia 23 de agosto de 2024?", respostas: ["Emails I Can't Send", "Eyes Wide Open", "EVOLution", "Short n' Sweet"], correta: 3 },
    { pergunta: "Qual o nome verdadeiro da Lana Del Rey?", respostas: ["Lana Del Rey", "Elizabeth Woolridge Grant", "May Jailer", "Lizzy Grant"], correta: 1 },
    { pergunta: "com quem foi o último Feat da Lady Gaga em 2024?", respostas: ["ROSÉ", "Beyoncé", "Bruno Mars", "Charlie XCX"], correta: 2 },
    { pergunta: "Qual o primeiro EP. da cantora Melanie Martinez?", respostas: ["CopyCat", "Pity Party", "Dollhouse", "After School"], correta: 2 },
    { pergunta: "Qual foi o prêmio que a Chappell Roan ganhou no 67th Grammy?", respostas: ["Artista Revelação", "Música do Ano", "Melhor Vídeo Clipe do ano", "Album do ano"], correta: 0 },
    { pergunta: "Qual o signo da Ariana Grande?", respostas: ["Aries", "Cancer", "Touro", "Aquário"], correta: 1 },
    { pergunta: "Que ano a Mitski Nasceu?", respostas: ["1987", "1980", "1989", "1990"], correta: 3 },
    { pergunta: "Qual foi o primeiro álbum da Olívia Rodrigo?", respostas: ["Sour", "Guts", "Vampire", "Traitor"], correta: 0 }
];

const quizForm = document.getElementById("quiz-form");
const perguntasDiv = document.getElementById("perguntas");
const resultado = document.getElementById("resultado");

// Criar perguntas no HTML
perguntas.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("pergunta");
    div.innerHTML = `<p><strong>${index + 1}. ${item.pergunta}</strong></p>`;

    item.respostas.forEach((resposta, i) => {
        div.innerHTML += `
            <label>
                <input type="radio" name="pergunta${index}" value="${i}">
                ${resposta}
            </label><br>
        `;
    });

    perguntasDiv.appendChild(div);
});

// Verificar respostas
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let acertos = 0;

    perguntas.forEach((item, index) => {
        const respostaSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
        if (respostaSelecionada && parseInt(respostaSelecionada.value) === item.correta) {
            acertos++;
        }
    });

    resultado.innerHTML = `Você acertou <strong>${acertos}</strong> de 10 perguntas!`;
});