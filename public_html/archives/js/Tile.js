var Tile = function() {
    var item = new Item();
    var position = new Position();
    
    this.getItem = function() {
        return item;
    };
    
    this.setItem = function( param ) {
        item = param;
    };
    
    this.getPosition = function() {
        return this.position;
    };
    
    this.setPosition = function( position ) {
        this.position = position;
    };
};