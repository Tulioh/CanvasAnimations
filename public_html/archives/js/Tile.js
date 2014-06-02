var Tile = function() {
    var item = new Item();
    var position = new Position();
    
    this.getItem = function() {
        return this.item;
    };
    
    this.setItem = function( item ) {
        this.item = item;
    };
    
    this.getPosition = function() {
        return this.position;
    };
    
    this.setPosition = function( position ) {
        this.position = position;
    };
};