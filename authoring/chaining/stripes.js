// return this to maintain chainability 
(function( $ ){
	$.fn.stripes = function() {
    	
		this.find("tbody tr:odd").addClass('odd');
	
		//return this;
	};
})( jQuery );

