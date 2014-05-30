var Sprite = function() {
    this.id;
    this.image;
    this.posX;
    this.posY;
    this.width;
    this.height;
    
    this.getImage = function() {
        return this.image;
    };
    
    this.setImage = function( image ) {
        this.image = image;
    };
    
    this.getId = function() {
        return this.id;
    };
    
    this.setId = function( id ) {
        this.image = id;
    };
    
    this.getPosX = function() {
        return this.posX;
    };
    
    this.setPosX = function( posX ) {
        this.image = posX;
    };
    
    this.getPosY = function() {
        return this.posY;
    };
    
    this.setPosY = function( posY ) {
        this.image = posY;
    };
    
    this.getWidth = function() {
        return this.width;
    };
    
    this.setWidth = function( width ) {
        this.image = width;
    };
    
    this.getHeight = function() {
        return this.height;
    };
    
    this.setHeight = function( height ) {
        this.image = height;
    };
 };