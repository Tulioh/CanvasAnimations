var Map = function() {   
    var width;
    var height;
    var templeX;
    var templeY;
    var templeZ;
    var tiles = [];
    var creatures = [];
    
    var canvas = new Canvas();
    canvas.init();
    
    this.init = function() {
        parseJsonMap();
        
        return this;
    };
    
    this.drawMap = function() {
        tiles.forEach(function( tile ) {
            drawTile( tile );
        });
    };
    
    function drawTile( tile ) {
        var sprite = tile.getItem().getSprite();
        var position = tile.getPosition();
        
        Canvas.draw( sprite, position );
    };
    
    var parseJsonMap = function() {
        var jsonMap = HttpHelper.getJSON( "archives/json/Map.json" );
        
        this.width = jsonMap.width;
        this.height = jsonMap.height;
        this.templeX = jsonMap.templeX;
        this.templeY = jsonMap.templeY;
        this.templeZ = jsonMap.templeZ;
        
        jsonMap.tiles.forEach(function( tileData ){
            var position = new Position();
            position.x = tileData.x;
            position.y = tileData.y;
            position.z = tileData.z;
            
            var spriteData = new SpriteData();
            var item = spriteData.getItemById( tileData.id );
            
            var tile = new Tile();
            tile.setItem( item );
            tile.setPosition( position );
            
            tiles.push( tile );
        });
    };
    
    this.getWidth = function() {
        return this.width;
    };
    
    this.getHeight = function() {
        return this.height;
    };
    
    this.getTempleX = function() {
        return this.templeX;
    };
    
    this.getTempleY = function() {
        return this.templeY;
    };
    
    this.getTempleZ = function() {
        return this.templeZ;
    };
    
    this.getTiles = function() {
        return this.tiles;
    };
    
    this.getCreatureById = function( id ) {
        for( var i = 0; i <= creatures.length; i++ ) {
            if( creatures[i].getId == id )
                return creatures[i];
        }
    };
};