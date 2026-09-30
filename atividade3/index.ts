import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupança.js";

const corrente = new ContaCorrente({
    numeroConta: "001234-5",
    titular: "Carlos Silva",
    saldo: 1500,
    limiteChequeEspecial: 500
});

const poupanca = new ContaPoupanca({
    numeroConta: "009876-5",
    titular: "Maria Souza",
    saldo: 2500,
    taxaRendimentoMensal: 0.5
});

console.log("========== CONTA CORRENTE ==========");

console.log("Número:", corrente.getNumeroConta);
console.log("Titular:", corrente.getTitular);
console.log("Saldo:", corrente.getSaldo);
console.log("Limite:", corrente.getLimiteChequeEspecial);

console.log("\n========== CONTA POUPANÇA ==========");

console.log("Número:", poupanca.getNumeroConta);
console.log("Titular:", poupanca.getTitular);
console.log("Saldo:", poupanca.getSaldo);
console.log("Taxa:", poupanca.getTaxaRendimentoMensal);