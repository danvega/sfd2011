(function( $ ){
	
	var methods = {
		init: function(options) {
			this.find("tbody tr:odd").addClass('odd');
			return this;
		},
		clear : function(){
			this.find("tbody tr:odd").removeClass('odd');
		},
		add : function(){
			this.find("tbody tr:odd").addClass('odd');
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