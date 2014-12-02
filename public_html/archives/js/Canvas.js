var Canvas = function() {
    Canvas.prototype.canvas;
    Canvas.prototype.context;
    
    this.init = function() {
        Canvas.prototype.canvas = document.getElementById("canvas");
        Canvas.prototype.context = this.getCanvas().getContext("2d");
        
        return this;
    };
    
    this.clearCanvas = function() {
        this.prototype.context.clearRect( 0, 0, this.prototype.canvas.width, this.prototype.canvas.height );
    };
    
    this.copyImageData = function( image, rect ) {
        this.prototype.context.drawImage( image, 0, 0);
        this.prototype.context.getImageData( rect.x, rect.y, rect.width, rect.height );
        this.clearCanvas;
    };
    
    this.getCanvas = function() {
        return Canvas.prototype.canvas;
    };
    
    this.getContext = function() {
        return Canvas.prototype.context;
    };
};

Canvas.draw = function(sprite, position) {
    this.prototype.context.drawImage(
            sprite.getImage(),
            sprite.getFrames()[ sprite.getCurrentFrame() ].x * 32,
            sprite.getFrames()[ sprite.getCurrentFrame() ].y * 32,
            sprite.getWidth(),
            sprite.getHeight(),
            position.x * sprite.get,
            position.y * 32,
            sprite.getWidth(),
            sprite.getHeight()
            );
};