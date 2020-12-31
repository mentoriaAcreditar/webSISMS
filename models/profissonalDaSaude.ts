import { ETipoDeUsuario } from "./enums/tipoDeUsuario";
import { Usuario } from "./usuario";

export class ProfissonalDaSaude extends Usuario {
    idControleAcesso: string = '';
    constructor() {
        super();
        this.tipo = ETipoDeUsuario.PROFISSONAL;
    }

    toData() {
        return {
            ...super.toData(),
            idControleAcesso: this.idControleAcesso,
        };
    }
    fromData(res: any) {
        return {
            ...super.fromData(res),
            idControleAcesso: res.idControleAcesso,
        };
    }
}