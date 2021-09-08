$( "p" ).on( "myCustomEvent", function( event, fname, lname ) {
    $( this ).text( myName + ", hi there!" );
    $( "span" )
      .stop()
      .css( "opacity", 1 )
      .text( fname + " " + lname )
      .fadeIn( 30 )
      .fadeOut( 1000 );
});

$( "button" ).click(function() {
    $( "p" ).trigger("myCustomEvent", "fname", "lname");
});