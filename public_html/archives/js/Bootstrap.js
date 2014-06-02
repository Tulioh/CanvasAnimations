document.write('<script type="text/javascript" src="archives/js/Canvas.js"></script>');
document.write('<script type="text/javascript" src="archives/js/Sprite.js"></script>');
document.write('<script type="text/javascript" src="archives/js/Position.js"></script>');
document.write('<script type="text/javascript" src="archives/js/SpriteData.js"></script>');
document.write('<script type="text/javascript" src="archives/js/Tile.js"></script>');
document.write('<script type="text/javascript" src="archives/js/Item.js"></script>');
document.write('<script type="text/javascript" src="archives/js/Map.js"></script>');
document.write('<script type="text/javascript" src="archives/js/HttpHelper.js"></script>');

function main() {
    var canvas = new Canvas();
    canvas.init();
    
    var spriteData = new SpriteData();
    spriteData.init();
    
    var map = new Map();
    map.init();
    map.drawMap();
}