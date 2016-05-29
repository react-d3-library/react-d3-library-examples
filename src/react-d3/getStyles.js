const toCamelCase = require('./../../utils/toCamelCase');

module.exports =  styleObject => {

	var styles = {};

	if(typeof styleObject === 'string') {
		let styleArray = styleObject.split(';');
		styleArray.pop();
		styleArray.forEach(style => {
		    let indexOfColon = style.indexOf(':');
		    let key = toCamelCase(style.slice(0, indexOfColon));
		    var value = style.slice(indexOfColon + 1);
			var value = isNaN(value) ? value.trim() : Number(value);
			styles[key.trim()] = value;
		})


	} else {
		for(var key in styleObject) {
			if(!isNaN(key)) {
				styles[styleObject[key]] = styleObject[styleObject[key]];
			}
		}
	}
	return styles;
}
