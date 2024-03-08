// Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }

// imprimir(SOMA);


/*RESULTADO*/
let indice = 13
let soma = 0
let k = 0

while (k < indice) {
    k =k +1;
    soma = soma + k
}

console.log(soma);

/* QUESTÃO 2 */
function verificaSequenciaFibonacci(numero) {
    
    if (numero === 0 || numero === 1) {
        return true;
    }

    let anterior = 0;
    let atual = 1;

    
    while (atual <= numero) {
        
        if (atual === numero) {
            return true;
        }

        
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    
    return false;
}


const numeroInformado = 21;
if (verificaSequenciaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}


/* QUESTÃO 3*/

const faturamentoDiario = [1000, 1200, 800, 1500, 1400, 1600, 1100, 1300, 1700, 2000, 1800, 1900, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calcularMinMaxFaturamento(faturamentoDiario) {
    let menor = Number.MAX_SAFE_INTEGER;
    let maior = Number.MIN_SAFE_INTEGER;

    for (let valor of faturamentoDiario) {
        if (valor < menor) {
            menor = valor;
        }
        if (valor > maior) {
            maior = valor;
        }
    }

    return { menor, maior };
}

function calcularMediaMensal(faturamentoDiario) {
    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((total, valor) => total + valor, 0);
    return somaFaturamento / diasComFaturamento.length;
}

function contarDiasAcimaDaMedia(faturamentoDiario, mediaMensal) {
    let contador = 0;

    for (let valor of faturamentoDiario) {
        if (valor > mediaMensal) {
            contador++;
        }
    }

    return contador;
}

const { menor, maior } = calcularMinMaxFaturamento(faturamentoDiario);
console.log("Menor valor de faturamento diário:", menor);
console.log("Maior valor de faturamento diário:", maior);

const mediaMensal = calcularMediaMensal(faturamentoDiario);
console.log("Média mensal de faturamento:", mediaMensal);

const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamentoDiario, mediaMensal);
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
