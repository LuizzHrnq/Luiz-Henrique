function calcular() {
    const opcao = document.getElementById("opcao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    let resultado = "";

    if (isNaN(valor)) {
        resultado = "Por favor, insira um valor válido.";
    } else {
        if (opcao == "1") {
            const fahrenheit = (valor * 9/5) + 32;
            resultado = `${valor} °C é igual a ${fahrenheit.toFixed(2)} °F`;
        } else if (opcao == "2") {
            const cotacao = parseFloat(prompt("Digite a cotação do Dólar para Real:"));
            if (isNaN(cotacao)) {
                resultado = "Por favor, insira uma cotação válida.";
            } else {
                const real = valor * cotacao;
                resultado = `${valor} USD é igual a ${real.toFixed(2)} BRL`;
            }
        } else if (opcao == "3") {
            const centimetros = valor * 100;
            resultado = `${valor} metros é igual a ${centimetros.toFixed(2)} centímetros`;
        }
    }

    document.getElementById("resultado").innerText = resultado;
}