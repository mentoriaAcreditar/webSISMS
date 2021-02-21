import firebase from 'firebase/app';
import 'firebase/firestore';
import { Cidade } from '../entidades/cidade';
import { Paciente } from '../entidades/pacientes';
import { Psf } from '../entidades/psf';

export class ReqPacientes {
    _refCol = firebase.firestore().collection('pascientes');

    _queryPacientesDaCidade(cidade: Cidade) {
        return this._refCol.where("idCidade", "==", cidade.id);
    }

    _queryPacientesDoPsf(psf: Psf) {
        return this._refCol.where("idPsf", "==", psf.id);
    }

    /**
     *       new ReqCidades().listaDeCidade().then((dados) => {
     *           let cidades = dados.docs.map((doc) => doc.data() as Cidade);
     *           console.log(cidades);
     *       });
     */

    listaDePacientesDaCidade(cidade: Cidade) {
        return this._queryPacientesDaCidade(cidade).orderBy("nome").get();
    }

    listaDePacientesDaCidadePorRisco(cidade: Cidade) {
        return this._queryPacientesDaCidade(cidade).orderBy("relatorio.nivelDeRisco", "desc").get();
    }

    listaDePacientesDaCidadeSemRelatorio(cidade: Cidade) {
        return this._queryPacientesDaCidade(cidade).where("relatorio", "==", null).get();
    }

    listaDePacientesDoPsf(psf: Psf) {
        return this._queryPacientesDoPsf(psf).orderBy("nome").get();
    }

    listaDePacientesDoPsfPorRisco(psf: Psf) {
        return this._queryPacientesDoPsf(psf).orderBy("relatorio.nivelDeRisco", "desc").get();
    }

    listaDePacientesDoPsfSemRelatorio(psf: Psf) {
        return this._queryPacientesDoPsf(psf).where("relatorio", "==", null).get();
    }

    insert(paciente: Paciente) {
        let refdoc = this._refCol.doc();
        paciente.id = refdoc.id;
        refdoc.set(paciente.toData(), { merge: true });
    }

    /**
     *       let cidade = new Cidade();
     * 
     *       new ReqCidades().save(cidade).then((dados) => {
     *           let cidades = dados.docs.map((doc) => doc.data() as Cidade);
     *           console.log(cidades);
     *       });
     */

    save(paciente: Paciente) {
        this._refCol.doc(paciente.id).set(paciente.toData(), { merge: true });
    }
}
