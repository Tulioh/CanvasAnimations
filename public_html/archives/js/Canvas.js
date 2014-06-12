var Canvas = function() {
    Canvas.prototype.canvas;
    Canvas.prototype.context;
    
    this.init = function() {
        Canvas.prototype.canvas = document.getElementById("canvas");
        Canvas.prototype.context = this.getCanvas().getContext("2d");
        
        return this;
    };
    
    this.clearCanvas = function() {
        this.getContext().clearRect( 0, 0, canvas.width, canvas.height );
    };
    
    this.getCanvas = function() {
        return Canvas.prototype.canvas;
    };
    
    this.getContext = function() {
        return Canvas.prototype.context;
    };
};

Canvas.draw = function(sprite, position) {
    this.getContext().drawImage(
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