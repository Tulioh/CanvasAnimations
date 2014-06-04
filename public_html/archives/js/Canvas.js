var Canvas = function() {
    var canvas = null;
    var context = null;
    
    this.init = function() {
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
    };
    
    this.clearCanvas = function() {
        context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    };
    
    this.getContext = function() {
        return context;
    };
};