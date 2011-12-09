(function( $ ){
	$.fn.coolborders = function() {
	
		// border options
		var weights = ["1px","2px","3px","4px","5px"];
		var strokes = ["solid","dotted","dashed","double","groove"];
		var colors = ["red","blue","green","yellow","orange"];
		
		// build our random string border
		var randomBorder = weights[Math.floor(Math.random()*5)] + " " + strokes[Math.floor(Math.random()*5)] + " " + colors[Math.floor(Math.random()*5)];
		
		this.css('border',randomBorder);
	
	};
})( jQuery );