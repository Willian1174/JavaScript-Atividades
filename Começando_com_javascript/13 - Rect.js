function rect(width, height){

this.width = width
this.height = height

rect.prototype.area = function(){

return this.width * this.height
}

rect.prototype.perimeter = function(){

return 2 * (2 * this.width) + (2 * this.height)
}

rect.prototype.perimeter = function(){

return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))
}

}