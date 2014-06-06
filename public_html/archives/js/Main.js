function main() {
    var canvas = new Canvas();
    canvas.init();
    
    var spriteData = new SpriteData();
    spriteData.init();
    
    var map = new Map();
    map.init();
    map.drawMap();
    
    var eventHandler = new EventHandler();
    
    var gameLoop = function() {
        testeCreature();
        
        eventHandler.handle();
        window.requestAnimationFrame( gameLoop );
    };
    window.requestAnimationFrame( gameLoop );
    
    
}

function testeCreature() {
    var creature = new Creature();
    var p = new Position();
    p.x = 10;
    p.y = 5;
    
    creature.setPosition( p );
    creature.setHealthPercent( 100 );
    creature.setSpeed( 200 );
    creature.setOutfit( [ 1000, 1001, 1002, 1003 ] );
    
    window.onkeydown = function(key) {
        var newPos = new Position();
        var currentPos = creature.getPosition();
        console.log("up");
        if (key.keyCode == Keys.UP) {
            
            newPos.x = currentPos.x;
            newPos.y = currentPos.y + 1;
        } else if (key.keyCode == Keys.DOWN) {
            newPos.x = currentPos.x;
            newPos.y = currentPos.y - 1;
        } else if (key.keyCode == Keys.LEFT) {
            newPos.x = currentPos.x - 1;
            newPos.y = currentPos.y;
        } else if (key.keyCode == Keys.RIGHT) {
            newPos.x = currentPos.x + 1;
            newPos.y = currentPos.y;
        }
        
        creature.walk( currentPos, newPos );
    };
    
    
    creature.draw();
}