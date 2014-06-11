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
    creature.setOutfit( [ 1000, 1001, 1002, 1003 ] );
    creature.setWalking( true );
    
    creature.draw();
}