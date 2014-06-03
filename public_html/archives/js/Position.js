var Position = function() {
    this.x;
    this.y;
    this.z;
    
    this.getAngleFromPosition = function( position ) {
        return getAngleFromPositions( this, position );
    };
    
    this.getAngleFromPositions = function( fromPos, toPos ) {
        // Returns angle in radians from 0 to 2Pi. -1 means positions are equal.
        var dx = toPos.x - fromPos.x;
        var dy = toPos.y - fromPos.y;
        if(dx == 0 && dy == 0)
            return -1;

        var angle = Math.atan2( dy * -1, dx );
        if(angle < 0)
            angle += 2 * Math.PI;

        return angle;
    };
    
    this.getDirectionFromPosition = function( position ) {
        return getDirectionFromPositions(this, position);
    };
    
    this.getDirectionFromPositions = function( fromPos, toPos ) {
        var radToDec = ( 180.0 / Math.acos( -1 ) );
        var angle = getAngleFromPositions( fromPos, toPos ) * radToDec;

        if(angle >= 360 - 22.5 || angle < 0 + 22.5)
            return Direction.East;
        else if(angle >= 45 - 22.5 && angle < 45 + 22.5)
            return Direction.NorthEast;
        else if(angle >= 90 - 22.5 && angle < 90 + 22.5)
            return Direction.North;
        else if(angle >= 135 - 22.5 && angle < 135 + 22.5)
            return Direction.NorthWest;
        else if(angle >= 180 - 22.5 && angle < 180 + 22.5)
            return Direction.West;
        else if(angle >= 225 - 22.5 && angle < 225 + 22.5)
            return Direction.SouthWest;
        else if(angle >= 270 - 22.5 && angle < 270 + 22.5)
            return Direction.South;
        else if(angle >= 315 - 22.5 && angle < 315 + 22.5)
            return Direction.SouthEast;
        else
            return Direction.InvalidDirection;
    };
};