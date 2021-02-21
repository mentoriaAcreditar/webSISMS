import firebase from 'firebase/app';
import 'firebase/firestore';
import { SintomaSentido } from '../entidades/sintoma-sentido';
import { MetadadoDeSintoma } from '../entidades/metadado-de-sintoma';

export class ReqMetadadoDeSintoma {
    _refCol = firebase.firestore().collection('metadados_de_sintomas');

    listaDeMetadadoDeSintoma() {
        return this._refCol.orderBy("nome").get();
    }

    getMetadadoDeSintomaPorId(idMetadadoDeSintoma: string) {
        return this._refCol.doc(idMetadadoDeSintoma).get();
    }

    getMetadadoDeSintomaPorSintomaSentido(sintomaSentido: SintomaSentido) {
        return this._refCol.doc(sintomaSentido.idMetadadoSintoma).get();
    }

    insert(metadadoDeSintoma: MetadadoDeSintoma) {
        let refdoc = this._refCol.doc();
        metadadoDeSintoma.id = refdoc.id;
        refdoc.set(metadadoDeSintoma.toData(), { merge: true });
    }

    save(metadadoDeSintoma: MetadadoDeSintoma) {
        this._refCol.doc(metadadoDeSintoma.id).set(metadadoDeSintoma.toData(), { merge: true });
    }
}