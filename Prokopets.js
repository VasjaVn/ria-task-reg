var viewer = require('./viewer'),
    parser = require('./parser'),
    util = require('./util');

var addresses = require('./addresses').join('\n').split('\n');

var regExp = /\s*(ул[.]?\s*[\d+\-а-яА-Я]*\s*[а-яА-Я]*|пр-т[.]?\s*[\d+\-а-яА-Я]*[.]?\s*[а-яА-Я]*),?\s*(дом)?\s*(\d+(\/\d+)?(-[а-яА-Я])?),?(\s*кв.\s*(\d+)\s*)?/;

var parser = new parser.ParserAddress();
parser.setRegExp( regExp );

var result = util.selectAddressesAndConvertToObjects( parser, addresses );

var viewer = new viewer.Viewer();
viewer.setData( result );
viewer.showInFormat( "json" );
//viewer.showInFormat( "xml" );
//viewer.showInFormat( "adrakatabra" );

module.exports = result;








