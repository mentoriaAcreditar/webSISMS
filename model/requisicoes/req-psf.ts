import firebase from 'firebase/app';
import 'firebase/firestore';
import { Cidade } from '../entidades/cidade';
import { Psf } from '../entidades/psf';

export class ReqPsf {
    _refCol = firebase.firestore().collection('psfs');

    listaDePsfDaCidade(cidade: Cidade) {
        return this._refCol.where("idCidade", "==", cidade.id).orderBy("nome").get();
    }

    listaDePsf() {
        return this._refCol.orderBy("nome").get();
    }

    insert(psf: Psf) {
        let refdoc = this._refCol.doc();
        psf.id = refdoc.id;
        return refdoc.set(psf.toData(), { merge: true });
    }

    save(psf: Psf) {
        return this._refCol.doc(psf.id).set(psf.toData(), { merge: true });
    }

    delete(psf: Psf) {
        return this._refCol.doc(psf.id).delete();
    }
}