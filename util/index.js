
function convertAddressToObject( parser, address ) {
    var object = null;

    if ( parser.parse( address ) ) {
        object = parser.toObject();
    }
    return object;
}

function selectAddressesAndConvertToObjects( parser, addresses ) {
    var result = [];

    for ( var index = 0; index < addresses.length; index++ ) {
        if ( obj = convertAddressToObject( parser, addresses[index]) ) { result[index] = obj; }
    }
    return result;
}

module.exports.selectAddressesAndConvertToObjects = selectAddressesAndConvertToObjects;
