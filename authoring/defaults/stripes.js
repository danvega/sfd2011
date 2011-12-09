(function( $ ){
	$.fn.stripes = function( options ) {
		
		// defaults
		var settings = $.extend({odd:'odd'},options);
					
		this.find("tbody tr:odd").addClass(settings.odd);
		
		return this;			
	};
})( jQuery )