
function enviarPeticion(path,parametros,callback){
    
    var auxURL = 'http://'+PARAMETROS.url_peticion+'/OpenKuspit/ok/'+path+'?'+parametros;
    
    $.ajax({
        url: auxURL
    }).success(function(response) {
        callback(new compraInstrumentosFI(jQuery.parseJSON(response)));
    }).fail(function(xhr) {
        var json = jQuery.parseJSON(xhr.responseText);
        callback(new errorResponse(xhr.status, json.error.message, json.error.code));
    });
}




    

    
   