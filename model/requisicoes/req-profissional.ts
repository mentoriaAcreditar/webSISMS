import firebase from 'firebase/app';
import 'firebase/firestore';
import { Cidade } from '../entidades/cidade';
import { Psf } from '../entidades/psf';
import { Profissional } from '../entidades/profissional';

export class ReqProfissional {
    _refCol = firebase.firestore().collection('profissionais');

    listaDeProfissionaisDaCidade(cidade: Cidade) {
        return this._refCol.where("idCidade", "==", cidade.id).orderBy("nome").get();
    }

    listaDeProfissionaisDoPsf(psf: Psf) {
        return this._refCol.where("idPsf", "==", psf.id).orderBy("nome").get();
    }

    listaDeProfissionais() {
        return this._refCol.orderBy("nome").get();
    }

    insert(profissional: Profissional) {
        let refdoc = this._refCol.doc();
        profissional.id = refdoc.id;
        refdoc.set(profissional.toData(), { merge: true });
    }

    save(profissional: Profissional) {
        return this._refCol.doc(profissional.id).set(profissional.toData(), { merge: true });
    }
    
    delete(profissional: Profissional) {
        return this._refCol.doc(profissional.id).delete();
    }
}