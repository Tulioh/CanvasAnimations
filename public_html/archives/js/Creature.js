var Creature = function() {
    var position = new Position();
    var healthPercent = 100;
    var speed = 200;
    var walking = false;
    var direction;
    var outfit = [];
    
    this.walk = function(oldPos, newPos) {
        if(oldPos == newPos)
            return;
        
        walking = true;
        
        position = newPos;
    };
    
    // teste
    this.draw = function() {
        if( this.isWalking() )
            console.log("andando");
        else {
            var item = new SpriteData().getItemById( this.outfit[0] );
            
            var sprite = item.getSprite();
            sprite.setActualFrame( 0 );

            var canvas = new Canvas();
            canvas.init();
            
            canvas.getContext().drawImage(
                sprite.getImage(),
                sprite.getFrames()[ sprite.actualFrame ].x * 32,
                sprite.getFrames()[ sprite.actualFrame ].y * 32,
                sprite.getWidth(),
                sprite.getHeight(),
                this.position.x * 31,
                this.position.y * 30,
                sprite.getWidth(),
                sprite.getHeight()
            );
        }
    };
    
    this.getPosition = function() {
        return position;
    };
    
    this.setPosition = function( position ) {
        this.position = position;
    };
    
    this.getHealthPercent = function() {
        return healthPercent;
    };
    
    this.setHealthPercent = function( healthPercent ) {
        return this.healthPercent = healthPercent;
    };
    
    this.getSpeed = function() {
        return speed;
    };
    
    this.setSpeed = function( speed ) {
        return this.speed = speed;
    };
    
    this.isWalking = function() {
        return walking;
    };
    
    this.setWalking = function( walking ) {
        return this.walking = walking;
    };
    
    this.getDirection = function() {
        return direction;
    };
    
    this.setDirection = function( direction ) {
        if( direction != DirectionConst.InvalidDirection ) {
            this.direction = direction;
        }
    };
    
    this.getOutfit = function() {
        return outfit;
    };
    
    this.setOutfit = function( outfit ) {
        this.outfit = outfit;
    };
};