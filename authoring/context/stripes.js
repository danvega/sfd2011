(function( $ ){
	$.fn.stripes = function() {
    	
		var a = this.find("tr");
		var b = $("tr",this);
		
		console.log(this);
		console.log(a);
		console.log(b);
		
	};
})( jQuery );