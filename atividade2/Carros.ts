import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "./VeiculosProps.js";

export class Carro extends Veiculo<CarroProps> {

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQuantidadePortas(): number {
        return this.props.quantidadeDePortas;
    }

    public set setQuantidadePortas(valor: number) {
        this.props.quantidadeDePortas = valor;
    }
}