var EventHandler = function() {
    
    this.handle = function() {
        handlePlayerEvents();
    };
    
    var handlePlayerEvents = function() {
        window.onkeydown = function( key ) {
            if( key.keyCode == KeysConst.UP ) {
                
            } else if( key.keyCode == KeysConst.DOWN ) {
                
            } else if( key.keyCode == KeysConst.LEFT ) {
                
            } else if( key.keyCode == KeysConst.RIGHT ) {
                
            }
        };
    };
};