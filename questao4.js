/* RESPOSTA DA QUESTÃO 4*/

// Valores de faturamento mensal por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o total mensal de faturamento
function calcularTotalMensal(faturamentoPorEstado) {
    let total = 0;
    for (let estado in faturamentoPorEstado) {
        total += faturamentoPorEstado[estado];
    }
    return total;
}

// Função para calcular o percentual de representação de cada estado
function calcularPercentualPorEstado(faturamentoPorEstado, totalMensal) {
    const percentuais = {};
    for (let estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
        percentuais[estado] = percentual.toFixed(2); // Arredondando para 2 casas decimais
    }
    return percentuais;
}

// Calcula o total mensal de faturamento
const totalMensal = calcularTotalMensal(faturamentoPorEstado);

// Calcula o percentual de representação de cada estado
const percentuaisPorEstado = calcularPercentualPorEstado(faturamentoPorEstado, totalMensal);

// Imprime os resultados
console.log("Percentual de representação de cada estado no faturamento mensal:");
for (let estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
}
