var Sprite = function() {
    var image;
    var width;
    var height;
    var frames = [];
    var actualFrame;
    
    this.getImage = function() {
        return this.image;
    };
    
    this.setImage = function( imgSrc ) {
        var img = new Image();
        img.src = imgSrc;
        this.image = img;
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
        return frames;
    };
    
    this.addFrame = function( frame ) {
        frames.push( frame );
    };
    
    this.getActualFrame = function() {
        return this.actualFrame;
    };
    
    this.setActualFrame = function( actualFrame ) {
        this.actualFrame = actualFrame;
    };
};