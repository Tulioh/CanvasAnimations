var Creature = function() {
    var id = 0;
    var position = new Position();
    var healthPercent = 100;
    var speed = 200;
    var walking = false;
    var direction;
    var lastAnimationTime = new Timer();
    var outfit = [];
    
    this.walk = function( oldPos, newPos ) {
        if(oldPos == newPos)
            return;
        
        walking = true;
        
        position = newPos;
    };
    
    this.doWalkingAnimation = function( newPosition ) {
        position.add( newPosition );
        walking = true;
    };
    
    // teste
    this.draw = function() {
        var item = new SpriteData().getItemById( this.outfit[0] );
        var sprite = item.getSprite();
        
        if( sprite.getCurrentFrame() == null )
            sprite.setCurrentFrame( 0 );
        
        if( this.isWalking() ) {           
            
            if( lastAnimationTime.getTicksElapsed() > 500 ) {                
                if( sprite.getCurrentFrame() !== 1) {
                    sprite.setCurrentFrame(1);
                } else {
                    sprite.setCurrentFrame(2);
                }

                lastAnimationTime.restart();
            }
            
        } else {
            sprite.setCurrentFrame( 0 );
        }
        
        var canvas = new Canvas();
        canvas.init();
        canvas.draw( sprite, this.position );
    };
    
    this.getId = function() {
        return id;
    };
    
    this.setId = function( id ) {
        this.id = id;
    };
    
    this.getPosition = function() {
        return this.position;
    };
    
    this.setPosition = function( position ) {
        this.position = position;
    };
    
    this.getHealthPercent = function() {
        return this.healthPercent;
    };
    
    this.setHealthPercent = function( healthPercent ) {
        this.healthPercent = healthPercent;
    };
    
    this.getSpeed = function() {
        return this.speed;
    };
    
    this.setSpeed = function( speed ) {
        this.speed = speed;
    };
    
    this.isWalking = function() {
        return this.walking;
    };
    
    this.setWalking = function( walking ) {
        this.walking = walking;
    };
    
    this.getDirection = function() {
        return this.direction;
    };
    
    this.setDirection = function( direction ) {
        if( direction != DirectionConst.InvalidDirection ) {
            this.direction = direction;
        }
    };
    
    this.getOutfit = function() {
        return this.outfit;
    };
    
    this.setOutfit = function( outfit ) {
        this.outfit = outfit;
    };
    
    this.getOutfitByDirection = function( direction ) {
        if( direction == Direction.South ) {
            return outfit[0];
        } else if( direction == Direction.North ) {
            return outfit[1];
        } else if( direction == Direction.East ) {
            return outfit[2];
        } else if( direction == Direction.West ) {
            return outfit[3];
        }
    };
};