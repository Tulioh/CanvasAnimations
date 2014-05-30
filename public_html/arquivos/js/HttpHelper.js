var HttpHelper = function() {
    
    /*this.POST = function( URL, params ) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", URL, false );
        xmlHttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xmlHttp.send( params );
        return xmlHttp.responseText;
    };*/
    
};

HttpHelper.GET = function( URL ) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
};