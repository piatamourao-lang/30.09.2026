import { AnimalProps } from "./AnimalProps.js";

export class Animal<T extends AnimalProps = AnimalProps> {

    constructor(protected props: T) {}

    public get getNomePaciente(): string {
        return this.props.nomePaciente;
    }

    public get getNomeTutor(): string {
        return this.props.nomeTutor;
    }

    public get getPesoKg(): number {
        return this.props.pesoKg;
    }

    public set setPeso(peso: number) {
        this.props.pesoKg = peso;
    }
}