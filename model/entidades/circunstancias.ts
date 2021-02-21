import { IEntidade } from './i-entidade';

export class Circunstancias implements IEntidade {
    informacoesDoTrabalho: string = '';
    esteveNumaUnidadeDeSaude: boolean = false;
    contatoComSuspeitosOuInfectados: boolean = false;

    toData() {
        return {
            informacoesDoTrabalho: this.informacoesDoTrabalho,
            esteveNumaUnidadeDeSaude: this.esteveNumaUnidadeDeSaude,
            contatoComSuspeitosOuInfectados: this.contatoComSuspeitosOuInfectados,
        };
    }
}
