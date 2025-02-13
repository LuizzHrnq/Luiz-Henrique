function calcular(operacao) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira números válidos!');
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Não é possível dividir por zero!');
                return;
            }
            resultado = num1 / num2;
            break;
    }
    
    document.getElementById('resultado').textContent = resultado;
}