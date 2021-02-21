import { Frequencia } from "./frequencia";
import { IEntidade } from "./i-entidade";
import { Intencidade } from "./intencidade";

export class MetadadoDeSintoma implements IEntidade {
    id: string = '';
    nome: string = '';
    intencidades: Intencidade[] = [];
    frequencias: Frequencia[] = [];
    temIntencidade: boolean = false;
    temFrequencia: boolean = false;
    critico: boolean = false;

    toData() {
        let intencidades: any[] = [];
        let frequencias: any[] = [];

        this.intencidades.forEach(element => {
            intencidades.push(element.toData());
        });
        this.frequencias.forEach(element => {
            frequencias.push(element.toData());
        });

        return {
            id: this.id,
            nome: this.nome,
            intencidades: intencidades,
            frequencias: frequencias,
            temIntencidade: this.intencidades.length > 0,
            temFrequencia: this.frequencias.length > 0,
            critico: this.critico,
        };
    }
}