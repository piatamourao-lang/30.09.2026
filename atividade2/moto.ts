import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "./VeiculosProps.js";

export class Moto extends Veiculo<MotoProps> {

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number {
        return this.props.cilindradas;
    }

    public set setCilindradas(valor: number) {
        this.props.cilindradas = valor;
    }
}