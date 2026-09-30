import { Animal } from "./Animal.js";
import { CachorroProps } from "./AnimalProps.js";

export class Cachorro extends Animal<CachorroProps> {

    constructor(props: CachorroProps) {
        super(props);
    }

    public get getPorte(): string {
        return this.props.porte;
    }

    public get getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}

