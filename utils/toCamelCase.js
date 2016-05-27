module.exports = spinalCaseValue => {
	'use strict';
	let strArray = spinalCaseValue.split('');
	let shouldCapitalize = false;
	var output = strArray.reduce((acc, cur) => {
		if(cur === '-') {
			shouldCapitalize = true;
			return acc;
		} else if (shouldCapitalize) {
			shouldCapitalize = false;
			return acc.concat(cur.toUpperCase());
		} else {
			return acc.concat(cur);
		}
	})
	return output;
}



