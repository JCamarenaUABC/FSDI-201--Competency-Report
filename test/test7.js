$(function(){
    'use strinct';

    var Services=['Nails','Shower','Full Services','Gold Services'];
    
    console.log(Services);


    $.each(Services, function(i,v){
        if(i==0){
            $('#services').append('<h3>Services</h3>')
        }

        $('#services').append(`<li>${v}</li>`);
        
    } );

});