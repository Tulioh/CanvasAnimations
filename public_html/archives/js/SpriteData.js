var SpriteData = function() {
    
    this.init = function() {
        this.loadSpriteItems();
    };
    
    this.loadSpriteItems = function() {
        var data = JSON.parse( HttpHelper.doGET( "archives/json/SpriteData.json" ) );
        
        data.forEach(function( spriteData ){
            var item = new Item();
            item.setId( spriteData.id );
            
            var sprite = new Sprite();
            sprite.setImage( "archives/imgs/sprites-" + spriteData.image + ".png" );
            sprite.setPosX( spriteData.posX * 32 );
            sprite.setPosY( spriteData.posY * 32 );
            sprite.setWidth( spriteData.width );
            sprite.setHeight( spriteData.height );
            
            if( spriteData.animated == true ) {
                spriteData.frames.forEach(function( frame ){
                    var framePos = new Position();
                    framePos.x = frame.posX;
                    framePos.y = frame.posY;
                    sprite.addFrame( framePos );
                });
            } else {
                var framePos = new Position();
                framePos.x = spriteData.frames[0].posX;
                framePos.y = spriteData.frames[0].posY;
                sprite.addFrame( framePos );
            }
            
            item.setSprite( sprite );
            
            SpriteData.items.push( item );
        });
        
    };
    
    this.getItemById = function( id ) {
        for( var i = 0; i <= SpriteData.items.length; i++ ) {
            var item = SpriteData.items[i];
            if( item.getId() == id )
                return item;
        }
    };
};

SpriteData.items = [];
