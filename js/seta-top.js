$( window ).scroll(function() {
    nScrollPosition = $( window ).scrollTop();
    if(nScrollPosition>=500){
         $( ".set-fix" ).css( "display", "block" );
    }else{
         $( ".set-fix" ).css( "display", "none" );
    }
});// JavaScript Document