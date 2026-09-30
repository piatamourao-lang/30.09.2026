import { Dispositivo } from "./Dispositivos.js";
import { TermostatoProps } from "./DispositivoProps.js";

export class Termostato
    extends Dispositivo<TermostatoProps> {

    constructor(props: TermostatoProps) {
        super(props);
    }

    public get getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    public get getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    public set setTemperaturaAlvo(temp: number) {
        this.props.temperaturaAlvo = temp;
    }
}