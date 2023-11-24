$(document).ready(function() {

    //função para o menu scroll
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    });


    //função para mudança de select de acordo como link selecionado
    $('nav a').click(function () {
        // Remover a classe 'select' de todos os links
        $('nav a').removeClass('select');

        // Adicionar a classe 'select' ao link clicado
        $(this).addClass('select');

        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({ 'scrollTop': offSetTop });

        return false;
    });

});