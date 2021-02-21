import { IEntidade } from "./i-entidade";
import { SintomaSentido } from "./sintoma-sentido";

export class SintomasDiarios implements IEntidade {
    timestemp: number | null = null;
    listaDeSintomas: SintomaSentido[] = [];

    toData() {
        let listaDeSintomas: any[] = [];

        this.listaDeSintomas.forEach(element => {
            listaDeSintomas.push((element as SintomaSentido).toData());
        });

        return {
            timestemp: this.timestemp,
            listaDeSintomas: listaDeSintomas,
        };
    }
}