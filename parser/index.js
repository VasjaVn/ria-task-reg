var RecordAddress = require('./../recordaddress').RecordAddress;

regExpDefault = /\s*(ул[.]?\s*[\d+\-а-яА-Я]*\s*[а-яА-Я]*|пр-т[.]?\s*[\d+\-а-яА-Я]*[.]?\s*[а-яА-Я]*),?\s*(дом)?\s*(\d+(\/\d+)?(-[а-яА-Я])?),?(\s*кв.\s*(\d+)\s*)?/;

function ParserAddress() {
    this.regExp = regExpDefault;
    this.street = "";
    this.house = "";
    this.flat = "";
}


ParserAddress.prototype.setRegExp = function( regExp ) {
    this.regExp = regExp;
}


ParserAddress.prototype.parse = function( address ) {
    var isParsed = true;

    this.street = "";
    this.house = "";
    this.flat = "";

    if ( this.regExp.exec( address ) != null ) {

        if ( RegExp.$1 != "" ) {
            this.street = RegExp.$1;
        }

        if ( RegExp.$3 != "" ) {
            if ( RegExp.$3.indexOf('/') != -1 ) {
                var arr = RegExp.$3.split('/');
                this.house = arr[0];
                this.flat = arr[1];
            } else {
                this.house = RegExp.$3;
            }
        }

        if ( RegExp.$7 != "") {
            this.flat = RegExp.$7;
        }

    } else {
        isParsed = false;
    }
    return isParsed;
}


ParserAddress.prototype.toObject = function() {
    return new RecordAddress( this.street, this.house, this.flat );
}


module.exports.ParserAddress = ParserAddress;