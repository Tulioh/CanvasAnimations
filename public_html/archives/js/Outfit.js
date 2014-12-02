var Outfit = function() {
    var sprite = [];
    
    this.getIdleSpriteNorth = function() {
        return getSpriteByIndex( 3 );
    };
    
    this.getIdleSpriteSouth = function() {
        return getSpriteByIndex( 0 );
    };
    
    this.getIdleSpriteEast = function() {
        return getSpriteByIndex( 6 );
    };
    
    this.getIdleSpriteWest = function() {
        return getSpriteByIndex( 9 );
    };
    
    var getSpriteByIndex = function( index ) {
        return sprite[ index ];
    };
    
    this.addSprite = function( sprite ) {
        sprite.push( sprite );
    };
};