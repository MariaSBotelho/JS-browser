class Mensagem {
    constructror(texto = ''){ //recebe texto, se não receber nada fica com string vazia
        this._texto = texto; // guarda texto
    }

    get texto(){ //pega texto
        return this._texto;
    }

    set texto(texto){ //permite editar texto
        this._texto = texto;
    }
}

