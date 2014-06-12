var Outfit = function() {
    var sprite = [];
    
    this.getSpriteNorth = function() {
        return getSpriteByIndex( 1 );
    };
    
    this.getSpriteSouth = function() {
        return getSpriteByIndex( 0 );
    };
    
    this.getSpriteEast = function() {
        return getSpriteByIndex( 2 );
    };
    
    this.getSpriteWest = function() {
        return getSpriteByIndex( 3 );
    };
    
    var getSpriteByIndex = function( index ) {
        return sprite[ index ];
    };
    
    this.addSprite = function( sprite ) {
        sprite.push( sprite );
    };
};