import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "./ContaBancariaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    constructor(props: ContaPoupancaProps) {
        super(props);
    }

    public get getTaxaRendimentoMensal(): number {
        return this.props.taxaRendimentoMensal;
    }
}