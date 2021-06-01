function botaoPesquisar() {
    var cnpj = $('#cnpj').val();
    $.ajax({
        url: "https://brasilapi.com.br/api/cnpj/v1/" + cnpj
    }).then(data => preencherCampos(data));
}

function preencherCampos(data) {
    $('#numeroCnpj').text(data.cnpj);
    $('#razaoSocial').text(data.razao_social);
    $('#nomeFantasia').text(data.nome_fantasia);
    $('#situacaoCadastral').text(data.descricao_situacao_cadastral);
    //$('#conteudo').html(`<p>Cidade: ${data.city}</p> <p>Estado: ${data.state}</p>`);
}