var SpriteData = function() {

    this.getSpriteData = function() {
        SpriteData.data = JSON.parse( HttpHelper.GET( "arquivos/json/SpriteData.json" ) );
    };
    
    this.getData = function() {
        return SpriteData.data;
    };
    
    this.loadSpriteItems = function() {
        this.getSpriteData();
        
        for( var i = 0; i <= SpriteData.data.length; i++ ) {
            var sprite = new Sprite();
            sprite.setId( SpriteData.data[i].id );
            sprite.setImage( "arquivos/imgs/sprites-" + SpriteData.data[i].image );
            sprite.setPosX( SpriteData.data[i].posX * 32 );
            sprite.setPosY( SpriteData.data[i].posY * 32 );
            sprite.setWidth( SpriteData.data[i].width );
            sprite.setHeight( SpriteData.data[i].height );
            
            SpriteData.items[i] = sprite;
        }
        
    };
};

SpriteData.data = null;
SpriteData.items = null;
