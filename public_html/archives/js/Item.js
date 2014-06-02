var Item = function() {
    var id;
    var sprite = new Sprite();
    var ground;
    var walkable;
    var stackable;
    var movable;
    var animated;
    
    this.getId = function() {
        return this.id;
    };
    
    this.setId = function( id ) {
        this.id = id;
    };
    
    this.getSprite = function() {
        return this.sprite;
    };
    
    this.setSprite = function( sprite ) {
        this.sprite = sprite;
    };
    
    this.isGround = function() {
        return this.ground;
    };
    
    this.setGround = function( type ) {
        this.isGround = type;
    };
    
    this.isWalkable = function() {
        return this.walkable;
    };
    
    this.setWalkable = function( type ) {
        this.walkable = type;
    };
    
    this.isStackable = function() {
        return this.stackable;
    };
    
    this.setStackable = function( type ) {
        this.stackable = type;
    };
    
    this.isMovable = function() {
        return this.movable;
    };
    
    this.setMovable = function( type ) {
        this.movable = type;
    };
    
    this.isAnimated = function() {
        return this.animated;
    };
    
    this.setAnimated = function( type ) {
        this.animated = type;
    };
 };