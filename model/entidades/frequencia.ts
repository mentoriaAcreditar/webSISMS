import { IEntidade } from './i-entidade';

export class Frequencia implements IEntidade {
    nome: string = '';
    prioridade: string = '';

    toData() {
        return {
            nome: this.nome,
            prioridade: this.prioridade,
        };
    }
}
