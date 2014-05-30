document.write('<script type="text/javascript" src="arquivos/js/Canvas.js"></script>');
document.write('<script type="text/javascript" src="arquivos/js/Sprite.js"></script>');
document.write('<script type="text/javascript" src="arquivos/js/Position.js"></script>');
document.write('<script type="text/javascript" src="arquivos/js/SpriteData.js"></script>');
document.write('<script type="text/javascript" src="arquivos/js/HttpHelper.js"></script>');

function main() {
    var canvas = new Canvas();
    canvas.init();
    
    var spriteData = new SpriteData();
    spriteData.loadSpriteItems();
    
    var img = new Image();
    img.src = "arquivos/imgs/sprites-01.png";
    img.onload = function() {
        var sprite1 = new Sprite( img, 3, 1, 32, 32 );
        var posImg = new Position( 10, 20 );

        canvas.drawAt( sprite1, posImg );
    };
    
    canvas.clearCanvas();
}