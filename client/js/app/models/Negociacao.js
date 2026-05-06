class Negociacao{

    constructor(data, quantidade , valor){ // valores da negociações não podem ser alterados
        this._data = new Date(data.getTime()); // ._ convenção para que os valores sejam acessados apenas pela própria classe
        this._quantidade = quantidade;
        this._valor = valor ;
        //
        // Object.freeze(n1); // objeto é congelado, valor não será alterado , porem raso , ainda permite alterar em objetos que possuem metodos de alteração de valor
    }
    obtemVolume(){ // metodo (função na classe)
        return this.quantidade * this.valor;
    }
    get data(){
        return new Date(this._data.getTime()); //se alguem fora da classe alterar a data , será alterado apenas em uma copia da data, e não na original
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}