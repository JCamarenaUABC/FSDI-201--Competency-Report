$(function(){

    'use strict';
    console.log('ready');

    $('nav a:last').hide();
    $('main').hide();
    $('main').show();
    
    /*var copy=$("main").clone();
    $("main").append(copy);
    $("header").append(copy);
*/
    $("h1").html("Hello!!");
    var text=`<ul><li>Hello</li?</ul>`;
    $("petSection").append("text");


    $('h1').on('click',function(){
        console.log("Click");
        $(this).addClass("border");
    });

    $('h1').on('mouseenter',function(){
        console.log("Enter Mouse");
    });

    $('h1').on('mouseleave',function(){
        console.log("Enter Leave");
    });


    var elementos = `<ul><li>1x</li><li>2</li><li>3</li></ul>`;
    $("petSection").append(elementos);


    $("petSection").html("<ol></ol>");
    for(var i=0;i<3; i++){
        var li=$("<li></li>").text("Elementx "+1);
        $('ol').append(li);
    }

});