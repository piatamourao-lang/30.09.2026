import readLine from "readline-sync";
import { Estagiario } from "./Estagiario.js";

console.log("==============================================");
console.log("          CADASTRO DE ESTAGIÁRIO              ");
console.log("==============================================");

const novoEstagiario = new Estagiario({
    cpf: "111.222.333-44",
    nome: "Carlos Silva",
    telefone: "11999999999",
    email: "carlos@email.com",
    dataNascimento: "15/05/2005",
    instituicaoEnsino: "SENAI",
    bolsaAuxilio: 800
});

console.log(`\nEstagiário cadastrado: ${novoEstagiario.getNome}`);
console.log(`Instituição: ${novoEstagiario.getInstituicaoEnsino}`);
console.log(`Bolsa auxílio: R$ ${novoEstagiario.getBolsaAuxilio}`);

// Alterando dados pelo teclado
novoEstagiario.setNome = readLine.question(
    "\nDigite o novo nome do estagiário: "
);

novoEstagiario.setTelefone = readLine.question(
    "Digite o novo telefone: "
);

novoEstagiario.setInstituicaoEnsino = readLine.question(
    "Digite a instituição de ensino: "
);

const novaBolsa = Number(
    readLine.question("Digite o novo valor da bolsa auxílio: ")
);

novoEstagiario.setBolsaAuxilio = novaBolsa;

// Exibindo os dados
console.log("\n==============================================");
console.log("       DADOS COMPLETOS DO ESTAGIÁRIO          ");
console.log("==============================================");

console.log(`CPF:                  ${novoEstagiario.getCpf}`);
console.log(`Nome:                 ${novoEstagiario.getNome}`);
console.log(`Telefone:             ${novoEstagiario.getTelefone}`);
console.log(`E-mail:               ${novoEstagiario.getEmail}`);
console.log(`Data de Nascimento:   ${novoEstagiario.getDataNascimento}`);
console.log(`Instituição de Ensino:${novoEstagiario.getInstituicaoEnsino}`);
console.log(`Bolsa Auxílio:        R$ ${novoEstagiario.getBolsaAuxilio}`);

console.log("==============================================");