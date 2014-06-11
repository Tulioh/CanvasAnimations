var Canvas = function() {
    var canvas;
    var context;
    
    this.init = function() {
        if( canvas == null || context == null ) {
            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
        }
        
        return this;
    };
    
    this.draw = function( sprite, position ) {
        context.drawImage(
                sprite.getImage(),
                sprite.getFrames()[ sprite.getCurrentFrame() ].x * 32,
                sprite.getFrames()[ sprite.getCurrentFrame() ].y * 32,
                sprite.getWidth(),
                sprite.getHeight(),
                position.x * 32,
                position.y * 32,
                sprite.getWidth(),
                sprite.getHeight()
        );
    };
    
    this.clearCanvas = function() {
        context.clearRect( 0, 0, canvas.width, canvas.height );
    };
    
    this.getCanvas = function() {
        return canvas;
    };
    
    this.getContext = function() {
        return context;
    };
};