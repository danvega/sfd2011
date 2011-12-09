(function( $ ){
	
	$.fn.stripes = function( options ) {
		
		var settings = $.extend({},$.fn.stripes.defaults,options);
			
		this.find("tbody tr:odd").addClass(settings.odd);
		
		return this;			
	};
	
	$.fn.stripes.defaults = {
		odd: 'yellow'
	};
	
})( jQuery )