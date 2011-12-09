(function( $ ){
	$.fn.stripes = function() {
		
		this.find("tbody tr:odd").addClass('odd');
		
	};
})( jQuery )