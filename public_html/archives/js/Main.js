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
    
    creature.setId( 1 );
    creature.setPosition( p );
    creature.setHealthPercent( 100 );
    creature.setSpeed( 200 );
    creature.setOutfit( [ 1000, 1001, 1002, 1003 ] );
    creature.setWalking( true )
    
    creature.draw();
}