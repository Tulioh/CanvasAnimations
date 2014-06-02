var Sprite = function() {
    var image;
    var width;
    var height;
    var frames;
    
    this.getImage = function() {
        return this.image;
    };
    
    this.setImage = function( imgSrc ) {
        var img = new Image();
        img.src = imgSrc;
        this.image = img;
    };
    
    this.getPosX = function() {
        return this.posX;
    };
    
    this.setPosX = function( posX ) {
        this.posX = posX;
    };
    
    this.getPosY = function() {
        return this.posY;
    };
    
    this.setPosY = function( posY ) {
        this.posY = posY;
    };
    
    this.getWidth = function() {
        return this.width;
    };
    
    this.setWidth = function( width ) {
        this.width = width;
    };
    
    this.getHeight = function() {
        return this.height;
    };
    
    this.setHeight = function( height ) {
        this.height = height;
    };
    
    this.getFrames = function() {
        return this.frames;
    };
    
    this.addFrame = function( frame ) {
        this.frames.push( frame );
    };
};