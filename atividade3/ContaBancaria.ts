import { ContaBancariaProps } from "./ContaBancariaProps.js";

export class ContaBancaria<T extends ContaBancariaProps = ContaBancariaProps> {

    constructor(protected props: T) {}

    public get getNumeroConta(): string {
        return this.props.numeroConta;
    }

    public get getTitular(): string {
        return this.props.titular;
    }

    public get getSaldo(): number {
        return this.props.saldo;
    }
}