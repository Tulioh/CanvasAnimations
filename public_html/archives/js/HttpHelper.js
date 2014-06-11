var HttpHelper = {
    
    getJSON: function( URL ) {
        return JSON.parse( HttpHelper.doGET( URL ) );
    },
    
    doGET: function( URL ) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", URL, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    
};