(function ( $ ) {
 
    $.fn.darEstiloCaja = function() {
 	
        this.click(function() {
  		this.animate({
    			border: "1px solid black",
    			backgroundColor: "red",
    			boxShadow: "2px 2px 5px black",
    			width: "250px",
    			height: "500px"
    			
  		}, 1000, function() {
    
 		 });


	});
        
    };
 
}( jQuery ));