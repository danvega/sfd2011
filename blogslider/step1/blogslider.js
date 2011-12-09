/*
 * BlogSlider v 1.0 
 * 
 * Author: Daniel Vega
 * Description: Demo jQuery plugin
 */
(function( $ ){
	
	// PUBLIC FUNCTION ADDED TO THE jQuery.fn Object
	$.fn.blogslider = function( options ) {

		var timer = null,
			aboutEnabled = false,
			
			// override settings with passed parameters
			settings  = $.extend( {}, $.fn.blogslider.defaults, options ),
			
			blogs     = this.find( ".blog" ),
			menuItems = this.find( "#bsnavigation li"),
			hideme    = this.find( ".hideme" ),
			about     = this.find( ".about" );
		
		// show first blog
		blogs.first().addClass( "current" ).show();
		
		// add the active class to the first navigation item
		menuItems.first().addClass('active');
		
		
		return this;
	};
	
	$.fn.blogslider.defaults = {
		autoPlay: true,
		slideDelay: 3000
	};
		
	// PRIVATE METHODS
	function trace(o){
		if (this.console && typeof console.log != "undefined") {
			console.log(o);
		}
	}
	
})( jQuery );
