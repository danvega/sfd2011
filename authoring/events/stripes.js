(function( $ ){
	
	var methods = {
		
		init: function(options) {
			$(window).bind('mouseover.stripes', methods.onMouseOver);
			return this;
		},
		
		onMouseOver : function(){
			console.log("onMouseOver");
		},
		
		destroy : function(){
			console.log("destory");
			$(window).unbind('mouseover.stripes');
		}
	};
	
	$.fn.stripes = function( method ) {

		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist.' );
		}  
				
	};
	
})( jQuery )