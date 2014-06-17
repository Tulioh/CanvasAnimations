var creature;

function main() {
    var canvas = new Canvas();
    canvas.init();
    
    var spriteData = new SpriteData();
    spriteData.init();
    
    var map = new Map();
    map.init();
    
    var eventHandler = new EventHandler();
    
    creature = new Creature();
    
    var gameLoop = function() {
        map.drawMap();
        testeCreature();
        
        eventHandler.handle();
        
        
        window.requestAnimationFrame( gameLoop );
    };
    
    window.requestAnimationFrame( gameLoop );
}

function testeCreature() {
    creature.setId( 1 );
    creature.setPosition( new Position( 10, 5, 7 ) );
    creature.setHealthPercent( 100 );
    creature.setSpeed( 200 );
    
    var item = new SpriteData().getItemById( 1000 );
    var sprite = item.getSprite();
    
    creature.setOutfit( sprite );
    creature.setWalking( true );
    
    creature.draw();
}

window.onkeydown = function(key) {
    var oldPos = creature.getPosition();
    var newPos = oldPos;
    
    switch( key.keyCode ) {
        case KeysConst.UP:
            newPos.y = newPos.y + 1;
            break;
        case KeysConst.DOWN:
            newPos.y = newPos.y - 1;
            break;
        case KeysConst.LEFT:
            newPos.x = newPos.x - 1;
            break;
        case KeysConst.RIGHT:
            newPos.x = newPos.x + 1;
            break;
        default:
            
    }
    
    creature.walk( oldPos, newPos );
};