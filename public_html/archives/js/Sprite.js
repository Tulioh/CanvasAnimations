var Sprite = function() {
    var image;
    var width;
    var height;
    var scaleFactor;
    var frames = [];
    var currentFrame;
    
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
    
    this.getScaleFactor = function() {
        return this.scaleFactor;
    };
    
    this.setScaleFactor = function( scaleFactor ) {
        this.scaleFactor = scaleFactor;
    };
    
    this.getFrames = function() {
        return frames;
    };
    
    this.addFrame = function( frame ) {
        frames.push( frame );
    };
    
    this.getCurrentFrame = function() {
        return this.currentFrame;
    };
    
    this.setCurrentFrame = function( currentFrame ) {
        this.currentFrame = currentFrame;
    };
};