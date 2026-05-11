MVC - Model View Controller
as açoes do usuário são interceptadas por um controller, que altera o dado(model),
a view se atualiza para exibir os dados mais atualizados

modelo de negocio precisa estar claro, tudo que é feito em uma negociação na vida real precisar ser possivel no codigo

class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
} geralmente

sem o static chama pelo new 
let conversor = new ConversorXML();
com o static chama diretamente pela classe
ConversorXML.converte({nome: 'Guaraci', idade: 40});