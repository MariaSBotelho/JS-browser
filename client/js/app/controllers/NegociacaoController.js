class NegociacaoController { //evite percorrer o DOM desnecessáriamente, para melhorar a performace
    constructor() { //propriedades do objeto
        let $ = document.querySelector.bind(document); // o bind faz com que a ligação com o document permaneça, sem a ligação o query selector não funciona
        this._inputData = $('#data');        //metodo pertence a um objeto, função não depende de ninguem
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor'); //recebe valores de data quantidade e valor, busca a entrada no html
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mesagemView');
        this._mensagemView.update(this._mensagem);
    }
    adiciona(event) {
        event.preventDefault(); //faz com que a pagina não recarregue ao enviar formulario, para não perder os dados.
            
        this._listaNegociacoes.adiciona(this._criaNegociacao()); //busca o metodo adiciona em ListaNegociacoes, ao criar uma nova negociação ela é incluida por ultimo no array 
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario(); //chama o metodo que ao enviar o formaulario o limpa e deixa o foco no primeiro campo

    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){
        this._inputData.value = ''; //ao enviar formulario, o valor retorna para dd/mm/aaaa
        this._inputQuantidade.value = 1;// valor retorna 1
        this._inputValor.value = 0.0; // 0.0

        this._inputData.focus(); //ganha o foco assim que o formulario é enviado e limpo
    }

}