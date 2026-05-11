class DateHelper {
    constructor() {
        throw new Error('DateHelper não pode ser instanciada'); //lança um erro
    }

    static dataParaTexto(data) { //pode invocar diretamente da classse não precisa de uma instancia para trabalhar com ele
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        //expressão regular, ano terá 4 digitos, mês 2 digitos, dia 2 digitos
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd'); //d- numero, D, diferente de número, O ˆ indica "começando com " e o $ "terminando com".
        //if(!/\d{4}-\d{2}-\d{2}/.test(texto)){throw new Error('Deve estar no formato aaaa-mm-dd')}//testa se o formato esta funcionando, se não lança mensagem de erro
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        //             tranforma a data de string para um objeto date em um array, separado por '-'
        //            .map(function (item, indice) {
        //            if (indice == 1) { //date espera 0=janeiro, hmtl retorna 1= janeiro. para ser entendido o mes no date é necessário adequar diminuindo 1 á data
        //                return item - 1;}
        //            return item; })

    }
}
