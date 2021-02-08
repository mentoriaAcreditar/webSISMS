import firebase from 'firebase/app';
import 'firebase/firestore';
import { Cidade } from '../entidades/cidade';

export class ReqCidades {
  _refCol = firebase.firestore().collection('cidades');

  /**
   *       new ReqCidades().listaDeCidade().then((dados) => {
   *           let cidades = dados.docs.map((doc) => doc.data() as Cidade);
   *           console.log(cidades);
   *       });
   */

  listaDeCidade() {
    return this._refCol.orderBy('nome').get();
  }

  insert(cidade: Cidade) {
    const refdoc = this._refCol.doc();
    cidade.id = refdoc.id;
    refdoc.set(cidade.toData(), { merge: true });
  }

  /**
   *       let cidade = new Cidade();
   *
   *       new ReqCidades().save(cidade).then((dados) => {
   *           let cidades = dados.docs.map((doc) => doc.data() as Cidade);
   *           console.log(cidades);
   *       });
   */

  save(cidade: Cidade) {
    this._refCol.doc(cidade.id).set(cidade.toData(), { merge: true });
  }

  delete(cidade: Cidade) {
    this._refCol.doc(cidade.id).delete();
  }
}
