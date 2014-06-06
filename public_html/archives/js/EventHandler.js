var EventHandler = function() {
    var localPlayer = new LocalPlayer();
    
    this.handle = function() {
        handlePlayerEvents();
    };
    
    var handlePlayerEvents = function() {
        window.onkeydown = function(key) {
            if (key.keyCode == KeysConst.UP) {
                var pos = new Position();
                pos.x = 0;
                pos.y = 1;
            } else if (key.keyCode == KeysConst.DOWN) {
                var pos = new Position();
                pos.x = 0;
                pos.y = -1;
            } else if (key.keyCode == KeysConst.LEFT) {
                var pos = new Position();
                pos.x = -1;
                pos.y = 0;
            } else if (key.keyCode == KeysConst.RIGHT) {
                var pos = new Position();
                pos.x = +1;
                pos.y = 0;
            }
        };
    };
};