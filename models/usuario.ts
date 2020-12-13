export class Usuario {
    id: string;
    nome: string;
    email: string;
    refPSF: string;
    tipo: string;

    constructor(
        id: string,
        nome: string,
        email: string,
        refPSF: string,
        tipo: string
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.refPSF = refPSF;
        this.tipo = tipo;

    }
    toData() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            refPSF: this.refPSF,
            tipo: this.tipo
        };
    }
    fromData(res: any) {
        return {
            id: res.id,
            nome: res.nome,
            email: res.email,
            refPSF: res.refPSF,
            tipo: res.tipo
        };
    }
}