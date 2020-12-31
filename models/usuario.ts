import { ETipoDeUsuario } from "./enums/tipoDeUsuario";

export abstract class Usuario {
    id: string = '';
    idCidade: string = '';
    nome: string = '';
    email: string = '';
    idPSF: string = '';
    tipo: ETipoDeUsuario = ETipoDeUsuario.PACIENTE;
    avatar: string = '';
    [key: string]: any;
    constructor() { }

    toData() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            refPSF: this.refPSF,
            tipo: this.tipo,
            avatar: this.avatar,
        };
    }
    fromData(res: any) {
        return {
            id: res.id,
            nome: res.nome,
            email: res.email,
            refPSF: res.refPSF,
            tipo: res.tipo,
            avatar: res.avatar,
        };
    }
}