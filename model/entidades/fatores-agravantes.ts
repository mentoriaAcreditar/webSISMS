import { IEntidade } from './i-entidade';

export class FatoresAgravantes implements IEntidade {
    listaDeMedicamentoPreexistentes: [] = [];
    listaDeDoencas: [] = [];

    toData() {
        return {
            listaDeMedicamentoPreexistentes: this.listaDeMedicamentoPreexistentes,
            listaDeDoencas: this.listaDeDoencas,
        };
    }
}
