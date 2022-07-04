let jsObject = {
    "professor": {
        "nome": "Alceu",
        "sobrenome": "Marques",
        "curso": [
            "JavaScript",
            "HTML",
            "CSS",
            "Java"
        ]
    }
}

const OBJtoXML = (obj) => {
    var xml = '';
    for (var prop in obj) {
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
                xml += "<" + prop + ">";
                xml += OBJtoXML(new Object(obj[prop]));
                xml += "</" + prop + ">";
            }
        } else if (typeof obj[prop] == "object") {
            xml += OBJtoXML(new Object(obj[prop]));
        } else {
            xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\?[0-9]{1,}>/g, '');
    return xml

}

console.log(JSON.stringify((jsObject)))
console.log(OBJtoXML(jsObject))

jsObject['professor'] = null

console.log(JSON.stringify((jsObject)))
console.log(OBJtoXML(jsObject))