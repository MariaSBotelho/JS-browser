class NegociacaoController { //evite percorrer o DOM desnecessáriamente, para melhorar a performace
    constructor() {
        let $ = document.querySelector.bind(document); // o bind faz com que a ligação com o document permaneça, sem a ligação o query selector não funciona
        this._inputData = $('#data');        //metodo pertence a um objeto, função não depende de ninguem
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        //tranforma a data de string para um objeto date em um array, separado por '-'
        let data = new Date(
            ...this._inputData.value
            .split('-')
//            .map(function (item, indice) {
//            if (indice == 1) { //date espera 0=janeiro, hmtl retorna 1= janeiro. para ser entendido o mes no date é necessário adequar diminuindo 1 á data
//                return item - 1;
//            }
//            return item;
//        })
             .map((item,indice) => item - indice % 2) //codigo resumido
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);
    }

}