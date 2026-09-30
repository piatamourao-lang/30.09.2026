// Interface base
export interface PessoaFisicaProps {
    cpf: string;
    nome: string;
    telefone: string;
    email: string;
    dataNascimento: string;
}

// Interface do Estagiário
// Herda todos os dados de PessoaFisicaProps
export interface EstagiarioProps extends PessoaFisicaProps {
    instituicaoEnsino: string;
    bolsaAuxilio: number;
}