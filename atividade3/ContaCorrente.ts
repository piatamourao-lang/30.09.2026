import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "./ContaBancariaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    constructor(props: ContaCorrenteProps) {
        super(props);
    }

    public get getLimiteChequeEspecial(): number {
        return this.props.limiteChequeEspecial;
    }
}