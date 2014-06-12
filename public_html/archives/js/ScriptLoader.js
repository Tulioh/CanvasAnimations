loadScript( "Canvas" );
loadScript( "Sprite" );
loadScript( "SpriteData" );
loadScript( "Position" );
loadScript( "Tile" );
loadScript( "Item" );
loadScript( "Map" );
loadScript( "LocalPlayer" );
loadScript( "Creature" );
loadScript( "Outfit" );
loadScript( "HttpHelper" );
loadScript( "EventHandler" );
loadScript( "const/Direction" );
loadScript( "const/Keys" );
loadScript( "framework/Timer" );

function loadScript( path ) {
    document.write(
        '<script type="text/javascript" src="archives/js/'+ path +'.js"></script>' );
}