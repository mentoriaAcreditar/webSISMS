import { IEntidade } from './i-entidade';

export class Endereco implements IEntidade {
    rua: string = '';
    bairro: string = '';
    numero: string = '';
    complemento: string = '';

    toData() {
        return {
            rua: this.rua,
            bairro: this.bairro,
            numero: this.numero,
            complemento: this.complemento,
        };
    }
}
