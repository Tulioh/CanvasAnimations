loadScript( "Canvas" );
loadScript( "Sprite" );
loadScript( "SpriteData" );
loadScript( "Position" );
loadScript( "Tile" );
loadScript( "Item" );
loadScript( "Map" );
loadScript( "Creature" );
loadScript( "HttpHelper" );
loadScript( "const/Direction" );

function loadScript( path ) {
    document.write(
        '<script type="text/javascript" src="archives/js/'+ path +'.js"></script>' );
}