
//class contato

class contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );
    Enviar(data)
 
}

function Enviar(dados) {

     alert('Obrigado sr(a) ' + dados.nome + ' os seus dados foram encaminhados com sucesso');
   
    console.log(`Obrigado sr(a) ' ${dados.nome}' os seus dados foram encaminhados com sucesso ${JSON.stringify(dados)}`)

}

