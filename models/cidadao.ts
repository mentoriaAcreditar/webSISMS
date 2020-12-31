import { ETipoDeUsuario } from "./enums/tipoDeUsuario";
import { Usuario } from "./usuario";

export class Cidadao extends Usuario {
    telefone: string = '';
    cpf: string = '';
    rg: string = '';
    idRelatorio: string = '';
    endereco: string = '';
    constructor() {
        super();
        this.tipo = ETipoDeUsuario.PACIENTE;
    }

    toData() {
        return {
            ...super.toData(),
            telefone: this.telefone,
            cpf: this.cpf,
            rg: this.rg,
            idRelatorio: this.idRelatorio,
            endereco: this.endereco,
        };
    }
    fromData(res: any) {
        return {
            ...super.fromData(res),
            telefone: res.telefone,
            cpf: res.cpf,
            rg: res.rg,
            idRelatorio: res.idRelatorio,
            endereco: res.endereco,
        };
    }
    isTemOAtributo(key: string) {
        return this ? Object.prototype.hasOwnProperty.call(this, key) : false;
    }
}