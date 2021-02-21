import { Frequencia } from './frequencia';
import { IEntidade } from './i-entidade';
import { Intencidade } from './intencidade';

export class SintomaSentido implements IEntidade {
    idMetadadoSintoma: string = '';
    intencidade: Intencidade | null = null;
    frequencia: Frequencia | null = null;

    toData() {
        let intencidade = null;
        if (this.intencidade != null)
            intencidade = this.intencidade.toData();

        let frequencia = null;
        if (this.frequencia != null)
            frequencia = this.frequencia.toData();

        return {
            idMetadadoSintoma: this.idMetadadoSintoma,
            intencidade: intencidade,
            frequencia: frequencia,
        };
    }
}
