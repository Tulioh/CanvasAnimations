var HttpHelper = function() {};

HttpHelper.doGET = function( URL ) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
};