import { IEntidade } from './i-entidade';

export class Profissional implements IEntidade {
    id: string = '';
    nome: string = '';
    email: string = '';
    tipo: string = '';
    idPsf: string = '';
    idCidade: string = '';

    toData() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            tipo: this.tipo,
            idPsf: this.idPsf,
            idCidade: this.idCidade,
        };
    }
}