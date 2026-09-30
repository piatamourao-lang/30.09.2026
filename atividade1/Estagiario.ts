import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "./Pessoasprops.js";

export class Estagiario extends PessoaFisica<EstagiarioProps> {

    constructor(props: EstagiarioProps) {
        super(props);
    }

    public get getInstituicaoEnsino(): string {
        return this.props.instituicaoEnsino;
    }

    public get getBolsaAuxilio(): number {
        return this.props.bolsaAuxilio;
    }

    public set setInstituicaoEnsino(novaInstituicao: string) {
        if (novaInstituicao.trim().length === 0) {
            console.log("\nERRO: A instituição de ensino não pode ser vazia!");
            return;
        }

        this.props.instituicaoEnsino = novaInstituicao;
    }

    public set setBolsaAuxilio(novoValor: number) {
        if (novoValor < 0) {
            console.log("\nERRO: A bolsa auxílio não pode ser menor que zero!");
            return;
        }

        this.props.bolsaAuxilio = novoValor;
    }
}