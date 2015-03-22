
function Viewer() {
    this.data = "";
    this.json = "";
    this.xml = "";
    this.txt = "";
}

Viewer.prototype.setData = function( data ) {
    this.data = data;
    this.json = "";
    this.xml = "";
    this.txt = "";
}

Viewer.prototype.createJSON = function() {

    for ( var key in this.data ) {
        this.json +=  key +
                      ': {\n ' +
                      '\t"street": "' + this.data[key].street +'"\n' +
                      '\t"house": "' + this.data[key].house + '"\n' +
                      '\t"flat": "' + this.data[key].flat + '"\n' +
                      '}\n';
    }
}

Viewer.prototype.showJSON = function() {

    if ( this.json === "" ) { this.createJSON(); }
    console.log( this.json );
}

Viewer.prototype.getJSON = function() {

    if ( this.json === "" ) { this.createJSON(); }
    return this.json;
}

Viewer.prototype.createXML = function() {

    for ( var key in this.data ) {
        this.xml +=  key +
                     ':\n<address>\n' +
                     '\t<street>' + this.data[key].street +'</street>\n' +
                     '\t<house>' + this.data[key].house + '</house>\n' +
                     '\t<flat>' + this.data[key].flat + '</flat>\n' +
                     '</address>\n\n';
    }
}

Viewer.prototype.showXML = function() {

    if ( this.xml === "" ) { this.createXML(); }
    console.log( this.xml );
}

Viewer.prototype.getTXT = function() {

    if ( this.txt === "" ) { this.createTXT(); }
    return this.txt;
}


Viewer.prototype.createTXT = function() {

    for ( var key in this.data ) {
        this.txt +=  key + ": " + this.data[key].street + " " + this.data[key].house + " " + this.data[key].flat + "\n";
    }
}


Viewer.prototype.showTXT = function() {

    if ( this.txt === "" ) { this.createTXT(); }
    console.log( this.txt );
}


Viewer.prototype.getTXT = function() {

    if ( this.txt === "" ) { this.createTXT(); }
    return this.txt;
}


Viewer.prototype.showInFormat = function( format ) {

    switch ( format ) {
        case "json":
            this.showJSON();
            break;

        case "xml":
            this.showXML();
            break;

        default:
            this.showTXT();
            break;
    }
}

module.exports.Viewer = Viewer;
