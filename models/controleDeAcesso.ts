import { ETipoDeUsuario } from "./enums/tipoDeUsuario";

export class ControleDeAcesso {
    id: string = '';
    email: string = '';
    tipo: ETipoDeUsuario;
    constructor() {
        this.tipo = ETipoDeUsuario.PACIENTE;
    }

    toData() {
        return {
            id: this.id,
            email: this.email,
            tipo: this.tipo,
        };
    }
    fromData(res: any) {
        return {
            id: res.id,
            email: res.email,
            tipo: res.tipo,
        };
    }
}