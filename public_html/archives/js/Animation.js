var Animation = function() {
    var lastAnimationTime = new Timer();
    
    this.creatureWalk = function( sprite, animationLength ) {
        var currentAnimationTime = new Timer();
        
        if( lastAnimationTime == null )
            lastAnimationTime = currentAnimationTime;
        
        if( lastAnimationTime.getTicksElapsed() > animationLength ) {
            if( sprite.getCurrentFrame() != 1 ) {
                sprite.setCurrentFrame( 1 )
            } else {
                sprite.setCurrentFrame( 2 )
            }
        }
        
        lastAnimationTime = currentAnimationTime;
    };
};