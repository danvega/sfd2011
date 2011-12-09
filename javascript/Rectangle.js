function Rectangle(w,h){
	this.width = w;
	this.height = h;
}

Rectangle.prototype.area = function(){
	return this.width * this.height;
}
