/*
 *
 */

function errorResponse(status, message, code) {
    this.status = status;
    this.message = message;
    this.code = code;
}

function compraInstrumentosFI(obj) {
    
    var auxObj = []; 
    
    jQuery.each( obj, function( index, value ) {     
        auxObj.push( { 
            tipoValor           : obj[index].tipoValor,
            emisora             : obj[index].emisora,
            porcentajeActual    : obj[index].porcentajeActual,
            precio              : obj[index].precio,
            tipoSociedad        : obj[index].tipoSociedad
        });
    });
    
    this.objCompraInstrumentosFI = auxObj;
}