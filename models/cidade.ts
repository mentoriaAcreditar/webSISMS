export class Cidade {
    id: string = '';
    nome: string = '';
    constructor(id: string, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    toData() {
        return {
            id: this.id,
            nome: this.nome,
        };
    }
    static fromData(res: any) {
        return new Cidade(res.id, res.nome);
    }
}