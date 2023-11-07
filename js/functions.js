$(function(){

    /*alert('ola mundo');*/

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 2000;
    
    //Fazer apenas a primeira imagem aparecer de acordo com spans que acompanharão a quantidade de imagens
    initSlider();

    function initSlider(){

        /*Spans adicionados dinamicamente*/
        for(var i = 0; i < indiceMaximo; i++){
            if( i ==  0){
                $('.bullets-nav').append('<span style="background-color: black;"></span>');
            }else{
                $('.bullets-nav').append('<span></span>');
            }
        };


        $('.slider img').eq(0).fadeIn();

        setInterval(function(){
            alterarSlider();
        },2000);
    }

    //função para alterar a cor do span de acordo com a mudança de imagens
    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).fadeOut();
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).fadeIn();
            $('.bullets-nav span').css('background-color','#ccc');
            $(this).css('background-color','black');
        });
    }


    //Alteração das imagens
    function alterarSlider(){
        $('.slider img').eq(indiceAtual).fadeOut();
        indiceAtual += 1;
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0;
        }

        $('.bullets-nav span').css('background-color','#ccc');
        $('.bullets-nav span').eq(indiceAtual).css('background-color','black');

        $('.slider img').eq(indiceAtual).fadeIn();

    };


    

    
   






});