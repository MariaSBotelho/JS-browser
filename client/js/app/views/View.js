class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    //template é feito para cada classe filha , se o programador esqueça de fazer exibirá um aviso de erro
    template(){ // não pode ser privada_ , para as classes filhas poderem sobrescrever o erro com o codigo template e o erro ser lançado apenas se o template não existir
        throw new Error('O metodo template deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}