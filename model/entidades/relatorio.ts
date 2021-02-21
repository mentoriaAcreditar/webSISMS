import { Circunstancias } from "./circunstancias";
import { FatoresAgravantes } from "./fatores-agravantes";
import { IEntidade } from "./i-entidade";
import { SintomasDiarios } from "./sintomas-diarios";

export class Relatorio implements IEntidade {
    nivelDeRisco: number | null = null;
    estado: number | null = null;
    circunstancias: Circunstancias = new Circunstancias();
    fatoresAgravantes: FatoresAgravantes = new FatoresAgravantes();
    sintomasDiarios: SintomasDiarios[] = [];

    toData() {
        let sintomasDiarios: any[] = [];

        this.sintomasDiarios.forEach(element => {
            sintomasDiarios.push((element as SintomasDiarios).toData());
        });

        return {
            nivelDeRisco: this.nivelDeRisco,
            estado: this.estado,
            circunstancias: this.circunstancias.toData(),
            fatoresAgravantes: this.fatoresAgravantes.toData(),
            sintomasDiarios: sintomasDiarios,
        };
    }
}