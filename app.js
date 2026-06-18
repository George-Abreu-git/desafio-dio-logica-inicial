let wins = 40;
let loses = 40;
let result = sumResult;
let rank = showRank;
main();

function main() {
    result = result(wins,loses);
    rank = rank(result);
    console.log(`O Herói tem saldo de ${result} e está no rank ${rank}`);
}

function sumResult(numA, numB) {
    let sum = numA - numB;
    return sum;
}

function showRank(numA) {
    let rank = ""
    if (numA < 10) {
        rank = "Ferro"
    } else if (numA >= 10 && numA <= 20 ) {
        rank = "Bronze"
    } else if (numA > 20 && numA <= 50 ) {
        rank = "Prata"
    } else if (numA > 50 && numA <= 80 ) {
        rank = "Ouro"
    } else if (numA > 80 && numA <= 90 ) {
        rank = "Diamante"
    } else if (numA > 90 && numA <= 100 ) {
        rank = "Lendário"
    } else if (numA > 100) {
        rank = "Imortal"
    }

    return rank;
}

