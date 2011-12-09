(function( $ ){
	
	var methods = {
		
		init: function(options) {
			
			// default settings
			var settings = {
				odd: 'odd'	
			};
			
			// if a map was passed merge the 2
			if( options ) {
				$.extend(settings,options);
			}

			return this;
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
		
	// PRIVATE METHODS
	function _debug(obj){
		if (window.console && window.console.log) {
			console.log(obj);
		}
	};
	
})( jQuery )
