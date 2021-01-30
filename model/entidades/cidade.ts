import { IEntidade } from './i-entidade';

export class Cidade implements IEntidade {
    id: string = '';
    nome: string = '';

    toData() {
        return {
            id: this.id,
            nome: this.nome,
        };
    }
}