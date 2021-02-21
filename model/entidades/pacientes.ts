import { Endereco } from "./endereco";
import { Relatorio } from "./relatorio";

export class Paciente {
    id: string = '';
    nome: string = '';
    telefone: number | null = null;
    endereco: Endereco | null = null;
    relatorio: Relatorio = new Relatorio();
    idPsf: string = '';
    idCidade: string = '';

    toData() {
        let endereco = null;
        if (this.endereco != null)
            endereco = this.endereco.toData();

        return {
            id: this.id,
            nome: this.nome,
            telefone: this.telefone,
            endereco: endereco,
            relatorio: this.relatorio.toData(),
            idPsf: this.idPsf,
            idCidade: this.idCidade,
        };
    }
}