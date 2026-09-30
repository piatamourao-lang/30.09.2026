import { Carro } from "./carros.js";
import { Moto } from "./moto.js";

const carro = new Carro({
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2025,
    quantidadeDePortas: 4
});

const moto = new Moto({
    marca: "Honda",
    modelo: "CB 500",
    ano: 2024,
    cilindradas: 500
});

console.log("========== CARRO ==========");

console.log("Marca:", carro.getMarca);
console.log("Modelo:", carro.getModelo);
console.log("Ano:", carro.getAno);
console.log("Portas:", carro.getQuantidadePortas);

console.log("\n========== MOTO ==========");

console.log("Marca:", moto.getMarca);
console.log("Modelo:", moto.getModelo);
console.log("Ano:", moto.getAno);
console.log("Cilindradas:", moto.getCilindradas);