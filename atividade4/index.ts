import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";

const cachorro = new Cachorro({
    nomePaciente: "Rex",
    nomeTutor: "Carlos",
    pesoKg: 18.5,
    porte: "Médio",
    precisaTosa: true
});

const gato = new Gato({
    nomePaciente: "Mimi",
    nomeTutor: "Ana",
    pesoKg: 4.2,
    fivFelvTestado: true,
    isIndoor: true
});

console.log("========== CACHORRO ==========");

console.log("Paciente:", cachorro.getNomePaciente);
console.log("Tutor:", cachorro.getNomeTutor);
console.log("Peso:", cachorro.getPesoKg);
console.log("Porte:", cachorro.getPorte);
console.log("Precisa tosa:", cachorro.getPrecisaTosa);

console.log("\n========== GATO ==========");

console.log("Paciente:", gato.getNomePaciente);
console.log("Tutor:", gato.getNomeTutor);
console.log("Peso:", gato.getPesoKg);
console.log("FIV/FELV testado:", gato.getFivFelvTestado);
console.log("É indoor:", gato.getIsIndoor);