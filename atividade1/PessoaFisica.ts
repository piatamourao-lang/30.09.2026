import { PessoaFisicaProps } from "./Pessoasprops.js";

export class PessoaFisica<T extends PessoaFisicaProps = PessoaFisicaProps> {

    constructor(protected props: T) {}

    public get getCpf(): string {
        return this.props.cpf;
    }

    public get getNome(): string {
        return this.props.nome;
    }

    public get getTelefone(): string {
        return this.props.telefone;
    }

    public get getEmail(): string {
        return this.props.email;
    }

    public get getDataNascimento(): string {
        return this.props.dataNascimento;
    }

    public set setCpf(novoCpf: string) {
        this.props.cpf = novoCpf;
    }

    public set setNome(novoNome: string) {
        this.props.nome = novoNome;
    }

    public set setTelefone(novoTelefone: string) {
        this.props.telefone = novoTelefone;
    }

    public set setEmail(novoEmail: string) {
        this.props.email = novoEmail;
    }

    public set setDataNascimento(novaDataNascimento: string) {
        this.props.dataNascimento = novaDataNascimento;
    }
}