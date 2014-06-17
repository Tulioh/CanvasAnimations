var Creature = function() {
    var id = 0;
    var position = new Position();
    var direction;
    var healthPercent = 100;
    var speed = 200;
    var walking = false;
    var lastAnimationTime = new Timer();
    // the full animation outfit it's 4 id. The order is: South, North, East and West
    var outfit = new Outfit();
    
    this.walk = function( oldPos, newPos ) {
        if(oldPos == newPos)
            return;
        
        position = newPos;
        direction = oldPos.getDirectionFromPosition( newPos );
        walking = true;
        
        doWalkingAnimation( newPos );
    };
    
    this.doWalkingAnimation = function( direction ) {
        if( direction === DirectionConst.North ) {
            // 4, 5
        } else if( direction === DirectionConst.South ) {
            // 1, 2
        } else if( direction === DirectionConst.East ||
                direction === DirectionConst.NorthEast ||
                direction === DirectionConst.SouthEast ) {
            // 7, 8
        } else if( direction === DirectionConst.West ||
                direction === DirectionConst.SouthWest ||
                direction === DirectionConst.NorthWest ) {
            // 10, 11
        }
            
            
        if( lastAnimationTime.getTicksElapsed() > 250) {
            if (outfit.getCurrentFrame() !== 1) {
                outfit.setCurrentFrame(1);
            } else {
                outfit.setCurrentFrame(2);
            }

            lastAnimationTime.restart();
        }
    };
    
    // teste
    this.draw = function() {
        if( outfit.getCurrentFrame() == null )
            outfit.setCurrentFrame( 0 );
        
        if( this.isWalking() ) {           
            this.doWalkingAnimation;
        } else {
            outfit.setCurrentFrame( 0 );
        }
        
        Canvas.draw( outfit, this.position );
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