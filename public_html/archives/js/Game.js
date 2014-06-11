var Game = function() { 
    var running = false;
    
    this.run = function() {
        running = true;
        
        
        window.requestAnimationFrame( gameLoop );
    };
    
    this.update = function() {
        
    };
    
    this.draw = function() {
        
    };
};