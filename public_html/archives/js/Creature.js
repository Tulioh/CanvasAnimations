var Creature = function() {
    var healthPercent = 100;
    var speed = 200;
    var outfitFrame = [];
    
    this.walk = function(oldPos, newPos) {
        if(oldPos == newPos)
            return;
        
        lastDirection = oldPos.getDirectionFromPosition( newPos );
        
    };
    
    this.getHealthPercent = function() {
        return healthPercent;
    };
    
    this.setHealthPercent = function( healthPercent ) {
        return this.healthPercent = healthPercent;
    };
    
    this.getSpeed = function() {
        return speed;
    };
    
    this.setSpeed = function( speed ) {
        return this.speed = speed;
    };
    
    this.getOutfitFrame = function() {
        return outfitFrame;
    };
    
    this.setOutfitFrame = function( speed ) {
        return this.outfitFrame = outfitFrame;
    };
};