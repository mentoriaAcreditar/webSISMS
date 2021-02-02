import { IEntidade } from './i-entidade';

export class Profissional implements IEntidade {
  id = '';

  nome = '';

  email = '';

  tipo = '';

  idPsf = '';

  idCidade = '';

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
