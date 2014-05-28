var Canvas = function() {
    this.context;
    
    this.init = function() {
        var canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
    };
    
    this.drawSpriteSheet = function(sprite, data) {
        
        this.context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }
};