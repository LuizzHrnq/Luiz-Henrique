document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const sucessoMensagem = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', function(event) {
        // Previne o envio do formulário caso haja erro
        event.preventDefault();

        // Obtenção dos valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telephone').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação dos campos
        if (!nome || !email || !telefone || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação do formato de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Validação do formato de telefone (formato básico: (XX) XXXXX-XXXX)
        const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!telefoneRegex.test(telefone)) {
            alert('Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX.');
            return;
        }

        // Se todas as validações passarem, mostramos a mensagem de sucesso
        sucessoMensagem.style.display = 'block';  // Exibe a mensagem de sucesso
        form.reset();  // Limpa os campos após envio

        // Opcional: Esconde a mensagem de sucesso após alguns segundos
        setTimeout(() => {
            sucessoMensagem.style.display = 'none';
        }, 5000); // A mensagem desaparece após 5 segundos
    });
});