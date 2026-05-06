let campos = [ // pega os valores inseridos em data, quantidade e valor
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];
//tr = linha da tabela // td == campo da tabela
console.log(campos); //exibe os valores preenchidos

let tbody = document.querySelector('table tbody'); // busca o valor de tbody
document.querySelector('.form').addEventListener('submit', function(event) { //pega os valores do formulario e ao adicionar o evento de submeter as informações quando alguem clicar no form
    event.preventDefault(); //não submeter o formulário, para que a pagina não reerregue e perca os valores
    let tr = document.createElement('tr'); //criando novo elemento

    campos.forEach(function(campo){ // para cada item(valor dos campos) ..
        let td = document.createElement('td'); //crie um elemento td
        td.textContent = campo.value; //dentro de TD guarde o valor do item
        tr.appendChild(td); //adiciona um filho(td) na tr
    });

    let tdVolume = document.createElement('td'); //  criando elemento TD para volume
    tdVolume.textContent = campos[1].value * campos[2].value; // o valor do volume armazenado sera o valor do campo[1] = quantidade * campo[2] = valor

    tr.appendChild(tdVolume)// adiciona tdVolume como filho de TR

    tbody.appendChild(tr); //adiciona TR como filho de tbody
    
    //para limpar o campo depois depois de utilizar e voltar para data
    campos[0].value = ''; //campo data fica vazio, para ser inserido novos valores
    campos[1].value = 1; //campo de quantidade fica em 1
    campos[2].value = 0; //campode valor fica em 0

    campos[0].focus; //foca na data depois de submeter valores
});
 //TOTAL do valor , data no formato de data dia mes e ano, negociaçoes não podem ser alteradas nem removidas. 



