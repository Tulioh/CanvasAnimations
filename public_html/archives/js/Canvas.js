var Canvas = function() {
    
    this.init = function() {
        Canvas.canvas= document.getElementById("canvas");
        Canvas.context = canvas.getContext("2d");
    };
    
    this.clearCanvas = function() {
        Canvas.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    };
    
    this.drawAt = function( sprite, position ) {
        Canvas.context.drawImage(
            sprite.getImage(),
            sprite.frames[ sprite.actualFrame ].x,
            sprite.frames[ sprite.actualFrame ].y,
            sprite.getWidth(),
            sprite.getHeight(),
            position.x,
            position.y,
            sprite.getWidth(),
            sprite.getHeight() );
    };
    
    this.getContext = function() {
        return Canvas.context;
    };
};

Canvas.canvas = null;
Canvas.context = null;