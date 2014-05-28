var Canvas = function() {

    this.init = function() {
        this.canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
    };
    
    this.clearCanvas = function() {
        this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    };
    
    this.drawAt = function( sprite, position ) {
        this.context.drawImage(
            sprite.img, sprite.posX,
            sprite.posY, sprite.width,
            sprite.height, position.x,
            position.y, sprite.width, sprite.height);
    };
    
    this.getContext = function() {
        return this.context;
    };
};

Canvas.prototype = {
    canvas: null,
    context: null
};