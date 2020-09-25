$(function(){
    'use strict';
    $('header img').css({'width':'100px'});
    $('header h1').css({
        'color':'orange',
        'text-transform':'uppercase'
    });

    
    function changecolor(){
        $('nav.menu').css({'bacjground-color':'red'});
    }

    function defaultcolor(){
        $('nav.menu').css({'bacjground-color':'white'});
    }

    $('nav.menu').on('mouseenter', changecolor);
    $('nav.menu').on('mouseleave', defaultcolor);


});

