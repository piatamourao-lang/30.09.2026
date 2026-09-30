import { Animal } from "./Animal.js";
import { GatoProps } from "./AnimalProps.js";

export class Gato extends Animal<GatoProps> {

    constructor(props: GatoProps) {
        super(props);
    }

    public get getFivFelvTestado(): boolean {
        return this.props.fivFelvTestado;
    }

    public get getIsIndoor(): boolean {
        return this.props.isIndoor;
    }
}