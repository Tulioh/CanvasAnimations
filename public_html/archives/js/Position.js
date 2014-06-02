var Position = function() {
    var x = x;
    var y = y;
    var z = z;
    
    this.getX = function() {
        return this.x * 32;
    };
    
    this.setX = function( x ) {
        this.x = x;
    };
    
    this.getY = function() {
        return this.y * 32;
    };
    
    this.setY = function( y ) {
        this.y = y;
    };
    
    this.getZ = function() {
        return this.z;
    };
    
    this.setZ = function( z ) {
        this.z = z;
    };
};