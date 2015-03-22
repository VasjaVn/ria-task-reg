
function RecordAddress( street, house, flat ) {
    this.street = street;
    this.house = house;
    this.flat = flat;
}

RecordAddress.prototype.toJsonFormat = function() {
    return '{\n ' +
                '\t"street": "' + this.street +'"\n' +
                '\t"house": "' + this.house + '"\n' +
                '\t"flat": "' + this.flat + '"\n' +
           '}';
}


RecordAddress.prototype.toXmlFormat = function() {
    return '\n<address>\n' +
                 '\t<street> ' + this.street +'</stree>\n' +
                 '\t<house>' + this.house + '</house>\n' +
                 '\t<flat>' + this.flat + '</flat>\n' +
           '</address>';
}

module.exports.RecordAddress = RecordAddress;
