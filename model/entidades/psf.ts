import { IEntidade } from './i-entidade';

export class Psf implements IEntidade {
    id: string = '';
    nome: string = '';
    idCidade: string = '';

    toData() {
        return {
            id: this.id,
            nome: this.nome,
            idCidade: this.idCidade,
        };
    }
}