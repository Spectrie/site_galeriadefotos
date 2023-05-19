$(document).ready(function(){
    $('header  button').click(function(){
        $('form').slideDown()

        $('#cancel').click(function(){
            $('form').slideUp()
        })

    })
    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novaItem = $('<li style="display: none"> </li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novaItem);
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novaItem);
        $(novaItem).appendTo('ul');
        $(novaItem).fadeIn();
        $('#endereco-nova-imagem').val(' ');

    })
})