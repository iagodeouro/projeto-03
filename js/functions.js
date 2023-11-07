$(function(){

    //Script da sessão de slides

    /*alert('funcionando');*/

    var delay = 3000;
    var curIndex = 0;
    var amt;

    //chamando função de overflow

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.equipe-single').length;
        var sizeContainer = 100 * amt;
        var sizeBoxsingle = 100 / amt;
        $('.equipe-single').css('width',sizeBoxsingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');
        
        //adicionando os spans dinamicamente
        for (var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
            else
                $('.slider-bullets').append('<span></span>');
        }


    }

    //função para os slides passarem automaticamente
    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if (curIndex === amt) {
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, delay);
    }
    


    function goToSlider(curIndex){
        var offSetX = $('.equipe-single').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(150,150,150)');
        $('.scrollEquipe').animate({'scrollLeft':offSetX});
    }
   

    


    

    
   






});